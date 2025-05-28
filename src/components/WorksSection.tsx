import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Updated project list
type Work = {
  title: string;
  category: string;
  image: string;
};

const works: Work[] = [
  {
    title: 'かおりの強弱を数値でとらえる',
    category: '嗅覚分析',
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '香りをつかったOEM,ODMの開発',
    category: '香りのOEM・ODM',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '美術品評価書の作成',
    category: 'アート評価',
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'シニアマンションへの入居支援・売却・家財整理リスト作成',
    category: '高齢者支援サービス',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '香水ブランドのコンセプト開発',
    category: '香りのデザイン',
    image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '医院・オフィスの香り設計',
    category: '嗅覚ソリューション',
    image: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=800&auto=format&fit=crop',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const WorksSection: React.FC = () => {
  return (
    <section id="works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4 tracking-wide">活用事例</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            これまでに関わったプロジェクトや実績
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden">
                <AspectRatio ratio={4 / 3} className="bg-gray-100">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="mt-4">
                <p className="text-sm text-[#c8a415] mb-1">{work.category}</p>
                <h3 className="text-lg font-medium">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection; 