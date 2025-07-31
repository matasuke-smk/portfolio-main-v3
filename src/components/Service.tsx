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
          <h2 className="font-accent font-bold text-4xl lg:text-5xl mb-4" style={{ color: 'var(--color-black)' }}>
            SERVICE & PRICE
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-center" style={{ color: 'var(--color-gray-dark)' }}>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white border border-gray-200 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-8">
                  {/* サービス名と価格 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl lg:text-3xl font-bold text-accent">
                        {service.price}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({service.period})
                      </span>
                    </div>
                  </div>

                  {/* 特徴リスト */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check
                          size={16}
                          className="text-accent mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-600 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA ボタン */}
                  <motion.button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-accent font-medium text-sm tracking-wider uppercase transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>相談する</span>
                    <ArrowRight size={16} />
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
          className="mt-16 lg:mt-24"
        >
          <div className="bg-gray-50 p-8 lg:p-12 rounded-lg">
            <h3 className="font-bold text-xl text-gray-900 mb-4 text-center">
              その他のご相談も承ります
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="text-center">
                <h4 className="font-medium text-gray-900 mb-2">保守・運用</h4>
                <p>サイト公開後の継続的なメンテナンスやアップデート作業</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-900 mb-2">SEO対策</h4>
                <p>検索エンジン最適化による集客力向上のサポート</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-900 mb-2">コンサルティング</h4>
                <p>Web戦略の立案やUI/UX改善のアドバイス</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                ※ 上記価格はすべて税抜表示です<br />
                ※ プロジェクトの規模や要件により価格は変動いたします<br />
                ※ 詳細なお見積もりは無料でご提供いたします
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;