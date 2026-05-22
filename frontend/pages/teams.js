import Head from 'next/head';
import { motion } from 'framer-motion';

const teams = [
  { name: 'Red Bull Racing', color: '#3671C6', engine: 'Honda RBPT', championships: 6, drivers: ['Max Verstappen', 'Sergio Perez'] },
  { name: 'Ferrari', color: '#E8002D', engine: 'Ferrari', championships: 16, drivers: ['Charles Leclerc', 'Carlos Sainz'] },
  { name: 'Mercedes', color: '#27F4D2', engine: 'Mercedes', championships: 8, drivers: ['Lewis Hamilton', 'George Russell'] },
  { name: 'McLaren', color: '#FF8000', engine: 'Mercedes', championships: 8, drivers: ['Lando Norris', 'Oscar Piastri'] },
  { name: 'Aston Martin', color: '#358C75', engine: 'Mercedes', championships: 0, drivers: ['Fernando Alonso', 'Lance Stroll'] },
  { name: 'Alpine', color: '#0093CC', engine: 'Renault', championships: 2, drivers: ['Pierre Gasly', 'Esteban Ocon'] },
  { name: 'Williams', color: '#64C4FF', engine: 'Mercedes', championships: 7, drivers: ['Alexander Albon', 'Logan Sargeant'] },
  { name: 'RB (AlphaTauri)', color: '#6692FF', engine: 'Honda RBPT', championships: 0, drivers: ['Yuki Tsunoda', 'Daniel Ricciardo'] },
  { name: 'Kick Sauber', color: '#52E252', engine: 'Ferrari', championships: 0, drivers: ['Valtteri Bottas', 'Zhou Guanyu'] },
  { name: 'Haas', color: '#B6BABD', engine: 'Ferrari', championships: 0, drivers: ['Kevin Magnussen', 'Nico Hulkenberg'] },
];

export default function Teams() {
  return (
    <>
      <Head><title>Teams — SpeedVerse F1</title></Head>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-12 text-center">
            <h1 className="section-title gradient-text mb-3">F1 Teams</h1>
            <p className="section-subtitle">All 10 constructors competing in the 2025 season</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, i) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 card-hover cursor-pointer"
                style={{ borderTop: `3px solid ${team.color}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="font-orbitron text-lg font-bold text-white">{team.name}</h2>
                  <span className="font-mono text-xs text-gray-500 bg-dark-border px-2 py-1 rounded">
                    {team.championships} 🏆
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3 font-rajdhani">Engine: {team.engine}</p>
                <div className="space-y-1">
                  {team.drivers.map(d => (
                    <div key={d} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: team.color }} />
                      <span className="text-gray-300 text-sm font-rajdhani">{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
