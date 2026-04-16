import Hero from './Hero'
import News from './News'
import FacebookFeed from './FacebookFeed'
import RegistrationAlert from './RegistrationAlert'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div className="bg-forest-950 min-h-screen">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. 2026 Season Header & Registration Card */}
            <section className="py-24 border-t border-white/5 bg-forest-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

                <div className="max-w-6xl mx-auto px-4 text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gold-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-3 font-body">
                            High Prairie Minor Baseball
                        </p>
                        <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                            THE 2026 <span className="text-gold-400">SEASON</span>
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/50"></div>
                            <p className="text-forest-400 uppercase tracking-[0.2em] text-[10px] font-bold font-body">
                                Registration & Player Hub
                            </p>
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/50"></div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative z-10">
                    <RegistrationAlert />
                </div>
            </section>

            {/* 3. Latest News - Black hata ke Forest-900/50 kita aa */}
            <section className="bg-forest-900/20 relative overflow-hidden border-t border-white/5">
                {/* News component de andar already heading hai, so assi direct call kita */}
                <News />
            </section>

            {/* 4. Facebook Community Section - Consistent Forest BG */}
            <section className="py-24 bg-forest-950 border-t border-white/5 relative overflow-hidden">
                {/* Diamond Pattern Overlay for texture */}
                <div className="absolute inset-0 diamond-bg opacity-10 pointer-events-none" />
                <div className="relative z-10">
                    <FacebookFeed />
                </div>
            </section>
        </div>
    )
}