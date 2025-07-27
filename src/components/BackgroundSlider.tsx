import React, { useState, useEffect } from "react";
import "../styles/BackgroundSlider.css";

interface BackgroundSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({
  images,
  interval = 5000,
  className = "",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return <div className={`background-slider ${className}`} />;
  }

  return (
    <div className={`background-slider ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`background-slide ${
            index === currentImageIndex ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
      
      {/* Optional: Add dots indicator */}
      {images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundSlider;
