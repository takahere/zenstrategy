'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContentLayout from '@/components/layout/ContentLayout';
import Button from '@/components/shared/Button';
import { ArrowRight, BarChart2, Building, ShoppingBag, Zap } from 'lucide-react';

export default function IndustriesClient() {
  // Industry data
  const industries = [
    {
      id: 'manufacturing',
      name: '製造業',
      icon: <Zap size={24} className="text-[#7C5CFF]" />,
      description: '製造業向けの専門的な人事・労務管理サービス',
      challenges: [
        '複数拠点での勤怠管理の統一',
        'シフト制勤務の管理と最適化',
        '労働安全衛生法への対応',
        '季節変動に対応した人員配置',
      ],
      solutions: [
        '拠点横断型勤怠管理システム',
        'シフト最適化ツールの提供',
        '安全衛生管理のデジタル化支援',
        '需要予測に基づく人員配置計画',
      ],
      metrics: [
        { label: '労働生産性', value: true },
        { label: '離職率', value: true },
        { label: '労働災害発生率', value: true },
        { label: '残業時間', value: true },
      ],
      caseStudies: [
        {
          title: '製造業A社の人事業務効率化事例',
          image: 'https://picsum.photos/id/20/600/400',
        }
      ],
    },
    {
      id: 'retail',
      name: '小売業',
      icon: <ShoppingBag size={24} className="text-[#7C5CFF]" />,
      description: '小売業向けの人事・労務管理ソリューション',
      challenges: [
        'アルバイト・パートの採用と定着',
        '繁閑期に対応した人員配置',
        '複数店舗の勤怠管理の一元化',
        '人件費の最適化',
      ],
      solutions: [
        '採用・オンボーディング支援',
        '需要予測に基づくシフト管理',
        'クラウド型勤怠管理システム',
        '人件費分析と最適化提案',
      ],
      metrics: [
        { label: '人件費率', value: true },
        { label: '従業員定着率', value: true },
        { label: '採用コスト', value: true },
        { label: '労働生産性', value: true },
      ],
      caseStudies: [
        {
          title: '全国展開する小売チェーンの人事システム統合事例',
          image: 'https://picsum.photos/id/21/600/400',
        }
      ],
    },
    {
      id: 'it',
      name: 'IT・テクノロジー',
      icon: <Building size={24} className="text-[#7C5CFF]" />,
      description: 'IT企業向けの柔軟な人事・労務管理サービス',
      challenges: [
        'リモートワーク環境での労務管理',
        '高度人材の採用と定着',
        'グローバル人材の労務管理',
        '急成長に対応した人事制度設計',
      ],
      solutions: [
        'リモートワーク対応型勤怠システム',
        'エンジニア特化型採用支援',
        'グローバル人事制度コンサルティング',
        'スケーラブルな人事システム構築',
      ],
      metrics: [
        { label: 'エンゲージメントスコア', value: true },
        { label: 'スキル習得率', value: true },
        { label: '採用成功率', value: true },
        { label: '1人当たり売上高', value: true },
      ],
      caseStudies: [
        {
          title: 'グローバル展開するIT企業の人事統合事例',
          image: 'https://picsum.photos/id/22/600/400',
        }
      ],
    },
    {
      id: 'healthcare',
      name: '医療・介護',
      icon: <BarChart2 size={24} className="text-[#7C5CFF]" />,
      description: '医療・介護業界向けの専門的な人事・労務管理',
      challenges: [
        '24時間シフト制の複雑な勤務管理',
        '資格管理と更新追跡',
        '人材不足への対応',
        '労働法規制への厳格な対応',
      ],
      solutions: [
        '医療機関特化型シフト管理',
        '資格管理システムの提供',
        '採用・定着化支援プログラム',
        'コンプライアンス管理支援',
      ],
      metrics: [
        { label: 'シフト充足率', value: true },
        { label: '資格更新率', value: true },
        { label: '離職率', value: true },
        { label: '残業時間', value: true },
      ],
      caseStudies: [
        {
          title: '大規模病院グループの人事システム統合事例',
          image: 'https://picsum.photos/id/23/600/400',
        }
      ],
    },
  ];

  // Industry sidebar component
  const IndustrySidebar = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-[#2D2D2D]">業種別</h3>
      <ul className="space-y-2">
        {industries.map((industry) => (
          <li key={industry.id}>
            <a 
              href={`#${industry.id}`}
              className="flex items-center p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]"
            >
              <span className="mr-2">{industry.icon}</span>
              {industry.name}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 p-4 bg-[#F7F5FF] rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">お探しの業種がありませんか？</h3>
        <p className="text-sm text-[#2D2D2D] mb-4">
          当社は様々な業種のお客様にサービスを提供しています。お客様のビジネスに最適なソリューションについてお問い合わせください。
        </p>
        <Button 
          href="/contact-sales" 
          variant="primary" 
          size="sm" 
          className="w-full"
        >
          お問い合わせ
        </Button>
      </div>
    </div>
  );

  return (
    <ContentLayout
      title="業種別ソリューション"
      description="各業界特有の課題に対応した人事・労務管理サービス"
      sidebar={<IndustrySidebar />}
    >
      <div className="space-y-16">
        {industries.map((industry) => (
          <div key={industry.id} id={industry.id} className="scroll-mt-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48 md:h-64">
                <Image
                  src={`https://picsum.photos/id/${industry.id === 'manufacturing' ? 24 : industry.id === 'retail' ? 25 : industry.id === 'it' ? 26 : 27}/1200/400`}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C5CFF]/80 to-transparent flex items-center">
                  <div className="px-6 md:px-10 text-white max-w-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{industry.name}</h2>
                    <p className="text-white/90">{industry.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">業界の課題</h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#7C5CFF] mr-2">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Solutions */}
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">当社のソリューション</h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#7C5CFF] mr-2">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">重要指標</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {industry.metrics.map((metric, index) => (
                      <div key={index} className="bg-[#F7F5FF] p-4 rounded-lg text-center">
                        <span className="block text-[#2D2D2D] font-medium">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Case Studies */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">導入事例</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industry.caseStudies.map((caseStudy, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="relative h-40">
                          <Image
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-[#2D2D2D] mb-2">{caseStudy.title}</h4>
                          <a href="#" className="inline-flex items-center text-sm text-[#7C5CFF] hover:underline">
                            詳細を見る <ArrowRight size={14} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button href="/contact-sales" variant="primary">
                    お問い合わせ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Industry Configurator */}
      <div className="mt-16 bg-[#F7F5FF] p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 text-center">
          Configure Your Industry Solution
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="industry-select" className="block text-[#2D2D2D] font-medium mb-2">
                Your Industry
              </label>
              <select 
                id="industry-select" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
              >
                <option value="">Select your industry</option>
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>{industry.name}</option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="company-size" className="block text-[#2D2D2D] font-medium mb-2">
                Company Size
              </label>
              <select 
                id="company-size" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="specific-needs" className="block text-[#2D2D2D] font-medium mb-2">
                Specific Needs
              </label>
              <textarea 
                id="specific-needs" 
                rows={4}
                placeholder="Tell us about your specific industry challenges..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
              ></textarea>
            </div>
            <Button className="w-full">Get Custom Solution</Button>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
} 