import { Metadata } from 'next';
import Image from 'next/image';
import IndustriesClient from './client';

export const metadata: Metadata = {
  title: '業種別 | ZenStrategy',
  description: '各業界特有の課題に対応した人事・労務管理サービス',
};

export default function IndustriesPage() {
  return <IndustriesClient />;
} 