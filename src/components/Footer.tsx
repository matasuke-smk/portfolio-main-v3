'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, ArrowUp } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white footer-top-spacing">
      <div className="container-section">
        {/* メインフッターコンテンツ */}
        <div className="py-20 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {/* ブランド情報 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h3 className="font-accent font-bold text-2xl lg:text-3xl mb-4">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                対話から生まれる、確かなカタチ。<br />
                AIと共に創る、次世代のWeb体験
              </p>
              <p className="font-accent text-sm text-gray-400 tracking-wider uppercase">
                Communication First, AI-Powered Development
              </p>
            </motion.div>

            {/* SNSリンク・お問い合わせ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6">Connect</h4>
              <div className="space-y-4">
                <motion.a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Twitter size={20} />
                  </motion.div>
                  <span className="group-hover:font-medium">Twitter / X</span>
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github size={20} />
                  </motion.div>
                  <span className="group-hover:font-medium">GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ボトムフッター */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 py-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* コピーライト */}
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 {SITE_CONFIG.name}. All rights reserved.</p>
            </div>

            {/* ナビゲーション */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                プライバシーポリシー
              </a>
              <div className="w-px h-4 bg-gray-600" />
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                利用規約
              </a>
            </div>

            {/* トップへ戻るボタン */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-all duration-300 group relative overflow-hidden"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ y: 0, scale: 0.95 }}
            >
              {/* 背景エフェクト */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: 'var(--color-accent)' }}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="text-sm font-accent tracking-wider uppercase relative z-10">Back to top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ArrowUp size={16} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;