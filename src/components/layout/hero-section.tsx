'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MarqueeRowProps {
  direction?: 'left' | 'right';
  speed?: number;
  children: ReactNode;
}

const MarqueeRow = ({
  direction = 'left',
  speed = 40,
  children,
}: MarqueeRowProps) => {
  const xTranslation = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ x: xTranslation }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        className="flex gap-4 pr-4 min-w-max"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const IMAGES = [
  {
    src: '/hero/1.webp',
    alt: 'img',
    // className: 'h-[300px] w-[500px] rounded-xl grayscale',
  },
  {
    src: '/hero/2.webp',
    alt: 'img',
    // className: 'h-[300px] w-[500px] rounded-xl grayscale',
  },
  {
    src: '/hero/3.webp',
    alt: 'img',
    // className: 'h-[300px] w-[500px] rounded-xl grayscale',
  },
  {
    src: '/hero/4.webp',
    alt: 'img',
    // className: 'h-[300px] w-[500px] rounded-xl grayscale',
  },
  {
    src: '/hero/5.webp',
    alt: 'img',
    // className: 'h-[300px] w-[500px] rounded-xl grayscale',
  },
  {
    src: '/hero/6.webp',
    alt: 'img',
    // className: 'h-[300px] w-[500px] rounded-xl grayscale',
  },
];

export function HeroSection() {
  return (
    <section className="relative w-full h-svh max-h-svh flex flex-col justify-center gap-4 overflow-hidden ">
      {/* Top Row - Moving Right */}
      <MarqueeRow direction="right" speed={50}>
        {IMAGES.map(({ src, alt }) => (
          <img
            key={src}
            alt={alt}
            className="min-h-[300px] max-h-[50svh] h-full w-full cover rounded grayscale"
            src={src}
          />
        ))}
      </MarqueeRow>

      {/* Bottom Row - Moving Left */}
      <MarqueeRow direction="left" speed={60}>
        {IMAGES.map(({ src, alt }) => (
          <img
            key={src}
            alt={alt}
            className="min-h-[300px] max-h-[50svh] h-full w-full cover rounded grayscale"
            src={src}
          />
        ))}
      </MarqueeRow>

      {/* Center Card */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-lg flex flex-col items-center justify-center gap-8 bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center pointer-events-auto shadow-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-md leading-[1] text-pretty">
            TÚ MÁXIMO NIVEL{` `}
            <em className="text-red-500">ES POSIBLE</em>
          </h1>
          <Button size="lg" variant="outline" className="rounded-full" asChild>
            <Link href="#header">¡Comienza ahora!</Link>
          </Button>
        </motion.div>
      </div>

      {/* Subtle Vignette */}
      <div className="absolute top-0 left-0 z-10 h-full sm:w-[120px] bg-gradient-to-r from-black to-transparent md:w-[200px]" />
      <div className="absolute top-0 right-0 z-10 h-full sm:w-[120px] bg-gradient-to-l from-black to-transparent md:w-[200px]" />
    </section>
  );
}
