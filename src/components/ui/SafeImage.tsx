'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackIcon?: string;
  category?: string;
}

export function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
  fallbackIcon = '🌱',
  category,
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-stone-100 border border-emerald-100/60 text-stone-600 select-none ${
          fill ? 'absolute inset-0 w-full h-full' : ''
        } ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <span className="text-4xl md:text-5xl mb-2 drop-shadow-sm animate-pulse-slow">
          {fallbackIcon}
        </span>
        <span className="text-xs font-medium text-emerald-800/80 px-2.5 py-0.5 rounded-full bg-emerald-100/80 uppercase tracking-wider">
          {category || 'Farm-Fresh'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`}>
      {loading && (
        <div
          className={`absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center ${
            fill ? 'w-full h-full' : ''
          }`}
        >
          <span className="text-2xl opacity-40">{fallbackIcon}</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        className={`${className} transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
