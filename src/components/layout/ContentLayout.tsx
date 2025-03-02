'use client';

import { ReactNode, useState } from 'react';
import { Filter, X } from 'lucide-react';
import Container from '@/components/shared/Container';

interface ContentLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  sidebar: ReactNode;
}

const ContentLayout = ({ 
  children, 
  title, 
  description, 
  sidebar 
}: ContentLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white py-8 md:py-12">
      <Container>
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-[#2D2D2D] max-w-3xl">{description}</p>
          )}
        </div>

        <div className="lg:hidden mb-6">
          <button
            onClick={toggleSidebar}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-[#2D2D2D] hover:bg-gray-50"
          >
            {isSidebarOpen ? (
              <>
                <X size={18} className="mr-2" /> Close Filters
              </>
            ) : (
              <>
                <Filter size={18} className="mr-2" /> Show Filters
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - desktop (always visible) and mobile (toggleable) */}
          <div 
            className={`
              lg:w-1/4 
              ${isSidebarOpen ? 'block' : 'hidden'} 
              lg:block 
              bg-white 
              p-4 
              rounded-lg 
              border 
              border-gray-200
            `}
          >
            {sidebar}
          </div>

          {/* Main content */}
          <div className="lg:w-3/4">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContentLayout; 