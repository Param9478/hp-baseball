import { motion } from 'framer-motion'
import { Mail, MapPin, ExternalLink } from 'lucide-react'

export default function ContactSection() {
    return (
        <section id="contact-section" className="py-24 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
            <div className="absolute inset-0 diamond-bg opacity-30" />
            <div className="absolute right-[-60px] bottom-[-40px] text-[280px] font-display text-white/[0.025] select-none pointer-events-none leading-none">
                ⚾
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
<h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                            Contact <span className="text-gold-400">Us</span>
                        </h2>

                    <p className="text-forest-400 mt-4 max-w-md mx-auto italic font-body text-sm">Questions about registration or volunteering? We'd love to hear from you.</p>
                </motion.div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {[
                        { icon: MapPin, label: 'Address', value: 'PO Box 32\nHigh Prairie, AB T0G 1E0' },
                        { icon: Mail, label: 'Email', value: 'hpbaseball@gmail.com', link: 'mailto:hpbaseball@gmail.com' },
                        { icon: ExternalLink, label: 'Facebook', value: 'HP Minor Baseball', link: 'https://www.facebook.com/groups/162547079983081/' },
                    ].map(({ icon: Icon, label, value, link }, i) => (
                        <motion.a
                            key={label}
                            href={link || '#'}
                            target={link?.startsWith('http') ? '_blank' : undefined}
                            rel="noreferrer"
                            whileHover={{ y: -4 }}
                            className="card-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3 group no-underline"
                        >
                            <div className="w-12 h-12 rounded-full bg-forest-700/60 flex items-center justify-center text-gold-400 group-hover:bg-forest-600/80 group-hover:scale-110 transition-all duration-200">
                                <Icon size={20} />
                            </div>
                            <div>
                                <div className="text-forest-400 text-[10px] uppercase tracking-widest mb-1 font-bold">{label}</div>
                                <div className="text-white text-sm font-medium whitespace-pre-line group-hover:text-gold-300 transition-colors duration-200">{value}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Form */}
                <motion.div className="card-glass rounded-2xl p-6 sm:p-8">
                    <h3 className="font-display text-xl font-bold text-white mb-6 uppercase">Send a Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="Your name" className="w-full bg-forest-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-forest-500 text-sm outline-none focus:border-gold-400/50" />
                        <input type="email" placeholder="Email address" className="w-full bg-forest-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-forest-500 text-sm outline-none focus:border-gold-400/50" />
                    </div>
                    <textarea rows={4} placeholder="Your message..." className="w-full bg-forest-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-forest-500 text-sm outline-none focus:border-gold-400/50 resize-none mb-4" />
                    <button className="w-full py-3 bg-gold-400 hover:bg-gold-300 text-forest-950 font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-gold-400/20">
                        Send Message
                    </button>
                </motion.div>
            </div>
        </section>
    )
}