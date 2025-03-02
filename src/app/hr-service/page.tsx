import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'HR BPaaS | ZenStrategy',
  description: '中堅・中小企業やスタートアップ向けのHR BPaaSサービス。人事・労務管理、採用支援、従業員エンゲージメントなど、あらゆるHR業務をワンストップでサポートします。',
};

export default function HRServicePage() {
  redirect('/');
} 