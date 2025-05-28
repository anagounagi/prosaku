import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#333]">
      {/* SEO Optimization */}
      <div className="sr-only">
        <h1>Sensory Innovation - 感覚を刺激する革新的な体験を創造</h1>
        <p>サイエンスとテクノロジーで感覚と環境のイノベーション</p>
      </div>

      {/* Metallic Background Effect */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.4 : 0 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        
        {/* Metallic Overlay */}
        <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-white/10 via-transparent to-white/5" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            {/* Metallic Text Effect */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-gray-200 to-white/80 [text-shadow:_0_4px_24px_rgba(255,255,255,0.1)]">
              Sensory Innovation
            </h2>
            
            <div className="relative h-0.5 w-24 mx-auto mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-white to-indigo-400 animate-shimmer" />
            </div>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-200 leading-relaxed font-light tracking-wide">
            感覚と環境にイノベーションをもたらす
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg transition-all duration-300 tracking-wide"
            >
              <a href="#contact">お問い合わせはこちら</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a 
            href="#intro" 
            aria-label="コンテンツまでスクロール" 
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;