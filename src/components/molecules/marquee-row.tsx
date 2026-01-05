import type { ReactNode } from 'react'
import { motion } from 'motion/react'

interface MarqueeRowProps {
  direction?: 'left' | 'right'
  speed?: number
  children: ReactNode
}

export const MarqueeRow = ({
  direction = 'left',
  speed = 40,
  children,
}: MarqueeRowProps) => {
  const xTranslation = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']

  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ x: xTranslation }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        className="flex gap-2 sm:gap-4 pr-4 min-w-max"
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
