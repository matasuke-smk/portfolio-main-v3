'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { WORKS } from '@/lib/constants';

const Works = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="works"
      className="section-spacing"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="container-section">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="font-accent font-bold text-4xl lg:text-5xl mb-4" style={{ color: 'var(--color-black)' }}>
            WORKS
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-gray-dark)' }}>
            これまでに制作した架空のプロジェクトです。<br />
            実際の案件対応力をお確かめください。
          </p>
        </motion.div>

        {/* プロジェクトグリッド */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
        >
          {WORKS.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-none border transition-all duration-500 hover:shadow-lg" style={{ backgroundColor: 'var(--color-white)', borderColor: 'var(--color-gray-light)' }}>
                {/* プロジェクト画像 */}
                <div className="relative h-64 overflow-hidden" style={{ backgroundColor: 'var(--color-gray-light)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 191, 255, 0.1)' }}>
                        <ExternalLink size={24} style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <p className="text-sm" style={{ color: 'var(--color-gray-medium)' }}>
                        プロジェクトイメージ
                      </p>
                    </div>
                  </div>
                  
                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 191, 255, 0.9)' }}>
                    <div className="text-center" style={{ color: 'var(--color-white)' }}>
                      <ExternalLink size={32} className="mx-auto mb-2" />
                      <p className="font-accent text-sm tracking-wider uppercase">
                        View Project
                      </p>
                    </div>
                  </div>
                </div>

                {/* プロジェクト情報 */}
                <div className="p-8">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-accent tracking-wider uppercase rounded-full" style={{ backgroundColor: 'var(--color-gray-light)', color: 'var(--color-gray-dark)' }}>
                      {work.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 group-hover:opacity-80 transition-all duration-300" style={{ color: 'var(--color-black)' }}>
                    {work.title}
                  </h3>
                  
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--color-gray-dark)' }}>
                    {work.description}
                  </p>
                  
                  <div className="space-y-2 text-xs" style={{ color: 'var(--color-gray-medium)' }}>
                    <p>
                      <span className="font-medium">業種:</span> {work.industry}
                    </p>
                    <p>
                      <span className="font-medium">制作期間:</span> {work.period}
                    </p>
                  </div>
                  
                  {/* 使用技術 */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded"
                        style={{ backgroundColor: 'var(--color-gray-light)', color: 'var(--color-gray-dark)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 注記 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20 lg:mt-32"
        >
          <p className="text-sm" style={{ color: 'var(--color-gray-medium)' }}>
            ※ こちらは架空のプロジェクトです。実際の制作実績については、お問い合わせください。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;