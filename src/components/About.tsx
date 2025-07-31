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
          <h2 className="font-accent font-bold text-4xl lg:text-5xl mb-4" style={{ color: 'var(--color-black)' }}>
            ABOUT
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-gray-dark)' }}>
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
            <h3 className="font-bold text-2xl text-gray-900 mb-6">
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
            <h3 className="font-bold text-2xl text-gray-900 mb-6">
              Skills
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1, duration: 0.6 }}
              className="space-y-3"
            >
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{skill}</span>
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
          className="mt-20 lg:mt-32"
        >
          <h3 className="font-bold text-2xl text-gray-900 text-center mb-12">
            Strengths
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STRENGTHS.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {strength.description}
                  </p>
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