'use client';

import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 bg-[#7C5CFF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg mb-6">
              ZenStrategy is a modern accounting firm built specifically for startups and growing businesses. We combine technology and expertise to deliver financial clarity and peace of mind.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced accountants and financial experts work closely with you to understand your business needs and provide tailored solutions that help you make informed decisions.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-sm">Businesses served</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">98%</h3>
                <p className="text-sm">Client retention</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">$2B+</h3>
                <p className="text-sm">Managed annually</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-sm">Expert support</p>
              </div>
            </div>
          </div>
          
          {/* Right content */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/id/20/600/800"
                alt="Our team at work"
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-white opacity-20 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 