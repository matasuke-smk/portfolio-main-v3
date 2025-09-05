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

  // スクロール時にメニューを閉じる
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    console.log('handleNavClick called with:', href);
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = (element as HTMLElement).offsetTop;
        const offsetPosition = elementPosition - 96; // 6rem (96px) ヘッダーの高さ分のオフセット
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  console.log('Header component rendered, isMobileMenuOpen:', isMobileMenuOpen);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: isScrolled || isMobileMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(10px)' : 'none',
        borderBottom: isScrolled || isMobileMenuOpen ? '1px solid var(--color-gray-light)' : 'none'
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
                  className="font-accent font-semibold tracking-wider transition-all duration-75 relative group"
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
                  
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-accent"
                    style={{ 
                      width: 0,
                      transform: 'translateX(-50%)'
                    }}
                    whileHover={{ 
                      width: '80%'
                    }}
                    transition={{ duration: 0.1, ease: "easeOut", delay: 0 }}
                  ></motion.div>
                </motion.a>
              ))}
            </div>
          </nav>

          {/* モバイルメニューボタン */}
          <motion.button
            className="lg:hidden p-2 transition-colors duration-300 hover:opacity-80"
            style={{ color: 'var(--color-gray-dark)' }}
            onClick={() => {
              console.log('Menu button clicked, current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
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
          <motion.div
            className="fixed top-24 left-0 right-0 bottom-0 z-[40] lg:hidden"
            style={{ 
              backgroundColor: '#f5f5f5'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
          <div style={{ 
            padding: '2rem 1.5rem',
            height: 'calc(100vh - 6rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1.5rem',
            backgroundColor: '#f5f5f5'
          }}>
            {/* HOME */}
            <div>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="block hover:opacity-70 transition-opacity duration-200"
                style={{ padding: '0.25rem 0' }}
              >
                <div style={{ 
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: '#000000',
                  textAlign: 'left'
                }}>
                  HOME
                </div>
              </a>
            </div>

            {/* メインメニュー */}
            {[
              { name: 'WORK', href: '#works', sub: '実績' },
              { name: 'ABOUT', href: '#about', sub: '自己紹介' },
              { name: 'SERVICE', href: '#service', sub: 'サービス内容' }
            ].map((item, index) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block hover:opacity-70 transition-opacity duration-200"
                  style={{ padding: '1rem 0' }}
                >
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    width: '100%'
                  }}>
                    <span style={{ 
                      fontSize: '1.75rem',
                      fontWeight: '600',
                      color: '#000000',
                      backgroundColor: '#f5f5f5',
                      paddingRight: '0.5rem',
                      zIndex: 2
                    }}>
                      {item.name}
                    </span>
                    <span style={{ 
                      fontSize: '1rem',
                      color: '#666666',
                      fontWeight: '500',
                      backgroundColor: '#f5f5f5',
                      paddingLeft: '0.5rem',
                      zIndex: 2
                    }}>
                      {item.sub}
                    </span>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      borderBottom: '1px dotted #999999',
                      transform: 'translateY(-50%)',
                      zIndex: 1
                    }}></div>
                  </div>
                </a>
              </div>
            ))}

            {/* お問い合わせボタン */}
            <div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="block bg-black text-white text-center font-medium hover:bg-gray-800 transition-colors duration-200"
                style={{
                  padding: '1rem 1.5rem',
                  fontSize: '1.25rem',
                  borderRadius: '0px'
                }}
              >
                お問い合わせ
              </a>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;