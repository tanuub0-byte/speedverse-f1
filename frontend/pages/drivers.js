import Head from 'next/head';
import { motion } from 'framer-motion';

const drivers = [
  { name: 'Max Verstappen', number: 1, team: 'Red Bull Racing', nationality: '🇳🇱', points: 575, wins: 19, color: '#3671C6' },
  { name: 'Sergio Perez', number: 11, team: 'Red Bull Racing', nationality: '🇲🇽', points: 285, wins: 2, color: '#3671C6' },
  { name: 'Lewis Hamilton', number: 44, team: 'Mercedes', nationality: '🇬🇧', points: 234, wins: 0, color: '#27F4D2' },
  { name: 'George Russell', number: 63, team: 'Mercedes', nationality: '🇬🇧', points: 228, wins: 1, color: '#27F4D2' },
  { name: 'Charles Leclerc', number: 16, team: 'Ferrari', nationality: '🇲🇨', points: 356, wins: 3, color: '#E8002D' },
  { name: 'Carlos Sainz', number: 55, team: 'Ferrari', nationality: '🇪🇸', points: 290, wins: 2, color: '#E8002D' },
  { name: 'Lando Norris', number: 4, team: 'McLaren', nationality: '🇬🇧', points: 374, wins: 4, color: '#FF8000' },
  { name: 'Oscar Piastri', number: 81, team: 'McLaren', nationality: '🇦🇺', points: 292, wins: 2, color: '#FF8000' },
  { name: 'Fernando Alonso', number: 14, team: 'Aston Martin', nationality: '🇪🇸', points: 62, wins: 0, color: '#358C75' },
  { name: 'Lance Stroll', number: 18, team: 'Aston Martin', nationality: '🇨🇦', points: 24, wins: 0, color: '#358C75' },
];

export default function Drivers() {
  return (
    <>
      <Head><title>Drivers — SpeedVerse F1</title></Head>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-12 text-center">
            <h1 className="section-title gradient-text mb-3">F1 Drivers</h1>
            <p className="section-subtitle">2025 Season Driver Standings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {drivers.map((driver, i) => (
              <motion.div
                key={driver.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-5 card-hover cursor-pointer relative overflow-hidden"
              >
                {/* Number watermark */}
                <div
                  className="absolute -right-2 -top-2 font-orbitron text-7xl font-black opacity-5 select-none"
                  style={{ color: driver.color }}
                >
                  {driver.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{driver.nationality}</span>
                    <span
                      className="font-orbitron text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: driver.color + '22', color: driver.color }}
                    >
                      #{driver.number}
                    </span>
                  </div>
                  <h2 className="font-orbitron text-base font-bold text-white mb-1">{driver.name}</h2>
                  <p className="text-gray-500 text-xs font-rajdhani mb-4">{driver.team}</p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="font-orbitron text-lg font-bold" style={{ color: driver.color }}>{driver.points}</div>
                      <div className="text-gray-600 text-xs font-mono">PTS</div>
                    </div>
                    <div className="text-right">
                      <div className="font-orbitron text-lg font-bold text-white">{driver.wins}</div>
                      <div className="text-gray-600 text-xs font-mono">WINS</div>
                    </div>
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
