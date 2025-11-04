import { motion } from 'motion/react';

interface StatusIndicatorProps {
  status: string;
  label: string;
  type?: 'online' | 'active' | 'scanning';
}

export function StatusIndicator({ status, label, type = 'online' }: StatusIndicatorProps) {
  const getStatusColor = () => {
    switch (type) {
      case 'online':
        return 'bg-green-400';
      case 'active':
        return 'bg-blue-400';
      case 'scanning':
        return 'bg-yellow-400';
      default:
        return 'bg-green-400';
    }
  };

  return (
    <div className="flex items-center gap-3 font-mono">
      <span className="text-slate-400">{label}:</span>
      <div className="flex items-center gap-2">
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={`w-2 h-2 rounded-full ${getStatusColor()}`}
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className={`w-2 h-2 rounded-full ${getStatusColor()}`}
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.3,
            }}
          />
          <motion.div
            className={`w-2 h-2 rounded-full ${getStatusColor()}`}
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.6,
            }}
          />
        </motion.div>
        <span className="text-green-400 uppercase tracking-wider">{status}</span>
      </div>
    </div>
  );
}
