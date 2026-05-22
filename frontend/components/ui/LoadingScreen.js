import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);

    const phaseTimer = setTimeout(() => setPhase(1), 1200);
    const phaseTimer2 = setTimeout(() => setPhase(2), 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(phaseTimer);
      clearTimeout(phaseTimer2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-dark-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-f1-red to-transparent"
            style={{ top: `${8 + i * 8}%`, width: '100%' }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 0.6, 0] }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* F1 Car SVG Animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Simplified F1 car shape */}
          <svg width="200" height="60" viewBox="0 0 200 60" className="drop-shadow-[0_0_20px_rgba(232,0,45,0.8)]">
            {/* Body */}
            <path d="M20 35 L40 20 L140 20 L170 30 L180 35 L170 40 L40 40 Z" fill="#E8002D" />
            {/* Cockpit */}
            <path d="M70 20 L80 10 L120 10 L130 20 Z" fill="#1a1a1a" />
            {/* Front wing */}
            <path d="M160 35 L185 30 L190 35 L185 40 L160 40 Z" fill="#E8002D" />
            {/* Rear wing */}
            <rect x="15" y="22" width="5" height="18" fill="#E8002D" />
            <rect x="10" y="18" width="15" height="4" fill="#E8002D" />
            {/* Wheels */}
            <circle cx="55" cy="42" r="10" fill="#333" stroke="#E8002D" strokeWidth="2" />
            <circle cx="145" cy="42" r="10" fill="#333" stroke="#E8002D" strokeWidth="2" />
            <circle cx="55" cy="42" r="4" fill="#555" />
            <circle cx="145" cy="42" r="4" fill="#555" />
          </svg>

          {/* Exhaust flame */}
          <motion.div
            className="absolute -left-8 top-1/2 -translate-y-1/2"
            animate={{ scaleX: [1, 1.5, 0.8, 1.3, 1], opacity: [0.8, 1, 0.6, 1, 0.8] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          >
            <div className="w-8 h-3 bg-gradient-to-l from-f1-red via-orange-500 to-transparent rounded-full blur-sm" />
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-orbitron text-5xl font-black tracking-[0.3em] text-white">
            SPEED<span className="text-f1-red">VERSE</span>
          </h1>
          <p className="font-rajdhani text-gray-400 tracking-[0.5em] text-sm mt-2 uppercase">
            Formula 1 Experience
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '300px' }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="relative"
        >
          <div className="w-[300px] h-1 bg-dark-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-f1-red to-red-400 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-xs text-gray-500">LOADING SYSTEMS</span>
            <span className="font-mono text-xs text-f1-red">{Math.min(Math.round(progress), 100)}%</span>
          </div>
        </motion.div>

        {/* Status text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-mono text-xs text-gray-600 tracking-widest uppercase"
          >
            {phase === 0 && '> Initializing race systems...'}
            {phase === 1 && '> Loading telemetry data...'}
            {phase === 2 && '> Preparing for launch...'}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-f1-red opacity-40" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-f1-red opacity-40" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-f1-red opacity-40" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-f1-red opacity-40" />
    </motion.div>
  );
}
