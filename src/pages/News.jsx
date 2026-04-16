import { motion } from 'framer-motion'
import { Calendar, ChevronRight } from 'lucide-react'

const news = [
    {
        tag: 'Registration',
        tagColor: 'bg-gold-400/10 text-gold-400 border-gold-400/20',
        title: '2026 Season Registration Now Open!',
        excerpt: 'Sign up your kids for another exciting season of baseball in High Prairie. Early bird pricing ends May 1st.',
        date: 'April 10, 2026',
        hot: true,
    },
    {
        tag: 'Tryouts',
        tagColor: 'bg-forest-400/10 text-forest-300 border-forest-400/20',
        title: 'Spring Tryout Dates Announced',
        excerpt: 'Peewee and Bantam tryouts will be held at Elks Field starting April 26. All registered players must attend.',
        date: 'March 28, 2026',
    },
    {
        tag: 'Volunteers',
        tagColor: 'bg-forest-400/10 text-forest-300 border-forest-400/20',
        title: 'Coaches Needed for U11 Division',
        excerpt: 'We are looking for enthusiastic volunteer coaches for our Mosquito division. No experience necessary — training provided.',
        date: 'March 15, 2026',
    },
    {
        tag: 'Tournament',
        tagColor: 'bg-gold-400/10 text-gold-400 border-gold-400/20',
        title: 'HP Bantam Places 2nd at Peace River Invitational',
        excerpt: 'Our Bantam team had an outstanding showing at the regional tournament, finishing runners-up in a thrilling final.',
        date: 'September 8, 2025',
    },
]

export default function News() {
    return (
        <section className="pt-32 pb-24 bg-forest-950 relative overflow-hidden">
            <div className="absolute inset-0 diamond-bg opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4"
                >
                    <div>
                        <p className="text-gold-400 text-[10px] font-black uppercase tracking-[0.4em] mb-3 font-body">
                            Latest Updates
                        </p>
                        {/* Heading: Size 5xl, No Italic, High Contrast */}
                        <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                            News & <span className="text-gold-400">Announcements</span>
                        </h2>
                    </div>
                    <button className="self-start sm:self-auto flex items-center gap-2 text-gold-400/60 hover:text-gold-400 text-xs font-black uppercase tracking-widest transition-all duration-200 group border-b border-gold-400/10 pb-1">
                        View all news
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {news.map((item, i) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-forest-900/30 backdrop-blur-md rounded-[2rem] p-8 cursor-pointer group relative border border-white/5 hover:border-gold-400/20 transition-all duration-300 shadow-xl"
                        >
                            {item.hot && (
                                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-gold-400 text-forest-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg shadow-gold-400/20">
                                    <span className="w-1.5 h-1.5 bg-forest-950 rounded-full animate-pulse" />
                                    New
                                </div>
                            )}

                            <div className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${item.tagColor} mb-6`}>
                                {item.tag}
                            </div>

                            <h3 className="font-display font-black text-xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-200 leading-tight pr-10">
                                {item.title}
                            </h3>

                            <p className="text-forest-200/70 text-sm leading-relaxed mb-6 font-body">
                                {item.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-forest-400 text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-4">
                                <Calendar size={12} className="text-gold-400" />
                                {item.date}
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}