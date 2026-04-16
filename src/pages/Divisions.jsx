import { motion } from 'framer-motion'

const divisions = [
    { name: 'T-Ball', ages: '4 – 6', desc: 'First taste of the game. All about fun, movement, and making friends.', color: 'from-emerald-900/60 to-emerald-800/30', accent: 'text-emerald-300', border: 'border-emerald-700/40' },
    { name: 'Rookie Ball', ages: '7 – 8', desc: 'Coach-pitch format. Learning to swing, catch, and run the bases.', color: 'from-teal-900/60 to-teal-800/30', accent: 'text-teal-300', border: 'border-teal-700/40' },
    { name: 'Mosquito', ages: '9 – 10', desc: 'Kid-pitch begins. Real game rules, team strategy, and competitive play.', color: 'from-forest-900/60 to-forest-800/30', accent: 'text-forest-300', border: 'border-forest-600/40' },
    { name: 'Peewee', ages: '11 – 12', desc: 'Full diamond. Positions, pitching rules, and serious skill development.', color: 'from-yellow-900/60 to-yellow-800/20', accent: 'text-gold-300', border: 'border-gold-600/30' },
    { name: 'Bantam', ages: '13 – 14', desc: 'Competitive travel ball. Tournament play across Alberta and beyond.', color: 'from-orange-900/50 to-orange-800/20', accent: 'text-orange-300', border: 'border-orange-700/30' },
]

export default function Divisions() {
    return (
        <section className="py-24 bg-forest-950 relative overflow-hidden">
            <div className="absolute inset-0 grass-bg opacity-50" />
            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-3 font-body">Programs</p>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Our Divisions</h2>
                    <p className="text-forest-400 mt-4 max-w-md mx-auto">From first-timers to tournament players — there's a place for every kid.</p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {divisions.map((div, i) => (
                        <motion.div
                            key={div.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className={`relative rounded-2xl bg-gradient-to-br ${div.color} border ${div.border} p-6 cursor-pointer group overflow-hidden`}
                        >
                            {/* BG number watermark */}
                            <div className="absolute right-3 bottom-0 text-[80px] font-display font-bold text-white/[0.04] leading-none select-none pointer-events-none">
                                {i + 1}
                            </div>

                            <div className="relative z-10">
                                <div className={`text-3xl mb-1 font-display font-bold ${div.accent}`}>{div.name}</div>
                                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 text-xs mb-4 border border-white/10">
                                    Ages {div.ages}
                                </div>
                                <p className="text-forest-200/80 text-sm leading-relaxed">{div.desc}</p>

                                <div className={`mt-5 flex items-center gap-1.5 text-xs font-semibold ${div.accent} group-hover:gap-3 transition-all duration-200`}>
                                    Learn more <span>→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Join card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-400/10 to-gold-400/5 p-6 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:border-gold-400/60 transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-full bg-gold-400 flex items-center justify-center text-2xl shadow-lg shadow-gold-400/20 group-hover:scale-110 transition-transform duration-300">
                            ⚾
                        </div>
                        <div>
                            <div className="text-white font-bold font-display text-lg">Not sure?</div>
                            <div className="text-forest-400 text-sm mt-1">We'll help you find the right division</div>
                        </div>
                        <button className="px-5 py-2 bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-sm rounded-full transition-all duration-200 hover:scale-105 active:scale-95">
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}