'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

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

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center gap-4 overflow-hidden ">
      {/* Top Row - Moving Right */}
      <MarqueeRow direction="right" speed={50}>
        {Array.from({ length: 12 }).map((_, index) => (
          <img
            key={index}
            alt="img"
            className="h-[300px] w-[400px] rounded-xl grayscale"
            src="/calculators/calculator-harris-benedict.png"
          />
        ))}
      </MarqueeRow>

      {/* Bottom Row - Moving Left */}
      <MarqueeRow direction="left" speed={60}>
        {Array.from({ length: 12 }).map((_, index) => (
          <img
            key={index}
            alt="img"
            className="h-[300px] w-[500px] rounded-xl grayscale"
            src="/calculators/calculator-harris-benedict.png"
          />
        ))}
      </MarqueeRow>

      {/* Center Card */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-sm flex flex-col items-center justify-center gap-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center pointer-events-auto shadow-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-md leading-[1] font-serif">
            ¡Comienza tu camino!
          </h1>
          <Button size="lg" variant="outline" className="h-12">
            Comenzar
          </Button>
        </motion.div>
      </div>

      {/* Subtle Vignette */}
      <div className="absolute top-0 left-0 z-10 h-full w-[160px] bg-gradient-to-r from-background to-transparent md:w-[200px]" />
      <div className="absolute top-0 right-0 z-10 h-full w-[160px] bg-gradient-to-l from-background to-transparent md:w-[200px]" />
    </section>
  );
}
