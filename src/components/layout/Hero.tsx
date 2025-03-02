'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValid(false);
      return;
    }
    // Handle form submission
    console.log('Email submitted:', email);
    // Reset form
    setEmail('');
  };

  return (
    <section className="bg-[#F7F5FF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Left content - 60% */}
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Startup Accounting Services for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2D] mb-8">
              We handle your books, taxes, and financial reporting so you can focus on growing your business.
            </p>
            
            {/* Email capture form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <label htmlFor="email" className="sr-only">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your work email"
                    className={`w-full px-4 py-3 border ${
                      isValid ? 'border-gray-300' : 'border-red-500'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]`}
                    required
                  />
                  {!isValid && (
                    <p className="mt-1 text-red-500 text-sm">Please enter a valid email address.</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#7C5CFF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6a4de6] transition-colors"
                >
                  Contact Sales
                </button>
              </div>
            </form>
            
            {/* Demo video link */}
            <Link 
              href="#watch-demo" 
              className="inline-flex items-center text-[#7C5CFF] font-medium hover:underline"
            >
              Watch our demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Right content - 40% */}
          <div className="md:col-span-2 relative">
            <div className="aspect-w-4 aspect-h-3 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/800/600"
                alt="Startup accounting services"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#7C5CFF] hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 