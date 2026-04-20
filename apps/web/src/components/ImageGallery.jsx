import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Displays an interactive image gallery.
 * @param {Object} props - Component props.
 * @param {string[]} props.images - Array of image URLs.
 * @param {string} [props.alt] - Base alt text.
 */
function ImageGallery({ images, alt = 'Gallery image' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!images?.length) return null;

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden group">
        <img
          src={images[currentIndex]}
          alt={`${alt} - View ${currentIndex + 1}`}
          className="w-full h-full object-contain cursor-zoom-in transition-transform duration-300"
          onClick={() => setIsFullscreen(true)}
        />

        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md rounded-full"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md rounded-full"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary outline-none ${
                idx === currentIndex
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-transparent hover:border-muted-foreground/30 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View thumbnail ${idx + 1}`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white rounded-full z-50"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen"
          >
            <X className="w-8 h-8" />
          </Button>
          <img
            src={images[currentIndex]}
            alt={`${alt} - Fullscreen ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white rounded-full"
                onClick={goToPrevious}
                aria-label="Previous"
              >
                <ChevronLeft className="w-10 h-10" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white rounded-full"
                onClick={goToNext}
                aria-label="Next"
              >
                <ChevronRight className="w-10 h-10" />
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;