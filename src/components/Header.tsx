'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--color-gray-light)' : 'none'
      }}
    >
      <div className="container-section" style={{ maxWidth: '1200px' }}>
        <div className="flex items-center justify-between px-4" style={{ height: '6rem' }}>
          {/* ロゴ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="font-accent font-bold text-xl lg:text-2xl transition-colors duration-300 hover:opacity-80"
              style={{ color: 'var(--color-black)' }}
            >
              {SITE_CONFIG.name}
            </a>
          </motion.div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center" style={{ gap: '1.5rem' }}>
              {NAVIGATION.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-accent font-semibold tracking-wider transition-all duration-300 relative group"
                  style={{ 
                    fontSize: '1rem',
                    padding: '0.5rem 1rem',
                    color: 'var(--color-gray-darker)'
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    color: 'var(--color-accent)'
                  }}
                >
                  {item.name}
                  
                  {/* シンプルなアンダーライン */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-accent"
                    style={{ 
                      width: 0,
                      transform: 'translateX(-50%)'
                    }}
                    whileHover={{ 
                      width: '80%'
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              ))}
            </div>
          </nav>

          {/* モバイルメニューボタン */}
          <motion.button
            className="lg:hidden p-2 transition-colors duration-300 hover:opacity-80"
            style={{ color: 'var(--color-gray-dark)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* モバイルメニュー - ヘッダー下ドロップダウン */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white z-40 lg:hidden shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="py-6 px-6">
              <ul className="space-y-0">
                {/* HOME - シンプル表示 */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0 * 0.05 }}
                >
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#home');
                    }}
                    className="block py-4 text-gray-900 hover:text-accent transition-colors duration-200"
                  >
                    <span className="font-accent font-medium text-lg">HOME</span>
                  </a>
                </motion.li>

                {/* その他のメニュー項目 - サブテキスト付き */}
                {[
                  { name: 'WORKS', href: '#works', sub: '実績' },
                  { name: 'ABOUT', href: '#about', sub: '事業概要' },
                  { name: 'SERVICE', href: '#service', sub: 'サービス内容' }
                ].map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index + 1) * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="block py-4 border-b border-gray-200 hover:text-accent transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-accent font-medium text-lg text-gray-900">
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {item.sub}
                        </span>
                      </div>
                    </a>
                  </motion.li>
                ))}

                {/* お問い合わせボタン */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 4 * 0.05 }}
                  className="mt-6"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    className="block py-4 px-6 bg-black text-white text-center font-accent font-medium text-lg rounded-none hover:bg-gray-800 transition-colors duration-200"
                  >
                    お問い合わせ
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;