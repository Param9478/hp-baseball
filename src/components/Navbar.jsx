import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom' // Link te useLocation add kite
import { Menu, X } from 'lucide-react'

// Routes de hisab naal links
const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'Divisions', path: '/divisions' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation() // Pata karan layi assi kehre page te aan

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-forest-950/90 backdrop-blur-xl border-b border-white/10 py-2' : 'py-4'
            }`}>
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                {/* Logo - Click karan te Home te lavega */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-forest-950 font-bold text-lg font-display shadow-lg">
                        ⚾
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white leading-tight font-display">HP Baseball</div>
                        <div className="text-[10px] text-forest-300 leading-tight tracking-widest uppercase">Est. High Prairie</div>
                    </div>
                </Link>

                {/* Desktop links - Hun eh proper Link use karan ge */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-3 py-1.5 rounded-full text-sm font-body transition-all duration-200 ${location.pathname === link.path
                                ? 'bg-gold-400 text-forest-950 font-bold'
                                : 'text-forest-200 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.rampregistrations.com/login?v3=d1c7bce4"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:block px-4 py-2 bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-sm rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg no-underline cursor-pointer"
                    >
                        Register 2026
                    </a>
                    <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-forest-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 flex flex-col gap-2">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setOpen(false)} // Click karan te menu band ho jaye
                            className={`text-left py-2 px-3 rounded-lg text-sm ${location.pathname === link.path
                                ? 'bg-gold-400/20 text-gold-400 font-bold'
                                : 'text-forest-100 hover:bg-white/10'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://www.rampregistrations.com/login?v3=d1c7bce4"
                        target="_blank"
                        rel="noreferrer"
                        className="no-underline"
                    >
                        <button className="mt-2 w-full py-2.5 bg-gold-400 hover:bg-gold-300 text-forest-950 font-black uppercase tracking-wider rounded-full text-sm transition-all active:scale-95 shadow-lg shadow-gold-400/10">
                            Register 2026
                        </button>
                    </a>
                </div>
            )}
        </nav>
    )
}