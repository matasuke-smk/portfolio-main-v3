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
                  className="font-accent font-semibold tracking-wider transition-all duration-300 relative group hover:text-white rounded-full"
                  style={{ 
                    fontSize: '1rem',
                    padding: '0.5rem 1rem',
                    color: 'var(--color-gray-darker)',
                    border: '2px solid transparent'
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'var(--color-accent)',
                    borderColor: 'var(--color-accent)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  
                  {/* グロー効果 */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ 
                      backgroundColor: 'var(--color-accent)',
                      filter: 'blur(8px)',
                      zIndex: -1
                    }}
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

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* バックドロップ */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* メニューパネル - サイドスライド */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* メニューヘッダー */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                <h2 className="font-accent font-bold text-xl text-gray-900">Menu</h2>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="メニューを閉じる"
                >
                  <X size={20} className="text-gray-600" />
                </motion.button>
              </div>
              
              {/* ナビゲーションリスト */}
              <nav className="px-4 py-6">
                <div className="space-y-1">
                  {NAVIGATION.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="group block px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gray-50 relative overflow-hidden"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* ホバー時の左側アクセントライン */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      <div className="flex items-center justify-between">
                        <span className="font-accent font-semibold text-lg text-gray-700 group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </span>
                        <motion.div
                          className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-accent flex items-center justify-center transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-gray-400 group-hover:bg-white rounded-full transition-colors duration-300"
                            animate={{ 
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </nav>
              
              {/* メニューフッター */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-gray-100 bg-gray-50">
                <div className="text-center">
                  <p className="text-sm text-gray-500 font-medium">MATASUKE</p>
                  <p className="text-xs text-gray-400 mt-1">Portfolio Website</p>
                </div>
                
                {/* 装飾的な要素 */}
                <div className="mt-4 flex justify-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-accent rounded-full opacity-30"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;