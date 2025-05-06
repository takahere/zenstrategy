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

      {/* Recruitment Media Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#7C5CFF]">120媒体以上</span>の運用実績！
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
              ターゲットに合わせた採用チャネルの提案が可能です
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="Wantedly" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="Green" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="BIZREACH" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="Indeed" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="OfferBox" width={150} height={50} className="object-contain h-10" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="ミイダス" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="LinkedIn" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="Forkwell Jobs" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="ミドルの転職" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="エン転職" width={150} height={50} className="object-contain h-10" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="複業クラウド" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="type" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="マイナビ転職" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="AMBI" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="doda" width={150} height={50} className="object-contain h-10" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="リクナビNEXT" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="LAPRAS" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="転職DRAFT" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="eight career design" width={150} height={50} className="object-contain h-10" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/medialogo.png" alt="YOUTRUST" width={150} height={50} className="object-contain h-10" />
              </div>
            </div>
            
            <div className="text-right mt-6">
              <p className="text-gray-600 font-medium">and more...</p>
            </div>
          </div>
        </Container>
      </section>

      {/* BPaaSメリット Section */}
      <section className="py-16 md:py-24 bg-[#F7F5FF]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-10">
              <p className="text-left text-lg md:text-xl font-bold mb-2">1. 業務DX化と生産性向上</p>
              <p className="text-left text-base md:text-lg mb-6">
                クラウドベースのSaaSを活用し、業務プロセスのDX化を推進。採用フローの標準化と効率化により、企業は日常的な採用業務から解放され、コア業務に集中できるようになります。各種SaaSツールの連携やマネジメントもZenXが一括で管理し、複数ツールの運用に伴う負担を軽減します。
              </p>
              <p className="text-left text-lg md:text-xl font-bold mb-2">2. コスト削減</p>
              <p className="text-left text-base md:text-lg mb-6">
                BPaaSは、必要なリソースを柔軟に調整できるため、従来のBPOに比べてコスト効率が向上します。また、SaaSライセンス料や各ツールの運用費用も合理化し、最適なコストでの運用体制を構築。自社でのシステム構築が不要なため、新たなソリューションを迅速に導入できます。
              </p>
              <p className="text-left text-lg md:text-xl font-bold mb-2">3. データ蓄積とノウハウの活用</p>
              <p className="text-left text-base md:text-lg">
                ZenXの人事BPaaSでは、クラウド上で蓄積されるデータとノウハウを活用し、採用活動の質を継続的に改善します。採用データの共有が容易であり、企業はそのデータを基に内製化や体制強化に役立てることができます。
              </p>
            </div>
            <div className="mt-12">
              <p className="text-2xl md:text-3xl font-bold text-[#1E355E]">
                継続率95%以上！多くのお客様にご好評いただいております
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* プロフェッショナル紹介セクション */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#1E355E]">
              累計の支援実績は
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E355E] to-[#7C5CFF] mx-1">150社</span>！<br className="hidden md:block" />
              を支えてきた経験豊富なチーム
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-4 text-[#7C5CFF] mt-4">
              採用を"戦略から一緒に創る"パートナーに。
            </h3>
            <p className="text-lg md:text-2xl font-semibold text-[#2D2D2D] mb-8">
              経験豊富なプロが、上流から伴走。貴社の採用成功にコミットします。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 玉地秀光 */}
            <div className="flex flex-col items-center bg-[#F7F5FF] rounded-2xl p-6 shadow-sm">
              <Image src="/member_tamachi.jpg" alt="玉地秀光" width={180} height={180} className="rounded-xl object-cover mb-4" />
              <h3 className="text-xl font-bold text-[#7C5CFF] mb-2">玉地 秀光</h3>
              <p className="text-sm font-semibold text-[#2D2D2D] mb-2">
                「年間1,000人の学生を動かす就活コミュニティ運営実績と10年以上の業界知見で、上位校採用支援に強みを発揮する採用支援のベテラン」
              </p>
              <p className="text-xs text-left text-[#2D2D2D]">
                2010年、大学4年次に新卒採用支援を行う株式会社オトラディションにてインターン入社。2013年卒業後取締役に就任。総合商社、コンサル、デベロッパー、ITベンチャーなどの新卒採用コンサルティング/母集団形成を行う。2024年3月から、家族の転勤に伴い海外移住し、採用代行事業、中途職種エージェント、新卒母集団形成支援などを担う。年間1000人の学生を集める就活コミュニティを運営し、上位校の採用支援や母集団形成が得意領域。10年以上の人材業界の知見やつながりを生かし、伴走して支援を行う。
              </p>
            </div>
            {/* 金丸想 */}
            <div className="flex flex-col items-center bg-[#F7F5FF] rounded-2xl p-6 shadow-sm">
              <Image src="/member_kanemaru.jpg" alt="金丸想" width={180} height={180} className="rounded-xl object-cover mb-4" />
              <h3 className="text-xl font-bold text-[#7C5CFF] mb-2">金丸 想</h3>
              <p className="text-sm font-semibold text-[#2D2D2D] mb-2">
                「スタートアップの組織と採用戦略を牽引し、実績で多業界採用を実現する実践派プロフェッショナル」
              </p>
              <p className="text-xs text-left text-[#2D2D2D]">
                2016年にINCLUSIVE株式会社へ新卒入社し、Webメディアの営業支援・コンサルに従事。2018年からは株式会社マスメディアンにて、広告・Web業界向けの採用支援や新卒採用メディアの企画運営担当。2020年よりVISITS Technologies株式会社にてスタートアップ向け採用支援事業の立ち上げに携わるとともに、自社の採用業務にも戦略設計の上流工程から従事し、組織づくりに貢献。また、個人としてもRPOとして複数のスタートアップの採用支援に参画しており、幅広い業界・フェーズの企業に対して採用面から価値提供している。
              </p>
            </div>
            {/* 金田千裕 */}
            <div className="flex flex-col items-center bg-[#F7F5FF] rounded-2xl p-6 shadow-sm">
              <Image src="/member_kaneda.jpg" alt="金田千裕" width={180} height={180} className="rounded-xl object-cover mb-4" />
              <h3 className="text-xl font-bold text-[#7C5CFF] mb-2">金田 千裕</h3>
              <p className="text-sm font-semibold text-[#2D2D2D] mb-2">
                「1,000名以上の採用成功を支え、求人広告やSNSを駆使した全方位的な採用支援で中小〜大手企業の成長を後押しする採用戦略のパートナー」
              </p>
              <p className="text-xs text-left text-[#2D2D2D]">
                2017年にリクルートの求人広告代理店にて営業と採用オウンドメディア立ち上げを経験。中小企業から大手企業の広告、リファーラル、SNSを使った採用成功のための支援を幅広く行う。事業の成長を採用の面から支えるため、1,000名以上の採用成功の再現性を実現させた。2020年より飲食経営コンサルティングのスタートアップへ参画する傍ら、スタートアップやベンチャー、リレーション・プロダクションやヘッドハンターやビルのメンターのメンターリングを受けながら事業開発を実施。現在は、採用コンサルタントとして主にスタートアップの人材獲得戦略からRPO、SNSを使った採用支援までを行う。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ステップ導入プロセス Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              初回お打ち合わせから<span className="text-[#7C5CFF]">最短5営業日</span>で開始
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="bg-[#AB8BFF] rounded-t-lg py-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Step 1</h3>
              </div>
              <div className="flex-grow border border-gray-200 rounded-b-lg p-6 flex flex-col items-center bg-white">
                <p className="text-[#AB8BFF] text-xl font-medium mb-4">today</p>
                <div className="w-20 h-20 rounded-full border-2 border-[#AB8BFF] flex items-center justify-center mb-6">
                  <div className="w-12 h-12 flex flex-col items-center justify-center">
                    <div className="w-10 h-1 bg-[#AB8BFF] mb-2"></div>
                    <div className="w-6 h-1 bg-[#AB8BFF]"></div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#2D2D2D] mb-2 text-center">初回打ち合わせ</h4>
                <p className="text-sm text-center">
                  サービス概要説明<br />
                  ヒアリング
                </p>
              </div>
              <div className="hidden md:flex justify-center mt-4">
                <div className="w-full h-4 flex items-center justify-center relative">
                  <div className="w-full h-1 bg-[#AB8BFF]"></div>
                  <div className="absolute right-0 transform translate-x-1/2">
                    <div className="w-3 h-3 transform rotate-45 border-t-2 border-r-2 border-[#AB8BFF]"></div>
                  </div>
                </div>
              </div>
              <div className="flex md:hidden justify-center mt-4 mb-4">
                <div className="w-4 h-8 flex justify-center items-center relative">
                  <div className="w-1 h-8 bg-[#AB8BFF]"></div>
                  <div className="absolute bottom-0 transform translate-y-1/2">
                    <div className="w-3 h-3 transform rotate-45 border-r-2 border-b-2 border-[#AB8BFF]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="bg-[#AB8BFF] rounded-t-lg py-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Step 2</h3>
              </div>
              <div className="flex-grow border border-gray-200 rounded-b-lg p-6 flex flex-col items-center bg-white">
                <div className="h-12 mb-4"></div>
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <div className="flex">
                    <div className="w-10 h-10 bg-[#AB8BFF] rounded-lg mr-2"></div>
                    <div className="w-10 h-10 bg-[#AB8BFF] rounded-lg ml-4 mt-4"></div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#2D2D2D] mb-2 text-center">詳細打ち合わせ</h4>
                <p className="text-sm text-center">
                  業務内容・契約内容の<br />
                  すり合わせ
                </p>
              </div>
              <div className="hidden md:flex justify-center mt-4">
                <div className="w-full h-4 flex items-center justify-center relative">
                  <div className="w-full h-1 bg-[#AB8BFF]"></div>
                  <div className="absolute right-0 transform translate-x-1/2">
                    <div className="w-3 h-3 transform rotate-45 border-t-2 border-r-2 border-[#AB8BFF]"></div>
                  </div>
                </div>
              </div>
              <div className="flex md:hidden justify-center mt-4 mb-4">
                <div className="w-4 h-8 flex justify-center items-center relative">
                  <div className="w-1 h-8 bg-[#AB8BFF]"></div>
                  <div className="absolute bottom-0 transform translate-y-1/2">
                    <div className="w-3 h-3 transform rotate-45 border-r-2 border-b-2 border-[#AB8BFF]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="bg-[#AB8BFF] rounded-t-lg py-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Step 3</h3>
              </div>
              <div className="flex-grow border border-gray-200 rounded-b-lg p-6 flex flex-col items-center bg-white">
                <div className="h-12 mb-4"></div>
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#AB8BFF]">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 10.5L11.5 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#2D2D2D] mb-2 text-center">契約締結</h4>
                <p className="text-sm text-center"></p>
              </div>
              <div className="hidden md:flex justify-center mt-4">
                <div className="w-full h-4 flex items-center justify-center relative">
                  <div className="w-full h-1 bg-[#AB8BFF]"></div>
                  <div className="absolute right-0 transform translate-x-1/2">
                    <div className="w-3 h-3 transform rotate-45 border-t-2 border-r-2 border-[#AB8BFF]"></div>
                  </div>
                </div>
              </div>
              <div className="flex md:hidden justify-center mt-4 mb-4">
                <div className="w-4 h-8 flex justify-center items-center relative">
                  <div className="w-1 h-8 bg-[#AB8BFF]"></div>
                  <div className="absolute bottom-0 transform translate-y-1/2">
                    <div className="w-3 h-3 transform rotate-45 border-r-2 border-b-2 border-[#AB8BFF]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col">
              <div className="bg-[#AB8BFF] rounded-t-lg py-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Step 4</h3>
              </div>
              <div className="flex-grow border border-gray-200 rounded-b-lg p-6 flex flex-col items-center bg-white">
                <div className="h-12 mb-4"></div>
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#AB8BFF]">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#2D2D2D] mb-2 text-center">キックオフMTG</h4>
                <p className="text-sm text-center">
                  業務内容・契約内容の<br />
                  すり合わせ
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8">※状況によりこの限りではございません。</p>
        </Container>
      </section>

      {/* CTA Buttons Section */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 資料ダウンロードボタン */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-full bg-[#E6BE54] text-center py-3 rounded-t-3xl">
                <p className="text-[#333] font-bold">3分で「まるごと人事」がわかる!!</p>
              </div>
              <div className="pt-14 pb-8 px-8 bg-[#333] flex flex-col items-center justify-center">
                <div className="mb-4">
                  <Image 
                    src="/medialogo.png" 
                    alt="資料サンプル" 
                    width={100} 
                    height={80} 
                    className="object-contain"
                  />
                </div>
                <Link href="/download" className="flex items-center justify-between w-full bg-[#E6BE54] text-[#333] font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all">
                  <span className="text-xl">資料をダウンロード</span>
                  <span className="text-2xl">&gt;</span>
                </Link>
              </div>
            </div>
            
            {/* オンライン採用相談ボタン */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-full bg-[#333] text-center py-3 rounded-t-3xl">
                <p className="text-white font-bold">相談無料！採用のお悩みを伺います!!</p>
              </div>
              <div className="pt-14 pb-8 px-8 bg-[#F5F5F5] flex flex-col items-center justify-center">
                <div className="mb-4">
                  <Image 
                    src="/medialogo.png" 
                    alt="相談イメージ" 
                    width={100} 
                    height={80} 
                    className="object-contain"
                  />
                </div>
                <Link href="/contact" className="flex items-center justify-between w-full bg-[#E6BE54] text-[#333] font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all">
                  <span className="text-xl">オンライン採用相談</span>
                  <span className="text-2xl">&gt;</span>
                </Link>
              </div>
            </div>
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