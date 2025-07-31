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
          <p className="text-lg max-w-2xl mx-auto section-description" style={{ color: 'var(--color-gray-dark)' }}>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap"
        >
          {WORKS.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg border-2 border-transparent transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 accent-bg-subtle group-hover:accent-glow" style={{ backgroundColor: 'var(--color-white)' }}>
                {/* プロジェクト画像 */}
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={`/images/work-${work.id}.svg`}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* グラデーションオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 191, 255, 0.95)' }}>
                    <motion.div 
                      className="text-center text-white"
                      initial={{ scale: 0.8, opacity: 0, y: 20 }}
                      whileHover={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white/30 flex items-center justify-center"
                      >
                        <ExternalLink size={28} />
                      </motion.div>
                      <p className="font-accent text-sm tracking-wider uppercase font-bold">
                        View Project
                      </p>
                      <p className="text-xs mt-2 opacity-80">
                        Click to explore
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* カテゴリータグ */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-accent tracking-wider uppercase rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 191, 255, 0.9)', color: 'white' }}>
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* プロジェクト情報 */}
                <div className="card-padding relative">
                  {/* タイトル */}
                  <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300" style={{ color: 'var(--color-black)' }}>
                    {work.title}
                  </h3>
                  
                  {/* 説明 */}
                  <p className="text-sm paragraph-spacing line-clamp-2 leading-relaxed image-text-gap" style={{ color: 'var(--color-gray-dark)' }}>
                    {work.description}
                  </p>
                  
                  {/* プロジェクト詳細 */}
                  <div className="space-y-3 paragraph-spacing">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium" style={{ color: 'var(--color-gray-medium)' }}>業種:</span>
                      <span className="font-medium" style={{ color: 'var(--color-gray-dark)' }}>{work.industry}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium" style={{ color: 'var(--color-gray-medium)' }}>制作期間:</span>
                      <span className="font-medium" style={{ color: 'var(--color-gray-dark)' }}>{work.period}</span>
                    </div>
                  </div>
                  
                  {/* 使用技術 */}
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full border transition-colors duration-300 hover:border-accent hover:text-accent"
                        style={{ backgroundColor: 'transparent', color: 'var(--color-gray-medium)', borderColor: 'var(--color-gray-light)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* 装飾的な要素 */}
                  <div className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'var(--color-accent)' }} />
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