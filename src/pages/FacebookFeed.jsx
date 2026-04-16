import { motion } from 'framer-motion'
import { Users, ExternalLink } from 'lucide-react'

export default function FacebookFeed() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] bg-forest-950 border border-gold-600/20 p-8 md:p-12 shadow-2xl"
            >
                {/* Background hun Forest-950 te border Gold-600/20 aa */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gold-500/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-forest-500/5 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">

                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-20 h-20 bg-forest-900 border border-gold-500/30 rounded-3xl flex items-center justify-center shadow-xl shadow-black/50 mb-8"
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-gold-400"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">
                        Join Our <span className="text-gold-400 underline decoration-gold-400/30 underline-offset-8">Community</span>
                    </h2>

                    <p className="text-forest-200 text-lg md:text-xl max-w-2xl mb-10 font-body leading-relaxed">
                        Schedules, rain-outs, and game-day photos are shared daily by our coaches and parents in our private Facebook group.
                    </p>

                    <div className="flex flex-col items-center gap-8 w-full">
                        <motion.a
                            href="https://www.facebook.com/groups/162547079983081/"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 px-10 py-5 bg-gold-400 hover:bg-gold-300 text-forest-950 font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all shadow-xl shadow-gold-500/20 no-underline"
                        >
                            Visit Facebook Group
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <div className="flex items-center gap-4 py-3 px-6 rounded-full bg-forest-900/50 border border-white/5 backdrop-blur-sm">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-forest-900 bg-forest-800 flex items-center justify-center">
                                    <Users size={14} className="text-gold-400" />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-forest-900 bg-forest-800 flex items-center justify-center">
                                    <Users size={14} className="text-gold-400" />
                                </div>
                            </div>
                            <span className="text-forest-300 text-[10px] font-black uppercase tracking-widest font-body">
                                <span className="text-white">1,000+</span> Active Members
                            </span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-10">
                    <p className="text-[10px] text-white font-black uppercase tracking-[0.5em] whitespace-nowrap">
                        High Prairie Minor Baseball Association
                    </p>
                </div>
            </motion.div>
        </div>
    )
}