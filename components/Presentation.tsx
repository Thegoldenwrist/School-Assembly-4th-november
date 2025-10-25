
import React, { useState, useCallback, useEffect } from 'react';
import type { SlideContent } from '../types';
import Slide from './Slide';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

interface PresentationProps {
  slides: SlideContent[];
}

const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const goToPrevious = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  const goToNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex));
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Prevent default spacebar action (like scrolling)
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext]);


  const currentSlide = slides[currentIndex];
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full flex-grow relative overflow-hidden">
        <Slide
          key={currentSlide.id}
          slide={currentSlide}
          direction={direction}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={goToPrevious}
            disabled={isFirstSlide}
            className="flex items-center gap-2 px-6 py-3 bg-white/80 text-gray-800 font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            <ArrowLeftIcon />
            Previous
          </button>
          <div className="text-white font-semibold text-lg">
            Slide {currentIndex + 1} of {slides.length}
          </div>
          <button
            onClick={goToNext}
            disabled={isLastSlide}
            className="flex items-center gap-2 px-6 py-3 bg-white/80 text-gray-800 font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            Next
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;