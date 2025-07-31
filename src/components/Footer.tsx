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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* メインフッターコンテンツ */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
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
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  <Twitter size={20} />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
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
          className="border-t border-gray-800 py-8"
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
              className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;