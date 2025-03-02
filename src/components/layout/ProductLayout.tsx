'use client';

import { ReactNode, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

interface ProductLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  showChat?: boolean;
}

const ProductLayout = ({ 
  children, 
  title, 
  description, 
  showChat = true 
}: ProductLayoutProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="bg-white py-8 md:py-12">
      <Container>
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-[#2D2D2D] max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        <div className="relative">
          {children}
        </div>

        {/* Sticky support chat button */}
        {showChat && (
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={toggleChat}
              className="bg-[#7C5CFF] text-white p-4 rounded-full shadow-lg hover:bg-[#6a4de6] transition-colors"
              aria-label="Open support chat"
            >
              <MessageCircle size={24} />
            </button>

            {/* Chat popup */}
            {isChatOpen && (
              <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-[#7C5CFF] text-white p-4 flex justify-between items-center">
                  <h3 className="font-medium">Support Chat</h3>
                  <button 
                    onClick={toggleChat}
                    className="text-white hover:text-gray-200"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="p-4 h-64 bg-gray-50">
                  <p className="text-[#2D2D2D] mb-4">
                    How can we help you today?
                  </p>
                  <div className="mt-auto">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full mt-2"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductLayout; 