'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, Building, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_TYPES } from '@/lib/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 実際のプロジェクトでは、ここでEmailJSやAPIを使用してメール送信を行います
    try {
      // シミュレーション用の遅延
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        type: '',
        message: '',
      });
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="section-spacing bg-gray-50"
    >
      <div className="container-section max-w-4xl">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="font-accent font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
            CONTACT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            プロジェクトのご相談やお見積もりなど、<br />
            お気軽にお問い合わせください。24時間以内にご返信いたします。
          </p>
        </motion.div>

        {/* お問い合わせフォーム */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-10 lg:p-16"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <User size={16} />
                  <span>お名前 <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="山田太郎"
                />
              </div>

              {/* 会社名 */}
              <div>
                <label htmlFor="company" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Building size={16} />
                  <span>会社名</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="株式会社サンプル"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} />
                  <span>メールアドレス <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="example@email.com"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} />
                  <span>電話番号</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="090-1234-5678"
                />
              </div>
            </div>

            {/* お問い合わせ種別 */}
            <div>
              <label htmlFor="type" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <MessageSquare size={16} />
                <span>お問い合わせ種別 <span className="text-red-500">*</span></span>
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
              >
                <option value="">選択してください</option>
                {CONTACT_TYPES.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <MessageSquare size={16} />
                <span>お問い合わせ内容 <span className="text-red-500">*</span></span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-vertical"
                placeholder="プロジェクトの詳細、ご予算、ご希望の納期などをお聞かせください。"
              />
            </div>

            {/* 送信ボタン */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center space-x-2 px-8 py-4 font-accent font-medium text-sm tracking-wider uppercase transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-900 text-white hover:bg-accent'
                }`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>送信中...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <span>送信完了</span>
                ) : submitStatus === 'error' ? (
                  <span>送信エラー</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>送信する</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* ステータスメッセージ */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 text-sm"
              >
                お問い合わせありがとうございます。24時間以内にご返信いたします。
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-600 text-sm"
              >
                送信に失敗しました。お手数ですが、再度お試しください。
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* 追加情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            お急ぎの場合は、SNSのDMでもお気軽にお声がけください。<br />
            個人情報の取扱いについては、プライバシーポリシーをご確認ください。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;