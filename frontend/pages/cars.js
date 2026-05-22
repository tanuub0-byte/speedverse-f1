import Head from 'next/head';
import { motion } from 'framer-motion';

const cars = [
  { name: 'RB20', team: 'Red Bull Racing', engine: 'Honda RBPT 1.6L V6', topSpeed: '372 km/h', weight: '798 kg', color: '#3671C6' },
  { name: 'SF-24', team: 'Ferrari', engine: 'Ferrari 066/12 1.6L V6', topSpeed: '368 km/h', weight: '798 kg', color: '#E8002D' },
  { name: 'W15', team: 'Mercedes', engine: 'Mercedes M15 1.6L V6', topSpeed: '365 km/h', weight: '798 kg', color: '#27F4D2' },
  { name: 'MCL38', team: 'McLaren', engine: 'Mercedes M15 1.6L V6', topSpeed: '362 km/h', weight: '798 kg', color: '#FF8000' },
  { name: 'AMR24', team: 'Aston Martin', engine: 'Mercedes M15 1.6L V6', topSpeed: '358 km/h', weight: '798 kg', color: '#358C75' },
  { name: 'A524', team: 'Alpine', engine: 'Renault E-Tech RE24', topSpeed: '355 km/h', weight: '798 kg', color: '#0093CC' },
];

export default function Cars() {
  return (
    <>
      <Head><title>Cars — SpeedVerse F1</title></Head>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-12 text-center">
            <h1 className="section-title gradient-text mb-3">F1 Cars</h1>
            <p className="section-subtitle">2025 Season Machinery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, i) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 card-hover cursor-pointer"
              >
                {/* Car silhouette placeholder */}
                <div
                  className="w-full h-32 rounded-lg mb-5 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${car.color}11, ${car.color}22)`, border: `1px solid ${car.color}33` }}
                >
                  <svg viewBox="0 0 200 60" className="w-40 opacity-80">
                    <path d="M20 35 L40 20 L140 20 L170 30 L180 35 L170 40 L40 40 Z" fill={car.color} />
                    <path d="M70 20 L80 10 L120 10 L130 20 Z" fill="#1a1a1a" />
                    <path d="M160 35 L185 30 L190 35 L185 40 L160 40 Z" fill={car.color} />
                    <rect x="15" y="22" width="5" height="18" fill={car.color} />
                    <rect x="10" y="18" width="15" height="4" fill={car.color} />
                    <circle cx="55" cy="42" r="10" fill="#333" stroke={car.color} strokeWidth="2" />
                    <circle cx="145" cy="42" r="10" fill="#333" stroke={car.color} strokeWidth="2" />
                  </svg>
                </div>

                <h2 className="font-orbitron text-xl font-bold mb-1" style={{ color: car.color }}>{car.name}</h2>
                <p className="text-gray-400 text-sm font-rajdhani mb-4">{car.team}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-mono">Engine</span>
                    <span className="text-gray-300 font-rajdhani text-right max-w-[60%]">{car.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-mono">Top Speed</span>
                    <span className="text-gray-300 font-rajdhani">{car.topSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-mono">Weight</span>
                    <span className="text-gray-300 font-rajdhani">{car.weight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
