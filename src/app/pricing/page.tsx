import { Metadata } from 'next';
import PricingClient from './client';

export const metadata: Metadata = {
  title: 'サービス内容 | ZenStrategy',
  description: 'お客様のビジネスに最適な人事・労務管理サービスをご提供します',
};

export default function PricingPage() {
  return <PricingClient />;
} 