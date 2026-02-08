import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'landscape' | 'square';
}

export default function SafeImage({ src, alt, className = '', aspectRatio = 'landscape' }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const fallbackImage = aspectRatio === 'square' 
    ? '/assets/generated/image-fallback-square.dim_800x800.png'
    : '/assets/generated/image-fallback-landscape.dim_1600x900.png';

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackImage);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
