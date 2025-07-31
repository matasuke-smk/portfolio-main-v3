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
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      {/* ミニマルな背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-px h-32 opacity-10" style={{ backgroundColor: 'var(--color-gray-medium)' }} />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-px opacity-10" style={{ backgroundColor: 'var(--color-gray-medium)' }} />
      </div>

      <div className="relative z-10 container-section text-center">
        <div className="space-y-12 lg:space-y-16 py-8">
          {/* メインタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-accent font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight" style={{ color: 'var(--color-black)' }}>
              {HERO.title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* サブタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-6 lg:space-y-8 max-w-4xl mx-auto"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium" style={{ color: 'var(--color-gray-darker)' }}>
              {HERO.subtitle}
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl" style={{ color: 'var(--color-gray-dark)' }}>
              {HERO.description}
            </p>
            <p className="font-accent text-sm sm:text-base lg:text-lg tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>
              {HERO.subDescription}
            </p>
          </motion.div>

          {/* CTA エリア */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 lg:pt-16"
          >
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                scrollToWorks();
              }}
              className="inline-flex items-center px-10 py-4 font-accent font-medium text-sm tracking-wider uppercase rounded-none transition-colors duration-300 hover:opacity-80"
              style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Works
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
              className="inline-flex items-center px-10 py-4 border font-accent font-medium text-sm tracking-wider uppercase rounded-none transition-colors duration-300 hover:opacity-80"
              style={{ borderColor: 'var(--color-black)', color: 'var(--color-black)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* スクロール促進アニメーション */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        onClick={scrollToWorks}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center space-y-2 transition-colors duration-300 hover:opacity-80"
          style={{ color: 'var(--color-gray-medium)' }}
        >
          <span className="font-accent text-xs tracking-wider uppercase">
            Scroll
          </span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;