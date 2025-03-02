'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#2D2D2D]">
              ZenStrategy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/industries" className="text-[#2D2D2D] hover:text-[#7C5CFF] px-3 py-2 text-sm font-medium">
              業種別
            </Link>
            <Link href="/customers" className="text-[#2D2D2D] hover:text-[#7C5CFF] px-3 py-2 text-sm font-medium">
              導入事例
            </Link>
            <Link href="/pricing" className="text-[#2D2D2D] hover:text-[#7C5CFF] px-3 py-2 text-sm font-medium">
              サービス内容
            </Link>
            <Link href="/download" className="text-[#2D2D2D] hover:text-[#7C5CFF] px-3 py-2 text-sm font-medium">
              資料ダウンロード
            </Link>
          </nav>

          {/* Secondary Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-[#7C5CFF] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6a4de6]"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2D2D2D] hover:text-[#7C5CFF] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              href="/industries" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#2D2D2D] hover:text-[#7C5CFF]"
              onClick={toggleMenu}
            >
              業種別
            </Link>
            <Link 
              href="/customers" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#2D2D2D] hover:text-[#7C5CFF]"
              onClick={toggleMenu}
            >
              導入事例
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#2D2D2D] hover:text-[#7C5CFF]"
              onClick={toggleMenu}
            >
              サービス内容
            </Link>
            <Link 
              href="/download" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#2D2D2D] hover:text-[#7C5CFF]"
              onClick={toggleMenu}
            >
              資料ダウンロード
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#7C5CFF] text-white hover:bg-[#6a4de6]"
              onClick={toggleMenu}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 