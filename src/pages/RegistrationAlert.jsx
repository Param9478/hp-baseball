import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'
import regImage from '../assets/registerExtended.png'

export default function RegistrationAlert() {
    return (
        <section className="relative z-20 mb-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <div className="bg-gradient-to-r from-gold-600/40 via-gold-400/10 to-gold-600/40 rounded-3xl p-[1px] shadow-2xl shadow-black/50">
                    <div className="bg-forest-950 rounded-[1.4rem] overflow-hidden flex flex-col md:flex-row items-stretch border border-white/5">

                        {/* Left: Image Side */}
                        <div className="md:w-1/2 relative min-h-[350px] bg-forest-900 diamond-bg">
                            <img
                                src={regImage}
                                alt="Registration 2026"
                                className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-60 md:bg-gradient-to-r" />
                        </div>

                        {/* Right: Content Side */}
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-forest-950">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[60px] rounded-full pointer-events-none" />

                            <div className="flex items-center gap-2 text-gold-400 mb-6 font-body">
                                <Calendar size={18} className="animate-pulse" />
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Deadline: April 20, 2026</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase leading-[0.9] mb-6 tracking-tighter">
                                Registration <span className="text-gold-400 block mt-2">Now Open</span>
                            </h2>

                            <p className="text-forest-200 mb-10 font-body text-sm md:text-base leading-relaxed max-w-md">
                                Secure your spot for the 2026 season. Join High Prairie's premier baseball community.
                            </p>

                            {/* Buttons Section - Inline Fixed */}
                            <div className="flex flex-row items-center gap-3 md:gap-4 font-body flex-nowrap">
                                {/* Main Action */}
                                <a
                                    href="https://www.rampregistrations.com/login?v3=d1c7bce4"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 md:flex-none px-4 md:px-8 py-4 bg-gold-400 hover:bg-gold-300 text-forest-950 font-black uppercase tracking-widest text-[10px] md:text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 no-underline whitespace-nowrap"
                                >
                                    Register <ArrowRight size={14} className="hidden sm:block" />
                                </a>

                                {/* Secondary - Glass Effect */}
                                <a
                                    href="https://www.facebook.com/groups/162547079983081"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 md:flex-none px-4 md:px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2 no-underline backdrop-blur-sm whitespace-nowrap"
                                >
                                    Facebook <ExternalLink size={14} className="hidden sm:block" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}