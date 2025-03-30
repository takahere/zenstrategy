'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { ArrowRight, Check, MessageCircle, Star, Users, Building, Calendar, Award } from 'lucide-react';

export default function HRServiceClient() {
  // Target industries
  const targetIndustries = [
    {
      name: 'スタートアップ',
      description: '急成長するスタートアップ企業の人事課題を解決し、スケーラブルな組織づくりをサポートします。',
      icon: <Users className="h-8 w-8 text-[#7C5CFF]" />,
    },
    {
      name: '中小企業',
      description: '限られたリソースで最大の効果を発揮する人事戦略の立案と実行をサポートします。',
      icon: <Building className="h-8 w-8 text-[#7C5CFF]" />,
    },
    {
      name: 'サービス業',
      description: '人材の採用・定着・育成を通じて、サービス品質の向上と顧客満足度の向上を実現します。',
      icon: <Calendar className="h-8 w-8 text-[#7C5CFF]" />,
    },
    {
      name: '専門サービス',
      description: '専門性の高い人材の採用と育成を支援し、組織の競争力強化に貢献します。',
      icon: <Award className="h-8 w-8 text-[#7C5CFF]" />,
    },
  ];

  // Services
  const services = [
    {
      title: '人事・労務管理',
      description: '入社手続き、給与計算、社会保険手続き、勤怠管理など、人事労務に関する業務をワンストップでサポートします。',
      icon: <Users className="h-12 w-12 text-[#7C5CFF]" />,
    },
    {
      title: '採用支援',
      description: '採用戦略の立案から、求人広告の作成・掲載、応募者管理、面接調整まで、採用活動全般をサポートします。',
      icon: <Building className="h-12 w-12 text-[#7C5CFF]" />,
    },
    {
      title: '人材育成・研修',
      description: '社員のスキルアップを目的とした研修プログラムの企画・運営や、キャリア開発支援を行います。',
      icon: <Calendar className="h-12 w-12 text-[#7C5CFF]" />,
    },
    {
      title: '組織開発',
      description: '企業文化の構築や組織変革、従業員エンゲージメント向上のための施策立案・実行を支援します。',
      icon: <Award className="h-12 w-12 text-[#7C5CFF]" />,
    },
  ];

  // Reasons to choose
  const reasons = [
    {
      title: '専門性の高いチーム',
      description: '人事・労務のプロフェッショナルが、最新の法改正や業界トレンドを踏まえたサービスを提供します。',
    },
    {
      title: 'テクノロジー活用',
      description: 'クラウドベースのHRテクノロジーを活用し、効率的かつ正確な人事業務を実現します。',
    },
    {
      title: 'カスタマイズ可能',
      description: 'お客様の業種・規模・課題に合わせて、最適なサービス内容をカスタマイズしてご提供します。',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: 'HR BPaaSサービスの導入により、人事業務の工数が約70%削減され、戦略的な人事施策に注力できるようになりました。',
      author: '田中 健太',
      position: '株式会社テックイノベーション 人事部長',
      image: 'https://picsum.photos/id/10/100/100',
    },
    {
      quote: '採用活動の効率が大幅に向上し、質の高い人材の獲得に成功しています。専門知識を持ったコンサルタントのサポートが心強いです。',
      author: '佐藤 美咲',
      position: 'グローバルトレード株式会社 代表取締役',
      image: 'https://picsum.photos/id/11/100/100',
    },
    {
      quote: '中小企業にとって人事部門の設置は負担が大きいですが、このサービスのおかげで専門性の高い人事機能を持つことができました。',
      author: '鈴木 大輔',
      position: 'フューチャーデザイン株式会社 経営企画室長',
      image: 'https://picsum.photos/id/12/100/100',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F7F5FF] py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                One team for all your HR needs
              </h1>
              <p className="text-lg md:text-xl text-[#2D2D2D] mb-8">
                中堅・中小企業やスタートアップ向けのHR BPaaSサービス。人事・労務管理、採用支援、従業員エンゲージメントなど、あらゆるHR業務をワンストップでサポートします。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  href="/contact" 
                  className="bg-[#7C5CFF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6a4de6] transition-colors"
                >
                  オンライン採用相談
                </Button>
                <Button 
                  href="/download" 
                  variant="outline"
                  className="border-[#7C5CFF] text-[#7C5CFF] px-6 py-3 rounded-md font-medium hover:bg-[#F7F5FF] transition-colors"
                >
                  資料ダウンロード
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/800/600"
                  alt="HR BPaaS services"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#7C5CFF] hidden md:block"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-[#F7F5FF]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
              こんな<span className="text-[#7C5CFF]">課題</span>はありませんか？
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="bg-white px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow transition-shadow">
              <p className="text-[#2D2D2D] font-medium">面接以外のオペレーションを任せたい！</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow transition-shadow">
              <p className="text-[#2D2D2D] font-medium">採用がわからない！</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow transition-shadow">
              <p className="text-[#2D2D2D] font-medium">優秀な採用担当がいない！</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow transition-shadow">
              <p className="text-[#2D2D2D] font-medium">採用業務が忙しくて手が回っていない！</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow transition-shadow">
              <p className="text-[#2D2D2D] font-medium">スカウトを代わりに送信してもらいたい！</p>
            </div>
          </div>
          
          <div className="text-center mb-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-10 transform rotate-180">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#7C5CFF]"></div>
            </div>
            <div className="py-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#7C5CFF]">ZenStrategy</span> ならすべて解決！
              </h2>
            </div>
          </div>
          
          <div className="bg-[#FFFDF4] p-8 rounded-lg text-center shadow-sm mb-8">
            <p className="text-xl font-medium text-[#2D2D2D]">
              人事経験豊富な<span className="text-[#7C5CFF] font-bold">採用のチーム</span>が、1ヶ月単位で貴社を手伝います！！
            </p>
          </div>
        </Container>
      </section>

      {/* Target Industries Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              どんな企業を支援しているか
            </h2>
            <p className="text-lg text-[#2D2D2D] max-w-3xl mx-auto">
              業界や規模を問わず、人事課題を抱えるあらゆる企業をサポートしています。
              特に以下の業界に強みを持っています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetIndustries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-[#7C5CFF] transition-colors">
                <div className="mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{industry.name}</h3>
                <p className="text-[#2D2D2D]">{industry.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F7F5FF]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              私たちのサービス
            </h2>
            <p className="text-lg text-[#2D2D2D] max-w-3xl mx-auto">
              人事業務のあらゆる側面をカバーする包括的なサービスを提供しています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex">
                <div className="mr-6 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{service.title}</h3>
                  <p className="text-[#2D2D2D]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              選ばれる理由
            </h2>
            <p className="text-lg text-[#2D2D2D] max-w-3xl mx-auto">
              ZenStrategyが多くの企業から選ばれる理由をご紹介します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-[#F7F5FF] p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-[#7C5CFF] mb-4">{reason.title}</h3>
                <p className="text-[#2D2D2D]">{reason.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#F7F5FF]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              お客様の声
            </h2>
            <p className="text-lg text-[#2D2D2D] max-w-3xl mx-auto">
              私たちのサービスを導入いただいたお客様からの声をご紹介します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D]">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-[#2D2D2D] italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#7C5CFF] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HR業務の効率化を実現しませんか？
            </h2>
            <p className="text-lg mb-8">
              HR BPaaSサービスの詳細については、お気軽にお問い合わせいただくか、資料をダウンロードしてご確認ください。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                className="bg-white text-[#7C5CFF] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                オンライン採用相談
              </Button>
              <Button 
                href="/download" 
                variant="outline"
                className="border-white text-white px-6 py-3 rounded-md font-medium hover:bg-[#6a4de6] transition-colors"
              >
                資料ダウンロード
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 