import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "PhD Scholars Assisted", value: "500+" },
  { label: "Papers Published", value: "1,200+" },
  { label: "Universities Served", value: "50+" },
  { label: "Client Satisfaction", value: "99%" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-bgDark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;