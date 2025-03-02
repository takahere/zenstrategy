import Image from 'next/image';
import ContentLayout from '@/components/layout/ContentLayout';
import Button from '@/components/shared/Button';
import { ArrowRight, Play, Star } from 'lucide-react';

export const metadata = {
  title: '導入事例 | ZenStrategy',
  description: 'ZenStrategyの人事・労務管理サービスを導入したお客様の成功事例',
};

export default function CustomersPage() {
  // Featured customer data
  const featuredCustomer = {
    name: 'テックグロース株式会社',
    logo: 'https://picsum.photos/id/30/200/100',
    image: 'https://picsum.photos/id/31/1200/600',
    quote: "ZenStrategyは私たちの人事・労務管理業務を変革しました。彼らの専門知識により、業務効率が大幅に向上し、社員満足度も高まりました。",
    author: '佐藤 直子',
    position: '代表取締役社長, テックグロース株式会社',
    stats: [
      { label: '業務時間削減', value: '週20時間以上' },
      { label: '従業員満足度', value: '85%向上' },
      { label: '離職率', value: '50%減少' },
    ],
  };

  // Success story data
  const successStories = [
    {
      id: 'manufacturing-case-1',
      company: 'テクノ製造',
      industry: '製造業',
      logo: 'https://picsum.photos/id/32/200/100',
      image: 'https://picsum.photos/id/33/600/400',
      title: 'テクノ製造が勤怠管理システムを刷新した事例',
      summary: 'テクノ製造は複数拠点の勤怠管理を効率化する必要がありました。ZenStrategyは統合型勤怠管理システムを導入し、業務効率を大幅に改善しました。',
      results: [
        '勤怠管理業務の時間を75%削減',
        '残業時間の可視化と30%削減を実現',
        '複数拠点のデータ統合による経営判断の迅速化',
      ],
    },
    {
      id: 'retail-case-1',
      company: 'スタイルショップ',
      industry: '小売業',
      logo: 'https://picsum.photos/id/34/200/100',
      image: 'https://picsum.photos/id/35/600/400',
      title: '全国展開する小売チェーンの人事システム統合事例',
      summary: 'スタイルショップは全国の店舗での人員管理と採用活動の効率化が課題でした。ZenStrategyはクラウド型人事管理システムを導入し、一元管理を実現しました。',
      results: [
        '採用プロセスの効率化により採用コスト25%削減',
        'シフト管理の最適化による人件費15%削減',
        '店舗間の人材配置の柔軟性向上',
      ],
    },
    {
      id: 'it-case-1',
      company: 'サービスコネクト',
      industry: 'IT・テクノロジー',
      logo: 'https://picsum.photos/id/36/200/100',
      image: 'https://picsum.photos/id/37/600/400',
      title: '急成長するIT企業の人事システム構築事例',
      summary: 'サービスコネクトは急速な成長に対応できる人事システムが必要でした。ZenStrategyはスケーラブルな人事システムを設計・導入しました。',
      results: [
        '従業員数10倍の成長に対応するシステム構築',
        'リモートワーク環境での労務管理の効率化',
        'グローバル人材の採用・管理プロセスの確立',
      ],
    },
    {
      id: 'finance-case-1',
      company: 'ペイファスト',
      industry: '金融',
      logo: 'https://picsum.photos/id/38/200/100',
      image: 'https://picsum.photos/id/39/600/400',
      title: '金融機関のコンプライアンス対応と人事効率化事例',
      summary: 'ペイファストは規制遵守と急速な成長の両立が課題でした。ZenStrategyはコンプライアンス対応型の人事システムを導入しました。',
      results: [
        '労働法規制への完全対応を実現',
        '監査プロセスの効率化',
        'コンプライアンスコストの削減',
      ],
    },
    {
      id: 'healthcare-case-1',
      company: 'ヘルステック',
      industry: '医療・介護',
      logo: 'https://picsum.photos/id/40/200/100',
      image: 'https://picsum.photos/id/41/600/400',
      title: '医療機関の複雑なシフト管理の最適化事例',
      summary: 'ヘルステックは医療業界特有の複雑なシフト管理に課題を抱えていました。ZenStrategyは専門的なソリューションを提供しました。',
      results: [
        '24時間シフト管理の効率化',
        '資格管理システムの導入による法令遵守の徹底',
        '人材不足対策としての採用・定着化支援',
      ],
    },
    {
      id: 'it-case-2',
      company: 'データシンク',
      industry: 'IT・テクノロジー',
      logo: 'https://picsum.photos/id/42/200/100',
      image: 'https://picsum.photos/id/43/600/400',
      title: 'M&A準備のための人事データ整備事例',
      summary: 'データシンクは企業買収に向けた人事データの整備が必要でした。ZenStrategyはデータクレンジングとデューデリジェンス準備を支援しました。',
      results: [
        '大手テック企業による買収の成功',
        'スムーズなデューデリジェンスプロセス',
        '企業価値の最大化',
      ],
    },
  ];

  // Video testimonials
  const videoTestimonials = [
    {
      id: 'video-1',
      company: 'グロースラボ',
      thumbnail: 'https://picsum.photos/id/44/600/400',
      title: 'グロースラボの人事改革事例',
    },
    {
      id: 'video-2',
      company: 'テックスタート',
      thumbnail: 'https://picsum.photos/id/45/600/400',
      title: 'テックスタートとZenStrategyの取り組み',
    },
    {
      id: 'video-3',
      company: 'イノベート',
      thumbnail: 'https://picsum.photos/id/46/600/400',
      title: 'イノベートの人事変革ストーリー',
    },
  ];

  // Testimonial quotes
  const testimonialQuotes = [
    {
      quote: "ZenStrategyは私たちの成長において欠かせないパートナーです。彼らの人事・労務管理の専門知識により、多くの時間を節約し、より良い経営判断ができるようになりました。",
      author: "田中 誠",
      position: "CFO, データシンク",
      image: "https://picsum.photos/id/47/100/100",
    },
    {
      quote: "ZenStrategyとの協業により、私たちの人事業務は大きく変わりました。彼らのチームは対応が早く、知識が豊富で、本当に私たちの成功を大切にしてくれています。",
      author: "山田 恵子",
      position: "CEO, スタイルショップ",
      image: "https://picsum.photos/id/48/100/100",
    },
    {
      quote: "ZenStrategyなしでのビジネス運営は考えられません。彼らは私たちのチームの重要な一員となり、複雑な人事課題の解決を支援してくれています。",
      author: "鈴木 健太",
      position: "創業者, サービスコネクト",
      image: "https://picsum.photos/id/49/100/100",
    },
  ];

  // Customer logos
  const customerLogos = [
    { name: 'テックグロース', logo: 'https://picsum.photos/id/50/150/50' },
    { name: 'テクノ製造', logo: 'https://picsum.photos/id/51/150/50' },
    { name: 'スタイルショップ', logo: 'https://picsum.photos/id/52/150/50' },
    { name: 'サービスコネクト', logo: 'https://picsum.photos/id/53/150/50' },
    { name: 'ペイファスト', logo: 'https://picsum.photos/id/54/150/50' },
    { name: 'ヘルステック', logo: 'https://picsum.photos/id/55/150/50' },
    { name: 'データシンク', logo: 'https://picsum.photos/id/56/150/50' },
    { name: 'グロースラボ', logo: 'https://picsum.photos/id/57/150/50' },
  ];

  // Sidebar component
  const CustomerSidebar = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-[#2D2D2D]">業種別フィルター</h3>
      <ul className="space-y-2 mb-8">
        <li>
          <button className="flex items-center w-full p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]">
            <span className="mr-2">•</span>
            すべての業種
          </button>
        </li>
        <li>
          <button className="flex items-center w-full p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]">
            <span className="mr-2">•</span>
            製造業
          </button>
        </li>
        <li>
          <button className="flex items-center w-full p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]">
            <span className="mr-2">•</span>
            小売業
          </button>
        </li>
        <li>
          <button className="flex items-center w-full p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]">
            <span className="mr-2">•</span>
            IT・テクノロジー
          </button>
        </li>
        <li>
          <button className="flex items-center w-full p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]">
            <span className="mr-2">•</span>
            金融
          </button>
        </li>
        <li>
          <button className="flex items-center w-full p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]">
            <span className="mr-2">•</span>
            医療・介護
          </button>
        </li>
      </ul>

      <h3 className="text-lg font-semibold mb-4 text-[#2D2D2D]">事例資料ダウンロード</h3>
      <ul className="space-y-3">
        {successStories.slice(0, 3).map((story, index) => (
          <li key={index}>
            <a 
              href={`#${story.id}`}
              className="flex items-start p-2 hover:bg-[#F7F5FF] rounded-md text-[#2D2D2D] hover:text-[#7C5CFF]"
            >
              <div className="w-12 h-12 rounded overflow-hidden mr-3 flex-shrink-0">
                <Image 
                  src={story.logo} 
                  alt={story.company} 
                  width={48} 
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-medium block">{story.title}</span>
                <span className="text-xs text-gray-500">{story.industry}</span>
              </div>
            </a>
          </li>
        ))}
        <li>
          <Button 
            href="/contact-sales" 
            variant="outline" 
            size="sm" 
            className="w-full"
          >
            資料をダウンロード
          </Button>
        </li>
      </ul>
    </div>
  );

  return (
    <ContentLayout
      title="導入事例"
      description="ZenStrategyの人事・労務管理サービスを導入したお客様の成功事例をご紹介します"
      sidebar={<CustomerSidebar />}
    >
      {/* Featured Customer */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <div className="relative h-64 md:h-80">
            <Image
              src={featuredCustomer.image}
              alt={featuredCustomer.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C5CFF]/80 to-transparent flex items-center">
              <div className="px-6 md:px-10 text-white max-w-md">
                <div className="bg-white p-2 rounded-md inline-block mb-4">
                  <Image
                    src={featuredCustomer.logo}
                    alt={featuredCustomer.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">お客様事例: {featuredCustomer.name}</h2>
                <p className="text-white/90 mb-4">人事・労務管理の変革により業務効率と従業員満足度を向上</p>
                <Button href={`#featured-case-study`} variant="primary">
                  事例を読む
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-[#2D2D2D] mb-4">
                  "{featuredCustomer.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-medium text-[#2D2D2D]">{featuredCustomer.author}</p>
                    <p className="text-sm text-gray-500">{featuredCustomer.position}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-[#F7F5FF] p-4 rounded-lg">
                <h3 className="font-semibold text-[#2D2D2D] mb-3">主な成果</h3>
                <ul className="space-y-3">
                  {featuredCustomer.stats.map((stat, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-medium text-[#7C5CFF]">{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#2D2D2D]">導入事例</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-md border border-gray-200 hover:bg-[#F7F5FF]">
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button className="p-2 rounded-md border border-gray-200 hover:bg-[#F7F5FF]">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.slice(0, 6).map((story, index) => (
            <div key={index} id={story.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-1 rounded-md">
                  <Image
                    src={story.logo}
                    alt={story.company}
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium bg-[#F7F5FF] text-[#7C5CFF] px-2 py-1 rounded-full">
                    {story.industry}
                  </span>
                </div>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">{story.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{story.summary}</p>
                <h4 className="font-medium text-[#2D2D2D] mb-2">成果:</h4>
                <ul className="text-sm space-y-1 mb-4">
                  {story.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#7C5CFF] mr-2">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  href={`#${story.id}-details`} 
                  variant="outline" 
                  size="sm"
                  className="w-full flex items-center justify-center"
                >
                  詳細を見る <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button href="/contact-sales" variant="primary">
            資料をダウンロード
          </Button>
        </div>
      </section>
      
      {/* Video Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-12 h-12 bg-[#7C5CFF] rounded-full flex items-center justify-center">
                    <Play size={20} className="text-white ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2D2D2D] mb-1">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonial Quotes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialQuotes.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              <blockquote className="text-[#2D2D2D] mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-[#2D2D2D]">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Customer Logos */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">導入企業</h2>
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {customerLogos.map((customer, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  width={150}
                  height={50}
                  className="object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section>
        <div className="bg-[#F7F5FF] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">あなたの会社も成功事例に</h2>
          <p className="text-[#2D2D2D] mb-6 max-w-2xl mx-auto">
            ZenStrategyの人事・労務管理サービスで、業務効率化と従業員満足度向上を実現しませんか？専門家がお客様のビジネスに最適なソリューションをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact-sales" variant="primary">
              お問い合わせ
            </Button>
            <Button href="/contact-sales?download=true" variant="outline">
              資料をダウンロード
            </Button>
          </div>
        </div>
      </section>
    </ContentLayout>
  );
} 