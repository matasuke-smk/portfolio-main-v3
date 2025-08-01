'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const Service = () => {
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

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="service"
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
          <h2 className="font-accent font-bold text-4xl lg:text-5xl heading-spacing-medium" style={{ color: 'var(--color-black)' }}>
            SERVICE & PRICE
          </h2>
          <p className="text-lg max-w-2xl mx-auto section-description" style={{ color: 'var(--color-gray-dark)' }}>
            お客様のニーズに合わせた柔軟なサービスをご提供いたします。<br />
            詳細な要件はお気軽にお問い合わせください。
          </p>
        </motion.div>

        {/* サービス一覧 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 card-gap"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full relative overflow-hidden">
                {/* 背景装飾 */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-3 group-hover:opacity-8 transition-opacity duration-500"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="card-padding relative z-10" style={{ padding: '2.5rem' }}>
                  {/* サービス名と価格 */}
                  <div className="mb-8">
                    <motion.h3 
                      className="font-bold text-2xl lg:text-3xl text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {service.title}
                    </motion.h3>
                    <div className="flex items-baseline space-x-3 mb-2">
                      <motion.span 
                        className="text-3xl lg:text-4xl font-black"
                        style={{ color: 'var(--color-gray-darker)' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.price}
                      </motion.span>
                      <span className="text-gray-500 text-base">
                        ({service.period})
                      </span>
                    </div>
                  </div>

                  {/* 特徴リスト */}
                  <div className="space-y-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start p-2 rounded-xl hover:bg-accent/5 transition-colors duration-300 group/item"
                        style={{ gap: '1rem' }}
                        whileHover={{ x: 4 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Check size={12} className="text-white" />
                        </motion.div>
                        <span className="text-gray-700 text-base leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA ボタン */}
                  <motion.button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center space-x-3 py-4 px-8 rounded-xl font-accent font-bold text-base tracking-wider uppercase transition-all duration-300 relative overflow-hidden group/btn"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.8) 100%)',
                      color: 'white'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* ボタン背景エフェクト */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.9) 0%, var(--color-accent) 100%)'
                      }}
                    />
                    
                    <span className="relative z-10">相談する</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 注記・追加情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginTop: '2.5rem' }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 relative overflow-hidden" style={{ padding: '4rem 3rem' }}>
            {/* 背景装飾 */}
            <motion.div
              className="absolute top-0 left-0 w-40 h-40 opacity-5"
              style={{ backgroundColor: 'var(--color-accent)' }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.h3 
              className="font-bold text-2xl lg:text-3xl text-gray-900 text-center"
              style={{ marginBottom: '3rem' }}
              whileHover={{ scale: 1.02 }}
            >
              その他のご相談も承ります
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '3rem', marginBottom: '4rem' }}>
              {[
                { title: "保守・運用", desc: "サイト公開後の継続的なメンテナンスやアップデート作業" },
                { title: "SEO対策", desc: "検索エンジン最適化による集客力向上のサポート" },
                { title: "コンサルティング", desc: "Web戦略の立案やUI/UX改善のアドバイス" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  style={{ padding: '3rem 2rem' }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                    style={{ 
                      marginBottom: '2rem',
                      backgroundColor: 'rgba(0, 191, 255, 0.1)'
                    }}
                    whileHover={{ rotate: 360, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                  </motion.div>
                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-accent transition-colors duration-300" style={{ marginBottom: '1.5rem' }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="border-t-2 border-gray-300 text-center"
              style={{ paddingTop: '4rem' }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="inline-block bg-white rounded-2xl shadow-sm" style={{ padding: '3rem' }}>
                <p className="text-sm text-gray-600 leading-relaxed space-y-1">
                  <span className="block font-medium">※ 上記価格はすべて税抜表示です</span>
                  <span className="block font-medium">※ プロジェクトの規模や要件により価格は変動いたします</span>
                  <span className="block font-bold text-accent">※ 詳細なお見積もりは無料でご提供いたします</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;