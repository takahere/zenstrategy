import { Metadata } from 'next';
import HRServiceClient from './hr-service/client';

export const metadata: Metadata = {
  title: 'ZenStrategy - HR BPaaS Service',
  description: '中堅・中小企業やスタートアップ向けのHR BPaaSサービス。人事・労務管理、採用支援、従業員エンゲージメントなど、あらゆるHR業務をワンストップでサポートします。',
};

export default function Home() {
  return <HRServiceClient />;
}
