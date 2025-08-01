'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO } from '@/lib/constants';

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.querySelector('#works');
    if (worksSection) {
      const elementPosition = (worksSection as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - 96; // 6rem (96px) ヘッダーの高さ分のオフセット
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-padding-top hero-padding-bottom"
      style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #f0f2f5 100%)'
      }}
    >
      {/* 動く幾何学的背景パターン */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 大きな円 - ゆっくり回転 */}
        <motion.div 
          className="absolute w-96 h-96 border-2 rounded-full opacity-[0.12]"
          style={{ 
            borderColor: 'var(--color-accent)',
            top: '20%',
            left: '15%'
          }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* 中サイズの円 - 逆回転 */}
        <motion.div 
          className="absolute w-64 h-64 border-2 rounded-full opacity-[0.10]"
          style={{ 
            borderColor: 'var(--color-gray-dark)',
            top: '30%',
            right: '20%'
          }}
          animate={{ 
            rotate: [360, 0],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* 小さな円 - 浮遊 */}
        <motion.div 
          className="absolute w-48 h-48 border-2 rounded-full opacity-[0.08]"
          style={{ 
            borderColor: 'var(--color-accent)',
            bottom: '25%',
            left: '30%'
          }}
          animate={{ 
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
        />
        
        {/* 三角形 */}
        <motion.div 
          className="absolute w-0 h-0 opacity-[0.07]"
          style={{
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '70px solid var(--color-accent)',
            top: '60%',
            right: '40%'
          }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* 四角形 */}
        <motion.div 
          className="absolute w-16 h-16 border-2 opacity-[0.09]"
          style={{ 
            borderColor: 'var(--color-gray-dark)',
            top: '15%',
            right: '15%'
          }}
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            x: [0, 10, 0, -10, 0],
            y: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* 六角形 */}
        <motion.div 
          className="absolute w-12 h-12 opacity-[0.08]"
          style={{
            background: 'var(--color-accent)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            bottom: '40%',
            right: '25%'
          }}
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* 動く線 */}
        <motion.div 
          className="absolute h-px opacity-[0.12]"
          style={{ 
            backgroundColor: 'var(--color-accent)',
            top: '45%',
            left: '20%',
            width: '200px'
          }}
          animate={{ 
            scaleX: [1, 1.5, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            scaleX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* 縦線 */}
        <motion.div 
          className="absolute w-px opacity-[0.10]"
          style={{ 
            backgroundColor: 'var(--color-gray-dark)',
            top: '20%',
            left: '60%',
            height: '150px'
          }}
          animate={{ 
            scaleY: [1, 1.3, 1],
            x: [0, 5, -5, 0]
          }}
          transition={{ 
            scaleY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* 浮遊する点 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-[0.15]"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              top: `${20 + (i * 10)}%`,
              left: `${10 + (i * 11)}%`
            }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
      </div>
      
      {/* 動的ドットパターン */}
      <motion.div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px', '0px 0px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 container-section text-center">
        <div className="space-y-16 lg:space-y-20 py-8">
          {/* メインタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title font-accent font-black tracking-tight relative" style={{ color: 'var(--color-black)' }}>
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
            <motion.div 
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
            </motion.div>
          </motion.div>

          {/* CTA エリア */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pb-8 lg:pb-12 px-8 lg:px-12" style={{ paddingTop: '6rem' }}
          >
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                scrollToWorks();
              }}
              className="inline-flex items-center font-accent font-bold tracking-wider uppercase rounded-full transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-2xl"
              style={{ 
                padding: '0.75rem 2rem',
                fontSize: '1rem',
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
                  const elementPosition = (contactSection as HTMLElement).offsetTop;
                  const offsetPosition = elementPosition - 96; // 6rem (96px) ヘッダーの高さ分のオフセット
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center font-accent font-bold tracking-wider uppercase rounded-full transition-all duration-300 relative overflow-hidden group border-2 hover:border-accent hover:text-white shadow-lg hover:shadow-2xl"
              style={{ 
                padding: '0.75rem 2rem',
                fontSize: '1rem',
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
        className="absolute bottom-16 lg:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
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