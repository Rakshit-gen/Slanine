'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.pageYOffset > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <Button
        name="to-top"
        onClick={scrollToTop}
        className="fixed bottom-[130px] right-5 z-50 p-2 rounded-full  bg-gradient-to-r from-gray-900 to-black text-white shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="animate-bounce" />
      </Button>
    )
  );
};

export default ScrollToTopButton;
