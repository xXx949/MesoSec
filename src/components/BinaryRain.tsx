import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Column {
  id: number;
  delay: number;
  duration: number;
  x: number;
}

interface BinaryRainProps {
  columnCount?: number;
  opacity?: number;
}

export function BinaryRain({ columnCount = 30, opacity = 0.2 }: BinaryRainProps) {
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    const cols: Column[] = Array.from({ length: columnCount }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      x: (i / columnCount) * 100,
    }));
    setColumns(cols);
  }, [columnCount]);

  const generateBinary = () => {
    return Array.from({ length: 20 }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {columns.map((col) => (
        <motion.div
          key={col.id}
          className="absolute top-0 font-mono text-xs text-green-400"
          style={{ left: `${col.x}%` }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: col.duration,
            delay: col.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="flex flex-col gap-1">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i}>{generateBinary()}</div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
