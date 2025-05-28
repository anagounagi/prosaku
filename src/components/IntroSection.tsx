import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section id="intro" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-light mb-12 tracking-wide">私たちの<span className="text-[#c8a415]">ビジョン</span></h2>
          
          <p className="text-lg leading-relaxed mb-8">
          私たちは、感覚と環境の関係性に着目し、サイエンスとテクノロジーを通じてその構造を見直しています。
香りをはじめとする感覚の可視化や分析を手がかりに、ライフスタイルやビジネスの現場に、
環境負荷の少ない選択肢と、より豊かな体験価値を届けていきます。
さまざまなビジネス課題に向き合いながら、感覚と環境の接点から、新しい未来のスタンダードをつくります。

創業以来、「環境とカオリ」を軸に、伝統と革新を融合させ、お客様の多様な課題に応えるソリューションを提供しています。</p>
 </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;