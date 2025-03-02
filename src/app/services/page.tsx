import { redirect } from 'next/navigation';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import ProductLayout from '@/components/layout/ProductLayout';
import { ArrowRight, CheckCircle2, Clock, DollarSign, FileText, PieChart, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Services | ZenStrategy',
  description: 'Comprehensive accounting and financial services for startups and growing businesses',
};

export default function ServicesPage() {
  redirect('/');
} 