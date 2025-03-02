'use client';

import Image from 'next/image';

const LogoShowcase = () => {
  // Sample company logos
  const companies = [
    { name: 'Company 1', logo: 'https://picsum.photos/id/1/200/100' },
    { name: 'Company 2', logo: 'https://picsum.photos/id/2/200/100' },
    { name: 'Company 3', logo: 'https://picsum.photos/id/3/200/100' },
    { name: 'Company 4', logo: 'https://picsum.photos/id/4/200/100' },
    { name: 'Company 5', logo: 'https://picsum.photos/id/5/200/100' },
    { name: 'Company 6', logo: 'https://picsum.photos/id/6/200/100' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-lg text-[#2D2D2D]">
            Join hundreds of businesses that rely on our accounting services
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={company.logo}
                alt={company.name}
                width={150}
                height={75}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase; 