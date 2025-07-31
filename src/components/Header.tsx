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
      <div className="container-section">
        <div className="flex items-center justify-between h-24 lg:h-32 px-4">
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
            <div className="flex items-center space-x-10">
              {NAVIGATION.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-accent font-semibold text-base lg:text-lg tracking-wider transition-all duration-300 relative group hover:text-white px-8 py-4 rounded-full"
                  style={{ 
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* メニューパネル */}
            <motion.div
              className="fixed top-20 right-4 w-72 bg-white rounded-2xl shadow-2xl z-50 lg:hidden border border-gray-100"
              initial={{ opacity: 0, x: '100%', scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: '100%', scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* メニューヘッダー */}
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-accent font-bold text-lg" style={{ color: 'var(--color-gray-darker)' }}>
                  Menu
                </h3>
              </div>
              
              <nav className="flex flex-col py-4">
                {NAVIGATION.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="font-accent font-semibold text-base tracking-wider text-gray-700 hover:text-white hover:bg-accent mx-4 my-1 px-6 py-4 rounded-xl transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* 背景グラデーション */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.8) 100%)'
                      }}
                    />
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* 装飾アイコン */}
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'white' }}
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    />
                  </motion.a>
                ))}
              </nav>
              
              {/* メニューフッター */}
              <div className="px-6 py-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">MATASUKE Portfolio</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;