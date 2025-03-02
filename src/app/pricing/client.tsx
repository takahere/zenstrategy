'use client';

import ProductLayout from '@/components/layout/ProductLayout';
import Button from '@/components/shared/Button';
import { Check, HelpCircle } from 'lucide-react';

export default function PricingClient() {
  // サービス機能リスト
  const features = [
    '給与計算・社会保険手続き',
    '勤怠管理',
    '入退社手続き',
    '専任担当者によるサポート',
    '人事戦略コンサルティング',
    'カスタムレポート作成',
    '採用支援',
    '無制限サポート',
  ];

  // よくある質問
  const faqs = [
    {
      question: 'サービスの契約期間はどのくらいですか？',
      answer: '最低契約期間は6ヶ月となっております。長期契約の場合は特別割引もご用意しております。',
    },
    {
      question: '途中でサービス内容を変更することはできますか？',
      answer: 'はい、いつでもサービス内容の変更が可能です。ビジネスの成長に合わせて柔軟に対応いたします。',
    },
    {
      question: 'カスタムサービスの相談はできますか？',
      answer: 'はい、お客様の特定のニーズに合わせたカスタムサービスをご用意しております。営業担当までお問い合わせください。',
    },
    {
      question: '追加サービスが必要な場合はどうすればいいですか？',
      answer: '採用支援や組織開発など、追加サービスもご用意しております。詳細については営業担当にお問い合わせください。',
    },
    {
      question: '導入にあたって初期費用はかかりますか？',
      answer: '標準サービスでは初期費用はかかりません。ただし、複雑なニーズを持つ企業の場合、一時的な導入費用が発生する場合があります。',
    },
    {
      question: 'サービス開始までの流れを教えてください',
      answer: 'お問い合わせいただいた後、ニーズヒアリングを行い、最適なサービス内容をご提案します。契約後、専任担当者が導入をサポートします。',
    },
  ];

  return (
    <ProductLayout
      title="サービス内容"
      description="お客様のビジネスに最適な人事・労務管理サービスをご提供します"
    >
      {/* Service Features */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#7C5CFF] p-8">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 text-center">
            HR BPaaSサービス
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            ZenStrategyのHR BPaaSサービスは、企業の人事・労務管理業務を包括的にサポートします。
            専門知識を持つチームが、お客様のビジネスに合わせた最適なソリューションを提供します。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D2D2D]">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              href="/contact" 
              variant="primary"
              className="px-8"
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 text-center">
          サービス詳細
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">基本サービス</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">給与計算・社会保険手続き</span>
                  <p className="text-sm text-gray-600 mt-1">正確な給与計算と社会保険関連の手続きを代行します。</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">勤怠管理</span>
                  <p className="text-sm text-gray-600 mt-1">効率的な勤怠管理システムを提供し、労働時間の適正管理をサポートします。</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">入退社手続き</span>
                  <p className="text-sm text-gray-600 mt-1">従業員の入社・退社に関する手続きを一括代行します。</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">高度なサポート</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">人事戦略コンサルティング</span>
                  <p className="text-sm text-gray-600 mt-1">企業の成長に合わせた人事戦略の立案をサポートします。</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">採用支援</span>
                  <p className="text-sm text-gray-600 mt-1">採用計画の立案から選考プロセスまで、採用活動を総合的にサポートします。</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">カスタムレポート</span>
                  <p className="text-sm text-gray-600 mt-1">お客様のニーズに合わせた人事データの分析とレポート作成を行います。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom Service Section */}
      <div className="bg-[#F7F5FF] rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 text-center">
          カスタマイズ可能なサービス
        </h2>
        <p className="text-center text-[#2D2D2D] mb-8 max-w-2xl mx-auto">
          お客様の特定のニーズに合わせたカスタムサービスをご用意しております。
          ビジネスの規模や業界に最適なソリューションをご提案します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">カスタムサービスの特徴</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>お客様の業界に特化したサービス</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>ビジネスの成長に合わせた柔軟なスケーリング</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>人事専門家による専任チーム</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>優先サポートと迅速な対応</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>カスタムレポートと分析</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">サービスのご相談</h3>
            <p className="text-[#2D2D2D] mb-6">
              お客様のビジネスについてお聞かせください。最適なソリューションをご提案いたします。
            </p>
            <Button href="/contact?custom=true" className="w-full">
              営業担当に相談する
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center">
          よくある質問
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 flex items-start">
                <HelpCircle size={20} className="text-[#7C5CFF] mr-2 flex-shrink-0 mt-1" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-[#2D2D2D] ml-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#7C5CFF] text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">サービスについてのご相談</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          お客様のビジネスに最適なサービスをご提案いたします。まずはお気軽にお問い合わせください。
        </p>
        <Button href="/contact" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
          お問い合わせ
        </Button>
      </div>
    </ProductLayout>
  );
} 