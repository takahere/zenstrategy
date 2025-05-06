import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'オンライン採用相談 | ZenStrategy',
  description: 'HR BPaaSサービスについてのご質問やお見積もりのご依頼は、お気軽にお問い合わせください。',
};

export default function ContactPage() {
  return <ContactClient />;
} 