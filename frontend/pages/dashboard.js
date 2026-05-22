import Head from 'next/head';
import { motion } from 'framer-motion';

const standings = [
  { pos: 1, driver: 'Max Verstappen', team: 'Red Bull Racing', points: 575, color: '#3671C6' },
  { pos: 2, driver: 'Lando Norris', team: 'McLaren', points: 374, color: '#FF8000' },
  { pos: 3, driver: 'Charles Leclerc', team: 'Ferrari', points: 356, color: '#E8002D' },
  { pos: 4, driver: 'Oscar Piastri', team: 'McLaren', points: 292, color: '#FF8000' },
  { pos: 5, driver: 'Carlos Sainz', team: 'Ferrari', points: 290, color: '#E8002D' },
];

const constructors = [
  { pos: 1, team: 'Red Bull Racing', points: 860, color: '#3671C6' },
  { pos: 2, team: 'McLaren', points: 666, color: '#FF8000' },
  { pos: 3, team: 'Ferrari', points: 652, color: '#E8002D' },
  { pos: 4, team: 'Mercedes', points: 462, color: '#27F4D2' },
  { pos: 5, team: 'Aston Martin', points: 86, color: '#358C75' },
];

const statCards = [
  { label: 'Races Completed', value: '6', sub: 'of 24 total' },
  { label: 'Championship Leader', value: 'VER', sub: '+201 pts ahead' },
  { label: 'Fastest Lap Record', value: '1:19.119', sub: 'Bahrain — Verstappen' },
  { label: 'Next Race', value: 'Imola', sub: 'May 19, 2025' },
];

export default function Dashboard() {
  return (
    <>
      <Head><title>Dashboard — SpeedVerse F1</title></Head>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-10 text-center">
            <h1 className="section-title gradient-text mb-3">Dashboard</h1>
            <p className="section-subtitle">2025 Season Overview</p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {statCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <div className="font-orbitron text-2xl font-black text-f1-red mb-1">{card.value}</div>
                <div className="text-white text-sm font-rajdhani font-semibold">{card.label}</div>
                <div className="text-gray-500 text-xs font-mono mt-1">{card.sub}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Driver standings */}
            <div className="glass-card p-6">
              <h2 className="font-orbitron text-sm font-bold text-f1-red tracking-widest uppercase mb-5">Driver Standings</h2>
              <div className="space-y-3">
                {standings.map((row) => (
                  <div key={row.pos} className="flex items-center gap-4">
                    <span className="font-orbitron text-sm text-gray-600 w-5">{row.pos}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-rajdhani text-sm text-white font-semibold">{row.driver}</span>
                        <span className="font-orbitron text-sm font-bold" style={{ color: row.color }}>{row.points}</span>
                      </div>
                      <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${(row.points / 575) * 100}%`, background: row.color }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Constructor standings */}
            <div className="glass-card p-6">
              <h2 className="font-orbitron text-sm font-bold text-f1-red tracking-widest uppercase mb-5">Constructor Standings</h2>
              <div className="space-y-3">
                {constructors.map((row) => (
                  <div key={row.pos} className="flex items-center gap-4">
                    <span className="font-orbitron text-sm text-gray-600 w-5">{row.pos}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-rajdhani text-sm text-white font-semibold">{row.team}</span>
                        <span className="font-orbitron text-sm font-bold" style={{ color: row.color }}>{row.points}</span>
                      </div>
                      <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${(row.points / 860) * 100}%`, background: row.color }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
