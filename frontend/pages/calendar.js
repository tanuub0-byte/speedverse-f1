import Head from 'next/head';
import { motion } from 'framer-motion';

const races = [
  { round: 1, name: 'Bahrain Grand Prix', circuit: 'Bahrain International Circuit', country: '🇧🇭', date: 'Mar 2', status: 'completed', winner: 'Max Verstappen' },
  { round: 2, name: 'Saudi Arabian Grand Prix', circuit: 'Jeddah Corniche Circuit', country: '🇸🇦', date: 'Mar 9', status: 'completed', winner: 'Max Verstappen' },
  { round: 3, name: 'Australian Grand Prix', circuit: 'Albert Park Circuit', country: '🇦🇺', date: 'Mar 24', status: 'completed', winner: 'Carlos Sainz' },
  { round: 4, name: 'Japanese Grand Prix', circuit: 'Suzuka International Racing Course', country: '🇯🇵', date: 'Apr 7', status: 'completed', winner: 'Max Verstappen' },
  { round: 5, name: 'Chinese Grand Prix', circuit: 'Shanghai International Circuit', country: '🇨🇳', date: 'Apr 21', status: 'completed', winner: 'Max Verstappen' },
  { round: 6, name: 'Miami Grand Prix', circuit: 'Miami International Autodrome', country: '🇺🇸', date: 'May 5', status: 'completed', winner: 'Lando Norris' },
  { round: 7, name: 'Emilia Romagna Grand Prix', circuit: 'Autodromo Enzo e Dino Ferrari', country: '🇮🇹', date: 'May 19', status: 'upcoming', winner: null },
  { round: 8, name: 'Monaco Grand Prix', circuit: 'Circuit de Monaco', country: '🇲🇨', date: 'May 26', status: 'upcoming', winner: null },
  { round: 9, name: 'Canadian Grand Prix', circuit: 'Circuit Gilles Villeneuve', country: '🇨🇦', date: 'Jun 9', status: 'upcoming', winner: null },
  { round: 10, name: 'Spanish Grand Prix', circuit: 'Circuit de Barcelona-Catalunya', country: '🇪🇸', date: 'Jun 23', status: 'upcoming', winner: null },
  { round: 11, name: 'Austrian Grand Prix', circuit: 'Red Bull Ring', country: '🇦🇹', date: 'Jun 30', status: 'upcoming', winner: null },
  { round: 12, name: 'British Grand Prix', circuit: 'Silverstone Circuit', country: '🇬🇧', date: 'Jul 7', status: 'upcoming', winner: null },
];

const statusColor = { completed: '#22c55e', upcoming: '#E8002D', live: '#facc15' };
const statusLabel = { completed: 'Completed', upcoming: 'Upcoming', live: 'LIVE' };

export default function Calendar() {
  return (
    <>
      <Head><title>Calendar — SpeedVerse F1</title></Head>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-12 text-center">
            <h1 className="section-title gradient-text mb-3">Race Calendar</h1>
            <p className="section-subtitle">2025 Formula 1 World Championship</p>
          </div>

          <div className="space-y-3">
            {races.map((race, i) => (
              <motion.div
                key={race.round}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5 flex items-center gap-5 card-hover"
              >
                {/* Round number */}
                <div className="font-orbitron text-2xl font-black text-dark-border w-10 text-center shrink-0">
                  {String(race.round).padStart(2, '0')}
                </div>

                {/* Flag + info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-lg">{race.country}</span>
                    <h3 className="font-orbitron text-sm font-bold text-white truncate">{race.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs font-rajdhani truncate">{race.circuit}</p>
                </div>

                {/* Date */}
                <div className="font-mono text-sm text-gray-400 shrink-0">{race.date}</div>

                {/* Status / Winner */}
                <div className="shrink-0 text-right">
                  <span
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{ background: statusColor[race.status] + '22', color: statusColor[race.status] }}
                  >
                    {statusLabel[race.status]}
                  </span>
                  {race.winner && (
                    <p className="text-gray-500 text-xs mt-1 font-rajdhani">{race.winner}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
