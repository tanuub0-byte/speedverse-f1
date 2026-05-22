import Head from 'next/head';
import { motion } from 'framer-motion';
import { GiCheckeredFlag } from 'react-icons/gi';
import { FiGithub, FiTwitter } from 'react-icons/fi';

const features = [
  { title: 'Live Standings', desc: 'Real-time driver and constructor championship standings updated after every race.' },
  { title: 'Team Profiles', desc: 'Deep-dive into all 10 F1 constructors with history, stats, and car specs.' },
  { title: 'Driver Database', desc: 'Complete profiles for every driver on the grid with career statistics.' },
  { title: 'Race Calendar', desc: 'Full 2025 season schedule with circuit info, results, and upcoming events.' },
  { title: 'Car Specs', desc: 'Technical specifications for every car competing in the 2025 season.' },
  { title: 'Photo Gallery', desc: 'Curated collection of iconic moments from the current season.' },
];

export default function About() {
  return (
    <>
      <Head><title>About — SpeedVerse F1</title></Head>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Hero */}
          <div className="text-center mb-16">
            <GiCheckeredFlag className="text-f1-red text-5xl mx-auto mb-6" />
            <h1 className="section-title gradient-text mb-4">About SpeedVerse F1</h1>
            <p className="text-gray-400 text-lg font-rajdhani max-w-2xl mx-auto leading-relaxed">
              SpeedVerse F1 is an immersive Formula 1 platform built for fans who want more than just results.
              We combine live data, cinematic visuals, and deep technical content into one seamless experience.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <div className="w-8 h-0.5 bg-f1-red mb-3" />
                <h3 className="font-orbitron text-sm font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm font-rajdhani leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="glass-card p-6 text-center">
            <p className="text-gray-500 text-sm font-rajdhani leading-relaxed">
              SpeedVerse F1 is a fan-made project and is not affiliated with, endorsed by, or connected to
              Formula 1®, the FIA, or any F1 team. All trademarks belong to their respective owners.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><FiGithub size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><FiTwitter size={20} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
