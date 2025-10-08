import { FC, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/ui/shadcn/carousel";
import { IPhoto } from "@/entities/Work";

interface IPhotoCarouselProps {
  photos: IPhoto[];
  onClose?: () => void;
}

const PhotoCarousel: FC<IPhotoCarouselProps> = ({ photos, onClose }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

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

  const handleImageLoad = (photoId: string) => {
    setLoadedImages((prev) => new Set(prev).add(photoId));
  };

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
          {photos.map((photo) => (
            <CarouselItem
              key={photo.id}
              className="pl-2 md:pl-4 basis-[85%] md:basis-[80%] min-h-[20vh]"
            >
              <div className="border-[3px] border-color-grey rounded-3xl overflow-hidden shadow-xl bg-color-kidnapper transition-transform duration-300 relative">
                {!loadedImages.has(photo.id) && (
                  <div className="absolute inset-0 bg-color-kidnapper flex items-center justify-center">
                    <div className="w-full h-[60vh] flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-color-grey/30 border-t-color-blue rounded-full animate-spin" />
                    </div>
                  </div>
                )}
                <img
                  src={photo.source}
                  alt={photo.title}
                  className={`w-full h-auto object-cover transition-opacity duration-700 ${
                    loadedImages.has(photo.id) ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(photo.id)}
                />
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
