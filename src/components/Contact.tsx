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
          <h2 className="font-accent font-bold text-4xl lg:text-5xl text-gray-900 heading-spacing-medium">
            CONTACT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto section-description">
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
          className="bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden" style={{ padding: '3rem' }}
        >
          {/* 背景装飾 */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 opacity-3"
            style={{ backgroundColor: 'var(--color-accent)' }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* お名前 */}
              <div className="form-field-spacing">
                <label htmlFor="name" className="flex items-center space-x-3 text-base font-semibold text-gray-800 form-label-spacing">
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 191, 255, 0.1)' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                  >
                    <User size={16} className="text-accent" />
                  </motion.div>
                  <span>お名前 <span className="text-red-500">*</span></span>
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-base"
                  placeholder="山田太郎"
                  whileFocus={{ scale: 1.02 }}
                  suppressHydrationWarning
                />
              </div>

              {/* 会社名 */}
              <div className="form-field-spacing">
                <label htmlFor="company" className="flex items-center space-x-3 text-base font-semibold text-gray-800 form-label-spacing">
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 191, 255, 0.1)' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                  >
                    <Building size={16} className="text-accent" />
                  </motion.div>
                  <span>会社名</span>
                </label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-base"
                  placeholder="株式会社サンプル"
                  whileFocus={{ scale: 1.02 }}
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* メールアドレス */}
              <div className="form-field-spacing">
                <label htmlFor="email" className="flex items-center space-x-3 text-base font-semibold text-gray-800 form-label-spacing">
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 191, 255, 0.1)' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                  >
                    <Mail size={16} className="text-accent" />
                  </motion.div>
                  <span>メールアドレス <span className="text-red-500">*</span></span>
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-base"
                  placeholder="example@email.com"
                  whileFocus={{ scale: 1.02 }}
                  suppressHydrationWarning
                />
              </div>

              {/* 電話番号 */}
              <div className="form-field-spacing">
                <label htmlFor="phone" className="flex items-center space-x-3 text-base font-semibold text-gray-800 form-label-spacing">
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 191, 255, 0.1)' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                  >
                    <Phone size={16} className="text-accent" />
                  </motion.div>
                  <span>電話番号</span>
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-base"
                  placeholder="090-1234-5678"
                  whileFocus={{ scale: 1.02 }}
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* お問い合わせ種別 */}
            <div className="form-field-spacing">
              <label htmlFor="type" className="flex items-center space-x-3 text-base font-semibold text-gray-800 form-label-spacing">
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0, 191, 255, 0.1)' }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                >
                  <MessageSquare size={16} className="text-accent" />
                </motion.div>
                <span>お問い合わせ種別 <span className="text-red-500">*</span></span>
              </label>
              <motion.select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-base bg-white"
                whileFocus={{ scale: 1.02 }}
                suppressHydrationWarning
              >
                <option value="">選択してください</option>
                {CONTACT_TYPES.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* お問い合わせ内容 */}
            <div className="form-field-spacing">
              <label htmlFor="message" className="flex items-center space-x-3 text-base font-semibold text-gray-800 form-label-spacing">
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0, 191, 255, 0.1)' }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                >
                  <MessageSquare size={16} className="text-accent" />
                </motion.div>
                <span>お問い合わせ内容 <span className="text-red-500">*</span></span>
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 resize-vertical text-base"
                placeholder="プロジェクトの詳細、ご予算、ご希望の納期などをお聞かせください。"
                whileFocus={{ scale: 1.01 }}
                suppressHydrationWarning
              />
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center space-x-3 rounded-xl font-accent font-bold text-base tracking-wider uppercase transition-all duration-300 relative overflow-hidden custom-button-padding ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                    : 'text-white shadow-xl hover:shadow-2xl'
                }`}
                style={
                  !isSubmitting && submitStatus === 'idle'
                    ? {
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.8) 100%)'
                      }
                    : {}
                }
                whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {/* 背景エフェクト */}
                {!isSubmitting && submitStatus === 'idle' && (
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.9) 0%, var(--color-accent) 100%)'
                    }}
                  />
                )}
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="relative z-10">送信中...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <span className="relative z-10">送信完了</span>
                ) : submitStatus === 'error' ? (
                  <span className="relative z-10">送信エラー</span>
                ) : (
                  <>
                    <motion.div
                      className="relative z-10"
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Send size={18} />
                    </motion.div>
                    <span className="relative z-10">送信する</span>
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
          className="text-center"
          style={{ marginTop: '8rem' }}
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