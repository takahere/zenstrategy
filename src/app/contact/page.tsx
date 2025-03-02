import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'お問い合わせ | ZenStrategy',
  description: 'HR BPaaSサービスについてのご質問やお見積もりのご依頼は、お気軽にお問い合わせください。',
};

export default function ContactPage() {
  return <ContactClient />;
} 