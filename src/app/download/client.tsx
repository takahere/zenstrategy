'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { Check, FileText, Download, ArrowRight } from 'lucide-react';

export default function DownloadClient() {
  // Download form state
  const [downloadForm, setDownloadForm] = useState({
    company: '',
    department: '',
    name: '',
    email: ''
  });
  
  // Form validation and submission states
  const [downloadFormValid, setDownloadFormValid] = useState(true);
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);

  // Handle download form input changes
  const handleDownloadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDownloadForm(prev => ({
      ...prev,
      [id]: value
    }));
    setDownloadFormValid(true);
  };

  // Handle download form submission
  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation - check if all required fields are filled and email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!downloadForm.company || !downloadForm.name || !downloadForm.email || !emailRegex.test(downloadForm.email)) {
      setDownloadFormValid(false);
      return;
    }
    
    // Handle form submission - in a real app, this would trigger a download
    console.log('Download form submitted:', downloadForm);
    
    // Reset form and show success message
    setDownloadSubmitted(true);
    setTimeout(() => {
      setDownloadForm({
        company: '',
        department: '',
        name: '',
        email: ''
      });
      // Don't reset the submitted state to allow user to download the document
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F7F5FF] py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              資料ダウンロード
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2D] mb-8">
              HR BPaaSサービスの詳細資料をダウンロードいただけます。サービス概要、導入事例、料金プランなど、お役立ち資料をご用意しております。
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">
              資料でわかること
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F7F5FF] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#7C5CFF] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">サービス詳細</h3>
                </div>
                <p className="text-[#2D2D2D]">
                  HR BPaaSサービスの詳細な機能や特徴、他社サービスとの違いについて詳しく解説しています。
                </p>
              </div>
              
              <div className="bg-[#F7F5FF] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#7C5CFF] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">導入効果</h3>
                </div>
                <p className="text-[#2D2D2D]">
                  サービス導入による業務効率化やコスト削減効果、従業員満足度向上などの具体的な効果を数値で示しています。
                </p>
              </div>
              
              <div className="bg-[#F7F5FF] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#7C5CFF] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">導入事例</h3>
                </div>
                <p className="text-[#2D2D2D]">
                  様々な業種・規模の企業における導入事例と、導入後の具体的な成果をご紹介しています。
                </p>
              </div>
              
              <div className="bg-[#F7F5FF] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#7C5CFF] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">料金プラン</h3>
                </div>
                <p className="text-[#2D2D2D]">
                  企業規模や必要な機能に応じた料金プランの詳細と、オプションサービスの内容を確認いただけます。
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-[#7C5CFF] font-medium hover:underline"
              >
                詳しい説明をご希望の方はお問い合わせください <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Document Download Form Section */}
      <section id="download-form" className="py-16 md:py-24 bg-[#F7F5FF]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2D2D2D] mb-8">
              資料ダウンロードフォーム
            </h2>
            <p className="text-center text-lg mb-10">
              以下のフォームにご記入いただくと、すべての資料をまとめてダウンロードいただけます。
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              {downloadSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">ダウンロード準備完了</h3>
                  <p className="text-lg text-[#2D2D2D] mb-6">
                    ご入力いただいたメールアドレスに資料のダウンロードリンクをお送りしました。
                  </p>
                  <div className="space-y-4">
                    <Button 
                      href="#"
                      className="bg-[#7C5CFF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6a4de6] transition-colors flex items-center justify-center w-full"
                    >
                      <Download className="mr-2 h-5 w-5" /> すべての資料をダウンロード
                    </Button>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleDownloadSubmit}>
                  <div>
                    <label htmlFor="company" className="block text-[#2D2D2D] font-medium mb-2">会社名</label>
                    <input
                      type="text"
                      id="company"
                      value={downloadForm.company}
                      onChange={handleDownloadChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                      placeholder="株式会社ZeniQ"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-[#2D2D2D] font-medium mb-2">部署名</label>
                    <input
                      type="text"
                      id="department"
                      value={downloadForm.department}
                      onChange={handleDownloadChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                      placeholder="人事部"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-[#2D2D2D] font-medium mb-2">氏名</label>
                    <input
                      type="text"
                      id="name"
                      value={downloadForm.name}
                      onChange={handleDownloadChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                      placeholder="山田 太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#2D2D2D] font-medium mb-2">メールアドレス</label>
                    <input
                      type="email"
                      id="email"
                      value={downloadForm.email}
                      onChange={handleDownloadChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
                      placeholder="zeniq@mail.com"
                    />
                  </div>
                  
                  {!downloadFormValid && (
                    <div className="text-red-500 text-sm">
                      すべての必須項目を入力し、有効なメールアドレスを入力してください。
                    </div>
                  )}
                  
                  <div className="text-center">
                    <Button 
                      type="submit"
                      className="bg-[#4B23CF] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3b1ba3] transition-colors w-full"
                    >
                      資料をダウンロード
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 