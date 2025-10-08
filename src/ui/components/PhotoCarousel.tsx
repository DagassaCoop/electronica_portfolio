import { FC, useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/ui/shadcn/carousel";
import { Blurhash } from "react-blurhash";
import { IPhoto } from "@/entities/Work";
import { useImagePreloader } from "@/lib/useImagePreloader";

interface IPhotoCarouselProps {
  photos: IPhoto[];
  onClose?: () => void;
}

const PhotoCarousel: FC<IPhotoCarouselProps> = ({ photos, onClose }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { isImageLoaded, registerImageLoaded } = useImagePreloader();
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback(
    (url: string) => {
      registerImageLoaded(url);
    },
    [registerImageLoaded]
  );

  // Preload images programmatically to avoid progressive loading
  useEffect(() => {
    photos.forEach((photo) => {
      if (!isImageLoaded(photo.source) && !loadingImages.has(photo.source)) {
        setLoadingImages((prev) => new Set(prev).add(photo.source));

        const img = new Image();
        img.onload = () => {
          handleImageLoad(photo.source);
          setLoadingImages((prev) => {
            const next = new Set(prev);
            next.delete(photo.source);
            return next;
          });
        };
        img.onerror = () => {
          setLoadingImages((prev) => {
            const next = new Set(prev);
            next.delete(photo.source);
            return next;
          });
        };
        img.src = photo.source;
      }
    });
  }, [photos, isImageLoaded, loadingImages, handleImageLoad]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api?.scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        api?.scrollNext();
      } else if (event.key === "Escape" && onClose) {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [api, onClose]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo, index) => (
            <CarouselItem
              key={photo.id}
              className="pl-2 md:pl-4 basis-[85%] md:basis-[80%]"
            >
              <div className="border-[3px] border-color-grey rounded-3xl overflow-hidden shadow-xl bg-color-kidnapper transition-transform duration-300 relative min-h-[300px]">
                {photo.blurhash && !isImageLoaded(photo.source) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-auto">
                      <Blurhash
                        hash={photo.blurhash}
                        width="100%"
                        height="100%"
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                      />
                    </div>
                  </div>
                )}
                {isImageLoaded(photo.source) && (
                  <img
                    src={photo.source}
                    alt={photo.title}
                    className="w-full h-auto animate-fadeIn"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-40 size-12 bg-color-kidnapper border-color-grey text-color-black hover:bg-color-blue hover:text-white transition-colors" />
        <CarouselNext className="hidden md:flex -right-40 size-12 bg-color-kidnapper border-color-grey text-color-black hover:bg-color-blue hover:text-white transition-colors" />
      </Carousel>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-color-blue"
                : "w-2 bg-color-grey hover:bg-color-blue/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
