import { motion } from 'motion/react';
import { Award, CheckSquare, Users, History } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      id: 'stat-founded',
      number: '2023',
      label: 'Year Founded',
      description: 'Bringing digital ideas to life with high quality',
      icon: History,
      color: 'text-gold',
      bgColor: 'bg-gold/10',
    },
    {
      id: 'stat-websites',
      number: '200+',
      label: 'Websites Built',
      description: 'Stunning layouts, high performance, clean code',
      icon: CheckSquare,
      color: 'text-gold-light',
      bgColor: 'bg-gold-light/10',
    },
    {
      id: 'stat-clients',
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied founders, local businesses, and corporate teams',
      icon: Users,
      color: 'text-gold',
      bgColor: 'bg-gold/10',
    },
    {
      id: 'stat-rate',
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Unmatched post-launch support and consultation',
      icon: Award,
      color: 'text-gold-light',
      bgColor: 'bg-gold-light/10',
    },
  ];

  return (
    <section id="stats-section" className="py-12 border-y border-warm-border bg-dark-cocoa font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm hover:border-gold/30 transition-all flex gap-4 items-start"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bgColor} ${stat.color}`}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-medium font-display text-zinc-800 tracking-tight">{stat.number}</h3>
                  <p className="text-sm font-semibold text-zinc-700 mt-1">{stat.label}</p>
                  <p className="text-xs text-zinc-500 mt-1 leading-normal font-normal">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
