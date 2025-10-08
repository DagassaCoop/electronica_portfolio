/**
 * Utility for preloading images with low priority to avoid blocking main rendering
 */

interface PreloadOptions {
  priority?: "low" | "high" | "auto";
  maxParallel?: number;
}

class ImagePreloader {
  private loadedImages = new Set<string>();
  private loadingImages = new Map<string, Promise<void>>();
  private queue: string[] = [];
  private activeLoads = 0;
  private maxParallel = 3;

  /**
   * Check if image is already loaded
   */
  isLoaded(url: string): boolean {
    return this.loadedImages.has(url);
  }

  /**
   * Get all loaded image URLs
   */
  getLoadedImages(): Set<string> {
    return new Set(this.loadedImages);
  }

  /**
   * Manually register an image as loaded (e.g., when loaded directly via <img> tag)
   */
  registerLoaded(url: string): void {
    this.loadedImages.add(url);
  }

  /**
   * Preload a single image with low priority
   */
  private loadImage(
    url: string,
    priority: "low" | "high" | "auto" = "low"
  ): Promise<void> {
    // If already loaded, resolve immediately
    if (this.loadedImages.has(url)) {
      return Promise.resolve();
    }

    // If already loading, return existing promise
    if (this.loadingImages.has(url)) {
      return this.loadingImages.get(url)!;
    }

    const loadPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();

      // Set fetchpriority for non-blocking load
      if (priority === "low") {
        img.fetchPriority = "low";
      } else if (priority === "high") {
        img.fetchPriority = "high";
      }

      img.decoding = "async";

      img.onload = () => {
        this.loadedImages.add(url);
        this.loadingImages.delete(url);
        this.activeLoads--;
        this.processQueue();
        resolve();
      };

      img.onerror = () => {
        this.loadingImages.delete(url);
        this.activeLoads--;
        this.processQueue();
        reject(new Error(`Failed to load image: ${url}`));
      };

      img.src = url;
    });

    this.loadingImages.set(url, loadPromise);
    return loadPromise;
  }

  /**
   * Process the queue of images to load
   */
  private processQueue(): void {
    while (this.activeLoads < this.maxParallel && this.queue.length > 0) {
      const url = this.queue.shift()!;
      if (!this.loadedImages.has(url) && !this.loadingImages.has(url)) {
        this.activeLoads++;
        this.loadImage(url, "low").catch(() => {
          // Silently fail for background preloads
        });
      }
    }
  }

  /**
   * Preload multiple images with controlled parallelism
   */
  preloadImages(urls: string[], options: PreloadOptions = {}): Promise<void[]> {
    const { priority = "low", maxParallel = 3 } = options;
    this.maxParallel = maxParallel;

    // Use requestIdleCallback for low priority preloads
    if (priority === "low" && typeof requestIdleCallback !== "undefined") {
      return new Promise((resolve) => {
        requestIdleCallback(() => {
          this.queue.push(
            ...urls.filter(
              (url) =>
                !this.loadedImages.has(url) && !this.loadingImages.has(url)
            )
          );
          this.processQueue();

          // Return promises for all images
          const promises = urls.map((url) =>
            this.loadImage(url, priority).catch(() => {})
          );
          resolve(Promise.all(promises));
        });
      });
    }

    // For high priority or no requestIdleCallback, load immediately
    this.queue.push(
      ...urls.filter(
        (url) => !this.loadedImages.has(url) && !this.loadingImages.has(url)
      )
    );
    this.processQueue();

    const promises = urls.map((url) =>
      this.loadImage(url, priority).catch(() => {})
    );
    return Promise.all(promises);
  }

  /**
   * Clear all caches (useful for testing or memory management)
   */
  clear(): void {
    this.loadedImages.clear();
    this.loadingImages.clear();
    this.queue = [];
    this.activeLoads = 0;
  }
}

// Global singleton instance
export const imagePreloader = new ImagePreloader();
