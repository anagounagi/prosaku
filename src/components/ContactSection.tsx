'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 入力値の検証
  const validateInput = () => {
    // 各項目が2文字以上であることを確認
    if (!name || name.trim().length < 2) {
      toast({
        title: "入力エラー",
        description: "お名前は2文字以上入力してください。",
      });
      return false;
    }
    
    if (!subject || subject.trim().length < 2) {
      toast({
        title: "入力エラー",
        description: "件名は2文字以上入力してください。",
      });
      return false;
    }
    
    if (!message || message.trim().length < 2) {
      toast({
        title: "入力エラー",
        description: "メッセージは2文字以上入力してください。",
      });
      return false;
    }
    
    return true;
  };
  
  // Googleフォームを直接開く方式（修正版）
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 入力値の検証
    if (!validateInput()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // viewformを使用してGoogleフォームを直接開く
      const viewFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfTqptIjSDQIDBE8G3RPvr1fkWTj5qPf58pIlkcnNslPLKHYA/viewform';
      
      // 各フィールドをエンコード（正しいフィールドIDを使用）
      const encodedName = encodeURIComponent(name);
      const encodedSubject = encodeURIComponent(subject);
      const encodedMessage = encodeURIComponent(message);
      
      // URLにパラメータを追加（確認済みの正しいID）
      const formURL = `${viewFormURL}?usp=pp_url&entry.268229942=${encodedName}&entry.636362231=${encodedSubject}&entry.1899431198=${encodedMessage}`;
      
      // 確認メッセージを表示
      toast({
        title: "フォームを開きます",
        description: "メールアドレスを入力して送信してください",
      });
      
      // フォームをリセット
      setName('');
      setSubject('');
      setMessage('');
      
      // 新しいタブでフォームを開く
      window.open(formURL, '_blank');
    } catch (error) {
      console.error('フォーム処理エラー:', error);
      toast({
        title: "エラーが発生しました",
        description: "処理中にエラーが発生しました。もう一度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4 tracking-wide">お問い合わせ</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ご質問やお見積もりのご依頼など、お気軽にお問い合わせください
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">お名前<span className="text-red-500 ml-1">*</span></Label>
              <Input 
                id="name" 
                required 
                minLength={2}
                className="bg-gray-900 border-gray-800 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="2文字以上で入力してください"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-white">件名<span className="text-red-500 ml-1">*</span></Label>
              <Input 
                id="subject" 
                required 
                minLength={2}
                className="bg-gray-900 border-gray-800 text-white"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="2文字以上で入力してください"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">メッセージ<span className="text-red-500 ml-1">*</span></Label>
              <Textarea 
                id="message" 
                required 
                minLength={2}
                rows={6} 
                className="bg-gray-900 border-gray-800 text-white resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="2文字以上で入力してください"
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200 rounded-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? '処理中...' : 'フォームを開く'}
              </Button>
              
              <div className="bg-gray-900 p-4 rounded-md text-sm">
                <h3 className="text-white font-semibold mb-2">お問い合わせ方法について:</h3>
                <p className="text-gray-300">
                  1. 上記のフォームに必要事項を入力して「フォームを開く」をクリックしてください。
                  2. Googleフォームが新しいタブで開きます。
                  3. メールアドレスを入力してから「送信」ボタンを押してください。
                </p>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;