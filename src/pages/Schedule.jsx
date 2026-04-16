import { motion } from 'framer-motion'
import { Clock, MapPin, CalendarDays, Trophy } from 'lucide-react'

const games = [
    { id: 1, month: 'May', day: '15', time: '5:30 PM', division: 'Mosquito', matchup: 'HP Tigers vs PR River Rats', location: 'Jaycee Park - Field A' },
    { id: 2, month: 'May', day: '15', time: '6:00 PM', division: 'Peewee', matchup: 'HP Giants vs Slave Lake Heat', location: 'Elks Field' },
    { id: 3, month: 'May', day: '16', time: '10:00 AM', division: 'T-Ball', matchup: 'Practice Session', location: 'Jaycee Park - Small Diamond' },
]

export default function Schedule() {
    return (
        // bg-forest-950 te diamond-bg utility use kiti aa
        <div className="pt-32 pb-20 min-h-screen bg-forest-950 diamond-bg relative overflow-hidden">
            
            {/* Subtle Glow taaki header pop kare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gold-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 mb-4">
                        <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.3em]">Spring 2026 Season</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                            Game <span className="text-gold-400">Schedule</span>
                        </h2>
                    <div className="w-16 h-1 bg-gold-400 mx-auto mt-6"></div>
                </motion.div>

                <div className="grid gap-6">
                    {games.map((game, i) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.01, x: 5 }}
                            className="bg-forest-900/40 backdrop-blur-md p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/5 hover:border-gold-400/30 transition-all shadow-xl"
                        >
                            <div className="flex items-center gap-6">
                                {/* Date Badge - Hun eh hor vi ghaint lagguga */}
                                <div className="bg-gradient-to-br from-gold-500 to-gold-300 text-forest-950 p-4 rounded-2xl font-black text-center min-w-[90px] shadow-xl shadow-gold-500/10 transform -rotate-3 group-hover:rotate-0 transition-transform">
                                    <div className="text-[10px] uppercase tracking-wider font-body opacity-80">{game.month}</div>
                                    <div className="text-3xl leading-none font-display italic">{game.day}</div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Trophy size={12} className="text-gold-400" />
                                        <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.2em] font-body">{game.division}</span>
                                    </div>
                                    <div className="text-white font-display font-black text-xl md:text-2xl italic uppercase tracking-tight leading-tight">
                                        {game.matchup}
                                    </div>
                                </div>
                            </div>

                            {/* Details - Layout clean karta */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-forest-200 text-sm font-body border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center">
                                        <Clock size={16} className="text-gold-400" />
                                    </div>
                                    <span className="font-bold uppercase tracking-widest text-[11px]">{game.time}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center">
                                        <MapPin size={16} className="text-gold-400" />
                                    </div>
                                    <span className="font-bold uppercase tracking-widest text-[11px] italic">{game.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Notice Card */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-8 rounded-3xl border border-dashed border-gold-400/20 bg-gold-400/5 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
                >
                    <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-forest-950 text-xl shadow-lg shadow-gold-400/20">
                        ⛈️
                    </div>
                    <div>
                        <h3 className="text-white font-bold font-display italic uppercase">Weather Updates</h3>
                        <p className="text-forest-400 text-sm font-body mt-1">
                            Games are subject to change based on weather. Check our Facebook Group for real-time rain-out alerts.
                        </p>
                    </div>
                    <button className="md:ml-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-xl transition-all border border-white/10">
                        FB Alerts
                    </button>
                </motion.div>
            </div>
        </div>
    )
}