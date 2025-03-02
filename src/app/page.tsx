import { Metadata } from 'next';
import HRServiceClient from './hr-service/client';

export const metadata: Metadata = {
  title: 'ZenStrategy - HR BPaaS Service',
  description: '中堅・中小・スタートアップ企業向けのHR BPaaSリーディングカンパニー。 全米でも有数の規模を誇るHRチームと、テック活用による最先端の人事アウトソーシングを実現しています。',
};

export default function Home() {
  return <HRServiceClient />;
}
