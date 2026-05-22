import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ['All', 'Race', 'Qualifying', 'Pit Stop', 'Podium'];

const galleryItems = [
  { id: 1, title: 'Bahrain Start', category: 'Race', color: '#3671C6', aspect: 'wide' },
  { id: 2, title: 'Ferrari Pit Stop', category: 'Pit Stop', color: '#E8002D', aspect: 'tall' },
  { id: 3, title: 'Monaco Qualifying', category: 'Qualifying', color: '#27F4D2', aspect: 'wide' },
  { id: 4, title: 'Verstappen Podium', category: 'Podium', color: '#3671C6', aspect: 'square' },
  { id: 5, title: 'McLaren Overtake', category: 'Race', color: '#FF8000', aspect: 'wide' },
  { id: 6, title: 'Leclerc Pole Lap', category: 'Qualifying', color: '#E8002D', aspect: 'square' },
  { id: 7, title: 'Norris Victory', category: 'Podium', color: '#FF8000', aspect: 'tall' },
  { id: 8, title: 'Red Bull Pit Crew', category: 'Pit Stop', color: '#3671C6', aspect: 'wide' },
  { id: 9, title: 'Suzuka Night', category: 'Race', color: '#FF8000', aspect: 'square' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <>
      <Head><title>Gallery — SpeedVerse F1</title></Head>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-10 text-center">
            <h1 className="section-title gradient-text mb-3">Gallery</h1>
            <p className="section-subtitle">Iconic moments from the 2025 season</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded border transition-all duration-200 ${
                  active === cat
                    ? 'border-f1-red bg-f1-red/10 text-f1-red'
                    : 'border-dark-border text-gray-500 hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid glass-card overflow-hidden cursor-pointer card-hover group"
              >
                <div
                  className="w-full flex items-center justify-center relative"
                  style={{
                    height: item.aspect === 'wide' ? '180px' : item.aspect === 'tall' ? '280px' : '220px',
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                  }}
                >
                  <div className="font-orbitron text-xs text-gray-600 tracking-widest uppercase">{item.category}</div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: `${item.color}22` }}
                  >
                    <span className="font-orbitron text-sm font-bold text-white">{item.title}</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-rajdhani text-sm text-gray-300">{item.title}</p>
                  <span className="font-mono text-xs text-gray-600">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
