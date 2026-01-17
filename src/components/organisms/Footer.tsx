import React from 'react';
import { Text } from '../atoms/Text';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-6 mt-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-3">
          <Link href="/" className="hover:scale-110 transition-transform duration-300">
            <Logo size="sm" showText={true} showTagline={false} />
          </Link>
          <nav className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              About
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Terms of Service
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
          <Text variant="small" color="muted" className="text-gray-500 text-center">
            © 2026 ricepuritytestapp.com | The Rice Purity Test originated at Rice University
          </Text>
        </div>
      </div>
    </footer>
  );
};
