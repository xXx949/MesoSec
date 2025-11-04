import { motion } from 'motion/react';

export function ScanLines() {
  return (
    <>
      {/* Horizontal scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px)',
          }}
        />
      </div>

      {/* Animated scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 pointer-events-none"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Vertical scan line */}
      <motion.div
        className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20 pointer-events-none"
        animate={{
          left: ['0%', '100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </>
  );
}
