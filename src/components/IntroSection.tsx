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
創業以来、「香りと環境を考える会社」として培ってきた伝統とノウハウを礎に、「感覚と環境にイノベーションをもたらす」をパーパスに掲げます。私たちは、サイエンスとテクノロジーの最先端を融合し、感覚を可視化・データ化。その洞察から伝統的価値を革新へと昇華させ、環境負荷を抑えた新しいライフスタイルやビジネスモデルを創出します。これからも多様なビジネス課題に挑戦し、感覚と環境の関わりから新たな価値を生み出し、より豊かなサービスを提供し続けます。</p>
 </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;