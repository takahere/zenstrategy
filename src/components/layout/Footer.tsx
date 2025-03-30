'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ZenStrategy</h3>
            <p className="text-gray-300 mb-4">
              Modern HR BPaaS services for startups and growing businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/download" className="text-gray-300 hover:text-white">
                  資料ダウンロード
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">法的情報</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white">
                  Cookieポリシー
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-300 hover:text-white">
                  セキュリティ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">cs@zenx.jp</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">050-6883-9326</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">〒150-8512 東京都渋谷区桜丘町26-1 セルリアンタワー 15F</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} ZenStrategy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 