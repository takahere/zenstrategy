'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { Check, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactClient() {
  // Contact form state
  const [contactForm, setContactForm] = useState({
    company: '',
    department: '',
    name: '',
    email: '',
    message: ''
  });
  
  // Form validation and submission states
  const [contactFormValid, setContactFormValid] = useState(true);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Handle contact form input changes
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [id]: value
    }));
    setContactFormValid(true);
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation - check if all fields are filled and email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactForm.company || !contactForm.name || !contactForm.email || !contactForm.message || !emailRegex.test(contactForm.email)) {
      setContactFormValid(false);
      return;
    }
    
    // Handle form submission - in a real app, this would send data to a server
    console.log('Contact form submitted:', contactForm);
    
    // Reset form and show success message
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({
        company: '',
        department: '',
        name: '',
        email: '',
        message: ''
      });
      setContactSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F7F5FF] py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              お問い合わせ
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2D] mb-8">
              HR BPaaSサービスについてのご質問やお見積もりのご依頼は、以下のフォームよりお気軽にお問い合わせください。
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">お問い合わせ先</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#F7F5FF] p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#7C5CFF]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D2D2D] mb-1">メールアドレス</h3>
                    <p className="text-[#2D2D2D]">contact@zenstrategy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F7F5FF] p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#7C5CFF]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D2D2D] mb-1">電話番号</h3>
                    <p className="text-[#2D2D2D]">03-1234-5678</p>
                    <p className="text-sm text-gray-500">平日 9:00〜18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F7F5FF] p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#7C5CFF]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D2D2D] mb-1">所在地</h3>
                    <p className="text-[#2D2D2D]">〒100-0001</p>
                    <p className="text-[#2D2D2D]">東京都千代田区1-1-1</p>
                    <p className="text-[#2D2D2D]">ZenStrategyビル 5階</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">営業時間</h3>
                <div className="bg-[#F7F5FF] p-6 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">平日:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">土曜日:</span>
                    <span>10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">日曜・祝日:</span>
                    <span>休業</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                {contactSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">送信完了</h3>
                    <p className="text-lg text-[#2D2D2D]">
                      お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleContactSubmit}>
                    <div>
                      <label htmlFor="company" className="block text-[#2D2D2D] font-medium mb-2">会社名</label>
                      <input
                        type="text"
                        id="company"
                        value={contactForm.company}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                        placeholder="株式会社ZeniQ"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-[#2D2D2D] font-medium mb-2">部署名</label>
                      <input
                        type="text"
                        id="department"
                        value={contactForm.department}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                        placeholder="人事部"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-[#2D2D2D] font-medium mb-2">氏名</label>
                      <input
                        type="text"
                        id="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                        placeholder="山田 太郎"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-[#2D2D2D] font-medium mb-2">メールアドレス</label>
                      <input
                        type="email"
                        id="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                        placeholder="zeniq@mail.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-[#2D2D2D] font-medium mb-2">お問い合わせ内容</label>
                      <textarea
                        id="message"
                        rows={6}
                        value={contactForm.message}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                        placeholder="お問い合わせ内容を入力してください。"
                      ></textarea>
                    </div>
                    
                    {!contactFormValid && (
                      <div className="text-red-500 text-sm">
                        すべての必須項目を入力し、有効なメールアドレスを入力してください。
                      </div>
                    )}
                    
                    <div className="text-center">
                      <Button 
                        type="submit"
                        className="bg-[#4B23CF] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3b1ba3] transition-colors w-full"
                      >
                        送信
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F7F5FF]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">
              よくあるご質問
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">サービス導入までの流れを教えてください</h3>
                <p className="text-[#2D2D2D]">
                  お問い合わせいただいた後、担当者がヒアリングを行い、お客様のニーズに合わせたプランをご提案いたします。ご契約後、約2週間程度でサービスをご利用いただけるようになります。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">最低契約期間はありますか？</h3>
                <p className="text-[#2D2D2D]">
                  基本プランは6ヶ月からのご契約となります。短期間のご利用をご希望の場合は、お問い合わせフォームよりご相談ください。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">料金体系について詳しく知りたいです</h3>
                <p className="text-[#2D2D2D]">
                  料金は従業員数や必要なサービス内容によって異なります。詳細な料金については、お問い合わせいただくか、資料をダウンロードしてご確認ください。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">導入事例を知ることはできますか？</h3>
                <p className="text-[#2D2D2D]">
                  はい、業種別の導入事例をご用意しております。詳細は資料をダウンロードいただくか、お問い合わせフォームよりご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 