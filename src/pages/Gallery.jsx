import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { url: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80', title: 'Opening Day' },
    { url: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80', title: 'Bantam Finals' },
    { url: 'https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&q=80', title: 'T-Ball Fun' },
];

export default function Gallery() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        // BG Color hun Forest-950 te Diamond Pattern laya aa
        <div className="bg-forest-950 diamond-bg pt-32 pb-20 px-4 min-h-screen relative overflow-hidden">
            {/* Subtle Glow in background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-500/5 blur-[120px] pointer-events-none" />

            <AnimatePresence>
                {loading ? (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-950"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="text-6xl mb-6 filter drop-shadow-[0_0_15px_rgba(245,200,66,0.3)]"
                        >
                            ⚾
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 200 }}
                            className="h-1 bg-gold-400/20 rounded-full overflow-hidden relative"
                        >
                            <motion.div
                                animate={{ x: [-200, 200] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="absolute inset-0 w-full h-full bg-gold-400"
                            />
                        </motion.div>
                        <p className="text-gold-400 mt-6 font-display font-black tracking-[0.3em] uppercase text-xs animate-pulse">
                            Preparing the Diamond
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-7xl mx-auto relative z-10"
                    >
                        <div className="text-center mb-20">
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-gold-400 text-xs font-black uppercase tracking-[0.4em] mb-4"
                            >
                                Moments from High Prairie
                            </motion.p>
                            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                            Photo <span className="text-gold-400">Gallery</span>
                        </h2>
                            <div className="w-16 h-1 bg-gold-400 mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative h-96 overflow-hidden rounded-2xl border border-white/5 bg-forest-900 shadow-xl"
                                >
                                    <img
                                        src={img.url}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                        alt={img.title}
                                    />
                                    {/* Overlay hun tuhade card-glass vibe naal match karda aa */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end">
                                        <p className="text-gold-400 font-display font-black tracking-tighter text-2xl italic uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            {img.title}
                                        </p>
                                        <div className="w-8 h-0.5 bg-white mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform delay-100"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}