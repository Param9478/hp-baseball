import { motion } from 'framer-motion'
import { ChevronDown, Users, Trophy, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom' // Ensure killi import kitta hove


const stats = [
    { icon: Users, label: 'Players', value: '150+' },
    { icon: Trophy, label: 'Seasons', value: '20+' },
    { icon: Calendar, label: 'Games / yr', value: '60+' },
]

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grass-bg diamond-bg">
            {/* Deep layered bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-950 via-transparent to-forest-800/30" />

            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gold-400/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Big diamond decoration */}
            <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rotate-45 rounded-xl hidden lg:block" />
            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-60 h-60 border border-gold-400/10 rotate-45 rounded-xl hidden lg:block" />
            <div className="absolute left-[-80px] top-1/3 w-64 h-64 border border-white/5 rotate-45 rounded-xl hidden lg:block" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/80 border border-forest-600/50 text-forest-200 text-xs tracking-widest uppercase mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    High Prairie, Alberta · Est. 2000s
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4"
                >
                    <span className="text-white">High Prairie</span>
                    <br />
                    <span className="gold-shimmer">&amp; District</span>
                    <br />
                    <span className="text-white">Minor Baseball</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="text-forest-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    Building champions on and off the diamond. Join Alberta's premier community
                    youth baseball program — where every kid belongs.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >

                    {/* Buttons Container */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {/* External Link: RAMP Registration Portal */}
                        <a
                            href="https://www.rampregistrations.com/login?v3=d1c7bce4"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3.5 bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-base rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-gold-400/20 no-underline inline-block"
                        >
                            Register for 2026 Season
                        </a>

                        {/* Internal Link: Schedule Page */}
                        <Link
                            to="/schedule"
                            className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-full border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm no-underline inline-block"
                        >
                            View Schedule →
                        </Link>
                    </div>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="flex justify-center gap-8 sm:gap-16"
                >
                    {stats.map(({ icon: Icon, label, value }) => (
                        <div key={label} className="text-center">
                            <div className="text-2xl font-bold text-gold-400 font-display">{value}</div>
                            <div className="text-xs text-forest-400 uppercase tracking-wider mt-1">{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-forest-500 flex flex-col items-center gap-1"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={16} className="animate-bounce" />
            </motion.div>
        </section>
    )
}