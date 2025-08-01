'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SKILLS, STRENGTHS } from '@/lib/constants';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="section-spacing"
      style={{ backgroundColor: 'var(--color-gray-light)' }}
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
          <h2 className="font-accent font-bold text-4xl lg:text-5xl heading-spacing-medium" style={{ color: 'var(--color-black)' }}>
            ABOUT
          </h2>
          <p className="text-lg max-w-2xl mx-auto section-description" style={{ color: 'var(--color-gray-dark)' }}>
            AIツールを活用した効率的な開発と、<br />
            丁寧なコミュニケーションでお客様をサポートします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* 自己紹介 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-bold text-2xl text-gray-900 heading-spacing-medium">
              Profile
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                はじめまして、またすけです。Web制作・フロントエンド開発を専門とするフリーランスエンジニアとして活動しています。
              </p>
              <p>
                「対話から生まれる、確かなカタチ」をモットーに、お客様との丁寧なコミュニケーションを通じて、ビジネス目標に寄り添ったWebサイトを制作します。
              </p>
              <p>
                AIツールを積極的に活用し、従来よりも効率的で高品質な開発を実現。納期厳守はもちろん、継続的なサポートを通じてお客様の成功をお手伝いします。
              </p>
              <p>
                初案件獲得を目指すフリーランスとして、柔軟性とスピード感を持ってプロジェクトに取り組んでいます。お気軽にお声がけください。
              </p>
            </div>
          </motion.div>

          {/* スキルセット */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-bold text-2xl text-gray-900 heading-spacing-medium">
              Skills
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1, duration: 0.6 }}
              className="grid grid-cols-1 gap-4"
            >
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center p-4 rounded-xl transition-all duration-300 hover:shadow-lg group"
                  style={{ 
                    backgroundColor: 'rgba(0, 191, 255, 0.03)',
                    border: '1px solid rgba(0, 191, 255, 0.1)',
                    gap: '1.5rem'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: 'rgba(0, 191, 255, 0.08)'
                  }}
                >
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={20} className="text-white" />
                  </motion.div>
                  <span className="text-gray-800 font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                    {skill}
                  </span>
                  
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* 強み・特徴 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: '5rem' }}
        >
          <h3 className="font-bold text-2xl text-gray-900 text-center content-spacing">
            Strengths
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {STRENGTHS.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30 relative overflow-hidden">
                  {/* 背景装飾 */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* アイコン */}
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.8) 100%)'
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-white rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: -5 }}
                    >
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                    </motion.div>
                    
                    {/* グロー効果 */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: 'var(--color-accent)',
                        filter: 'blur(8px)',
                        zIndex: -1
                      }}
                    />
                  </motion.div>
                  
                  {/* タイトル */}
                  <h4 className="font-bold text-xl text-gray-900 mb-4 text-center group-hover:text-accent transition-colors duration-300">
                    {strength.title}
                  </h4>
                  
                  {/* 説明文 */}
                  <p className="text-base text-gray-600 leading-relaxed text-center">
                    {strength.description}
                  </p>
                  
                  {/* 底部の装飾線 */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '60%' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;