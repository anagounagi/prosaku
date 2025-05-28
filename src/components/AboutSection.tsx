import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, threshold: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light mb-6 tracking-wide">会社概要</h2>
            
            <p className="text-gray-600 mb-6">
              2001年の創業以来、私たちは感覚を刺激する体験の創造に取り組んできました。
              香りのデザインから美術品の取引まで、幅広い分野で専門性の高いサービスを提供しています。
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-[#c8a415]"><polyline points="20 6 9 17 4 12"/></svg>
                <span>創業1995年、設立2002年10月28日</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-[#c8a415]"><polyline points="20 6 9 17 4 12"/></svg>
                <span>代表取締役: 高橋美帆</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-[#c8a415]"><polyline points="20 6 9 17 4 12"/></svg>
                <span>資本金: 300万円</span>
              </li>
            </ul>
            
            <Button asChild variant="outline" className="rounded-none border-black hover:bg-black hover:text-white transition-colors">
              <a href="/about">詳細を見る</a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, threshold: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
                alt="Our office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 bottom-8 -left-8 border-2 border-[#c8a415] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;