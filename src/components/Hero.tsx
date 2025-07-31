'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO } from '@/lib/constants';

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.querySelector('#works');
    if (worksSection) {
      worksSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #f0f2f5 100%)'
      }}
    >
      {/* 幾何学的背景パターン */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-2" style={{ borderColor: 'var(--color-accent)' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border-2" style={{ borderColor: 'var(--color-gray-dark)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full border-2" style={{ borderColor: 'var(--color-accent)' }} />
      </div>
      
      {/* ドットパターン */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, var(--color-accent) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* ミニマルな装飾線 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-px h-32 opacity-10" style={{ backgroundColor: 'var(--color-accent)' }} />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-px opacity-10" style={{ backgroundColor: 'var(--color-accent)' }} />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: 'var(--color-accent)' }} />
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: 'var(--color-accent)' }} />
      </div>

      <div className="relative z-10 container-section text-center">
        <div className="space-y-12 lg:space-y-16 py-8">
          {/* メインタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-accent font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight relative" style={{ color: 'var(--color-black)' }}>
              {HERO.title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: 'var(--color-accent)',
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block cursor-default"
                  style={{ transformOrigin: 'center bottom' }}
                >
                  {char}
                </motion.span>
              ))}
              
              {/* グロー効果 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 1.5 }}
                style={{
                  background: `linear-gradient(45deg, transparent 30%, var(--color-accent) 50%, transparent 70%)`,
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
            </h1>
          </motion.div>

          {/* サブタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-6 lg:space-y-8 max-w-4xl mx-auto"
          >
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl font-medium" 
              style={{ color: 'var(--color-gray-darker)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {HERO.subtitle}
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl" 
              style={{ color: 'var(--color-gray-dark)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {HERO.description}
            </motion.p>
            <motion.p 
              className="font-accent text-sm sm:text-base lg:text-lg tracking-wider uppercase relative" 
              style={{ color: 'var(--color-accent)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {HERO.subDescription}
              
              {/* アンダーライン効果 */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px"
                style={{ backgroundColor: 'var(--color-accent)' }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 2.2 }}
              />
            </motion.p>
          </motion.div>

          {/* CTA エリア */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-16 lg:pt-20 pb-8 lg:pb-12"
          >
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                scrollToWorks();
              }}
              className="inline-flex items-center px-12 py-5 font-accent font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.8) 100%)',
                color: 'white'
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* 背景グロー効果 */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 1) 100%)',
                  filter: 'blur(4px)'
                }}
              />
              
              {/* シマー効果 */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '200% 200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                View Works
                <motion.span
                  className="text-lg"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
              className="inline-flex items-center px-12 py-5 font-accent font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 relative overflow-hidden group border-2 hover:border-accent hover:text-white shadow-lg hover:shadow-2xl"
              style={{ 
                backgroundColor: 'transparent',
                borderColor: 'var(--color-gray-darker)',
                color: 'var(--color-gray-darker)'
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -2,
                backgroundColor: 'var(--color-accent)',
                borderColor: 'var(--color-accent)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* ホバー背景エフェクト */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.9) 100%)'
                }}
              />
              
              {/* パルス効果 */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20"
                style={{ backgroundColor: 'var(--color-accent)' }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                Contact
                <motion.span
                  className="text-lg"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✉
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* スクロール促進アニメーション */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        onClick={scrollToWorks}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center space-y-3 transition-all duration-300 group-hover:opacity-80"
        >
          <span className="font-accent text-xs tracking-wider uppercase" style={{ color: 'var(--color-gray-medium)' }}>
            Scroll
          </span>
          
          {/* 矢印のセット */}
          <div className="flex flex-col items-center space-y-1">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown size={16} style={{ color: 'var(--color-accent)' }} />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.3,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown size={20} style={{ color: 'var(--color-accent)' }} />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.6,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown size={16} style={{ color: 'var(--color-accent)' }} />
            </motion.div>
          </div>
          
          {/* 縦線 */}
          <motion.div
            className="w-px h-8"
            style={{ backgroundColor: 'var(--color-accent)' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '2rem', opacity: 0.3 }}
            transition={{ duration: 1, delay: 3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;