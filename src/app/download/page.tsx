import { Metadata } from 'next';
import DownloadClient from './client';

export const metadata: Metadata = {
  title: '資料ダウンロード | ZenStrategy',
  description: 'HR BPaaSサービスの詳細資料をダウンロードいただけます。',
};

export default function DownloadPage() {
  return <DownloadClient />;
} 