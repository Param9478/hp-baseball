import { ExternalLink } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-forest-950 border-t border-white/5 py-12 px-4 relative overflow-hidden">
            {/* Background Texture for depth */}
            <div className="absolute inset-0 diamond-bg opacity-5 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Brand Info */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-300 flex items-center justify-center text-forest-950 text-lg shadow-lg shadow-gold-500/10 transform -rotate-3">
                            ⚾
                        </div>
                        <div>
                            <div className="text-white text-sm font-black font-display leading-tight uppercase tracking-tight">
                                High Prairie & District <br className="sm:hidden" /> Minor Baseball
                            </div>
                            <div className="text-forest-500 text-[10px] uppercase tracking-[0.3em] font-bold mt-1">
                                High Prairie, Alberta
                            </div>
                        </div>
                    </div>

                    {/* Rights & Credits */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-forest-400 text-[10px] uppercase font-black tracking-[0.2em]">
                            © 2026 HP Minor Baseball · All rights reserved
                        </div>

                        {/* --- PRAIRIE TECH SERVICES LINE --- */}
                        <div className="text-forest-600 text-[9px] uppercase tracking-[0.15em] font-bold">
                            Designed & Developed by{' '}
                            <a
                                href="https://prairietechs.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-forest-400 hover:text-gold-400 transition-colors duration-300 no-underline border-b border-forest-800 hover:border-gold-400/50 pb-0.5"
                            >
                                Prairie Tech Services
                            </a>
                        </div>
                    </div>

                    {/* Social Link */}
                    <a
                        href="https://www.facebook.com/groups/162547079983081/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-forest-400 hover:text-gold-400 text-[10px] font-black uppercase tracking-[0.2em] transition-all group"
                    >
                        <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        Facebook Group
                    </a>
                </div>
            </div>
        </footer>
    )
}