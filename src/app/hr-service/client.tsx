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

      {/* Recruitment Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] mb-10">
            採用課題に合わせた最適な設計をしながら<br />
            面接以外の採用業務を代行します！
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Design Column */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-[#1E355E] text-white text-center text-xl font-bold py-4">
                設計
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E355E] mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm">要件定義<br />ペルソナ設計</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg border-2 border-[#1E355E] mb-2 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#1E355E]"></div>
                  </div>
                  <p className="text-sm">求人票・<br />スカウト文作成</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#1E355E] mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-[#1E355E]"></div>
                  </div>
                  <p className="text-sm">募集媒体選定</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 border-2 border-[#1E355E] mb-2 flex items-center justify-center">
                    <div className="w-8 h-[2px] bg-[#1E355E]"></div>
                    <div className="w-8 h-[2px] bg-[#1E355E] absolute mt-2"></div>
                    <div className="w-8 h-[2px] bg-[#1E355E] absolute mt-4"></div>
                  </div>
                  <p className="text-sm">選考<br />フロー構築</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-10 h-[2px] bg-[#1E355E] rotate-45"></div>
                    <div className="w-10 h-[2px] bg-[#1E355E] -rotate-45 absolute"></div>
                  </div>
                  <p className="text-sm">訴求ポイント<br />洗い出し</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 border-2 border-[#1E355E] mb-2 flex flex-col items-center justify-center">
                    <div className="w-6 h-[2px] bg-[#1E355E] mb-1"></div>
                    <div className="w-6 h-[2px] bg-[#1E355E] mb-1"></div>
                    <div className="w-6 h-[2px] bg-[#1E355E]"></div>
                  </div>
                  <p className="text-sm">スカウト送信<br />スケジュール提案</p>
                </div>
              </div>
            </div>
            
            {/* Execution Column */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-[#7C5CFF] text-white text-center text-xl font-bold py-4">
                実行
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="border border-[#7C5CFF] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-10 border-2 border-[#7C5CFF] relative">
                      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-[#7C5CFF] absolute right-1 bottom-1"></div>
                    </div>
                  </div>
                  <p className="text-sm">書類選考</p>
                </div>
                <div className="border border-[#7C5CFF] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-8 rounded-full border-2 border-[#7C5CFF]">
                      <div className="w-2 h-5 bg-[#7C5CFF] rounded-full mx-auto mt-1"></div>
                    </div>
                  </div>
                  <p className="text-sm">スカウト<br />対象者選定</p>
                </div>
                <div className="border border-[#7C5CFF] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-10 border-2 border-[#7C5CFF]"></div>
                  </div>
                  <p className="text-sm">面談・面接<br />の日程調整</p>
                </div>
                <div className="border border-[#7C5CFF] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="rounded-full w-8 h-8 border-2 border-[#7C5CFF] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border-[1px] border-[#7C5CFF]"></div>
                    </div>
                  </div>
                  <p className="text-sm">スカウト送信</p>
                </div>
                <div className="border border-[#7C5CFF] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-1 bg-[#7C5CFF]"></div>
                  </div>
                  <p className="text-sm">応募者からの<br />問い合わせ対応</p>
                </div>
                <div className="border border-[#7C5CFF] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-4 h-4 rounded-full border-2 border-[#7C5CFF] mr-1"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-[#7C5CFF] ml-1"></div>
                  </div>
                  <p className="text-sm">エージェント<br />マネジメント</p>
                </div>
              </div>
            </div>
            
            {/* Review Column */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-[#1E355E] text-white text-center text-xl font-bold py-4">
                振り返り・改善
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-10 h-[2px] bg-[#1E355E]"></div>
                    <div className="h-6 w-[2px] bg-[#1E355E] absolute"></div>
                  </div>
                  <p className="text-sm">オンライン<br />定例MTG</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="relative">
                      <div className="w-6 h-[2px] bg-[#1E355E] rotate-45"></div>
                      <div className="w-6 h-[2px] bg-[#1E355E] -rotate-45"></div>
                    </div>
                  </div>
                  <p className="text-sm">数値分析</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="relative w-8 h-8">
                      <div className="w-8 h-[2px] bg-[#1E355E] absolute top-2"></div>
                      <div className="w-4 h-[2px] bg-[#1E355E] rotate-45 absolute top-4 right-0"></div>
                    </div>
                  </div>
                  <p className="text-sm">改善施策の案</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-8 border-2 border-[#1E355E] flex items-center justify-center">
                      <div className="w-5 h-[2px] bg-[#1E355E]"></div>
                      <div className="h-5 w-[2px] bg-[#1E355E] absolute"></div>
                    </div>
                  </div>
                  <p className="text-sm">ターゲット<br />再設定</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-[2px] bg-[#1E355E] mb-1"></div>
                    <div className="w-8 h-[2px] bg-[#1E355E] mb-1"></div>
                    <div className="w-8 h-[2px] bg-[#1E355E]"></div>
                  </div>
                  <p className="text-sm">求人票・スカウト<br />リライト</p>
                </div>
                <div className="border border-[#1E355E] rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-8 rounded-full border-2 border-[#1E355E] relative">
                      <div className="absolute w-10 h-[2px] bg-[#1E355E] rotate-45 top-3"></div>
                    </div>
                  </div>
                  <p className="text-sm">代行業務の<br />変更</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-6">※面談・面接はお客様にて実施いただきます。</p>
        </Container>
      </section>

      {/* Service Delivery Structure Section */}
      <section className="py-16 md:py-24 bg-[#F7F5FF]">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] mb-10">
            ZenStrategy のサービス提供体制
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* お客様側 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
              <div className="bg-[#1E355E] text-white text-center text-xl font-bold py-4">
                お客様
              </div>
              <div className="flex-grow p-8 flex flex-col justify-center items-center">
                <div className="mb-6 flex items-center">
                  <div className="w-14 h-14 mr-5">
                    <div className="w-14 h-14 border-2 border-[#1E355E] flex flex-col items-center justify-center">
                      <div className="grid grid-cols-3 gap-1 p-1">
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                        <div className="w-2 h-2 bg-[#1E355E]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    </div>
                    <p className="text-xl font-bold text-[#2D2D2D]">ご担当者</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ZenStrategy側 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
              <div className="bg-[#7C5CFF] text-white text-center text-xl font-bold py-4">
                ZenStrategy
              </div>
              <div className="flex-grow p-8 flex flex-col justify-start items-center">
                <div className="w-full max-w-xs mb-10">
                  <div className="border-2 border-dashed border-[#7C5CFF] rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-[#2D2D2D]">マネージャー</p>
                    <p className="text-sm text-gray-600">統括・クオリティ担保</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                  <div className="border-2 border-[#7C5CFF] rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-[#2D2D2D]">採用リーダー</p>
                    <p className="text-sm text-gray-600">PM/コンサルティング</p>
                  </div>
                  
                  <div className="border-2 border-[#7C5CFF] rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-[#2D2D2D]">メンバー</p>
                    <p className="text-sm text-gray-600">実業務</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 矢印 */}
          <div className="hidden md:flex justify-center my-4">
            <div className="w-20 h-20 relative flex items-center justify-center">
              <div className="absolute left-0 w-full h-2 bg-[#7C5CFF]"></div>
              <div className="absolute left-0 w-4 h-4 rounded-full bg-[#7C5CFF]"></div>
              <div className="absolute right-0 w-4 h-4 rounded-full bg-[#7C5CFF]"></div>
            </div>
          </div>
          {/* モバイル用矢印 */}
          <div className="flex md:hidden justify-center my-4">
            <div className="w-2 h-20 bg-[#7C5CFF] relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#7C5CFF]"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#7C5CFF]"></div>
            </div>
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