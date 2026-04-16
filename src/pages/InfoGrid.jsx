import { motion } from 'framer-motion'
import { ShieldCheck, BookOpen, DollarSign, AlertCircle, ClipboardList, Zap, Users, GraduationCap } from 'lucide-react'

// Parents layi siraf zaroori registration links
const parentLinks = [
    { icon: ClipboardList, label: 'RAMP Portal', desc: 'Official Registration Link', link: 'https://www.rampregistrations.com/login?v3=d1c7bce4' },
    { icon: DollarSign, label: 'KidSport Alberta', desc: 'Apply for registration grants', link: 'https://kidsportcanada.ca/alberta/' },
    { icon: BookOpen, label: 'Gear Guide', desc: 'Required equipment list', link: '#' },
    { icon: ShieldCheck, label: 'Fair Play Policy', desc: 'Code of conduct for 2026', link: '#' },
]

// Coaches layi zaroori forms
const coachLinks = [
    { icon: GraduationCap, label: 'NCCP Training', desc: 'Required coach certification', link: '#' },
    { icon: ClipboardList, label: 'Criminal Record Check', desc: 'Mandatory for all volunteers', link: '#' },
    { icon: AlertCircle, label: 'Safe Sport', desc: 'Bullying prevention training', link: '#' },
    { icon: Zap, label: 'Practice Drills', desc: 'Coach resource library', link: '#' },
]

function LinkCard({ icon: Icon, label, desc, link, delay }) {
    return (
        <motion.a
            href={link || '#'}
            target={link !== '#' ? '_blank' : undefined}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="card-glass rounded-xl p-5 cursor-pointer group flex items-start gap-4 border border-white/5 no-underline"
        >
            <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:bg-gold-400 group-hover:text-forest-950 transition-all duration-300">
                <Icon size={20} />
            </div>
            <div>
                <div className="text-white text-sm font-bold group-hover:text-gold-300 transition-colors duration-200">{label}</div>
                <div className="text-forest-400 text-xs mt-1 leading-snug font-body">{desc}</div>
            </div>
        </motion.a>
    )
}

export default function InfoGrid() {
    return (
        <section className="py-24 bg-forest-950 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 diamond-bg opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Parents Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <div className="inline-block px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 mb-4">
                                <p className="text-gold-400 text-[10px] font-black uppercase tracking-[0.2em]">Registration 2026</p>
                            </div>
                            <h2 className="font-display text-4xl font-black text-white italic uppercase tracking-tighter leading-none">Parent <span className="text-gold-400">Toolkit</span></h2>
                            <p className="text-forest-400 text-sm mt-3 font-body">Everything you need to complete your child's registration by April 20.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {parentLinks.map((item, i) => (
                                <LinkCard key={item.label} {...item} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>

                    {/* Coaches Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Volunteers</p>
                            </div>
                            <h2 className="font-display text-4xl font-black text-white italic uppercase tracking-tighter leading-none">Coaches <span className="text-white/40">Corner</span></h2>
                            <p className="text-forest-400 text-sm mt-3 font-body">Required certifications and forms for the 2026 coaching staff.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {coachLinks.map((item, i) => (
                                <LinkCard key={item.label} {...item} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Assistance Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-forest-900 to-forest-800 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-gold-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-gold-400/20">💰</div>
                        <div>
                            <h3 className="text-white font-bold text-lg leading-tight uppercase italic font-display">Financial Support Available</h3>
                            <p className="text-forest-400 text-sm font-body mt-1">We believe every kid in High Prairie should play. Grants like Jumpstart & KidSport cover registration fees.</p>
                        </div>
                    </div>
                    <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all border border-white/10">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    )
}