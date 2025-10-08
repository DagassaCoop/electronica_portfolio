import { useEffect, useState, useCallback } from "react";
import { imagePreloader } from "./imagePreloader";

/**
 * Hook for preloading images with global cache
 * Images loaded once stay cached for the entire session
 */
export const useImagePreloader = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(
    imagePreloader.getLoadedImages()
  );

  // Update state when images are loaded
  useEffect(() => {
    const interval = setInterval(() => {
      const currentLoaded = imagePreloader.getLoadedImages();
      if (currentLoaded.size !== loadedImages.size) {
        setLoadedImages(new Set(currentLoaded));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [loadedImages.size]);

  /**
   * Preload images with low priority (on hover, background)
   */
  const preloadImages = useCallback((urls: string[]) => {
    imagePreloader.preloadImages(urls, {
      priority: "low",
      maxParallel: 3,
    });
  }, []);

  /**
   * Preload images with high priority (when modal opens)
   */
  const preloadImagesHighPriority = useCallback((urls: string[]) => {
    imagePreloader.preloadImages(urls, {
      priority: "high",
      maxParallel: 5,
    });
  }, []);

  /**
   * Check if specific image is loaded
   */
  const isImageLoaded = useCallback(
    (url: string) => {
      return imagePreloader.isLoaded(url);
    },
    [loadedImages]
  );

  /**
   * Register an image as loaded (when loaded directly via <img> tag)
   */
  const registerImageLoaded = useCallback((url: string) => {
    imagePreloader.registerLoaded(url);
    setLoadedImages(new Set(imagePreloader.getLoadedImages()));
  }, []);

  return {
    preloadImages,
    preloadImagesHighPriority,
    isImageLoaded,
    registerImageLoaded,
    loadedImages,
  };
};
