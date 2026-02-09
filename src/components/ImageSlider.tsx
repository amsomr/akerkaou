"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import clsx from "clsx";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full group">
      <div className="w-full h-full rounded-2xl bg-zinc-200 relative overflow-hidden aspect-video">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover transition-all duration-500"
        />
        
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </div>
        
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors" onClick={nextSlide}>
          <ChevronRight size={30} />
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {images.map((_, slideIndex) => (
                    <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={clsx(
                        "transition-all w-3 h-3 bg-white rounded-full cursor-pointer shadow-sm",
                        currentIndex === slideIndex ? "p-2 opacity-100" : "bg-opacity-50 hover:bg-opacity-75"
                    )}
                    ></div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
