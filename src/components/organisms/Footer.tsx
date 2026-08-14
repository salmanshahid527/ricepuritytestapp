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
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-sm">
            <Link 
              href="/test" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Take the Test
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/rice-purity-test-score" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Score Guide
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Blog
            </Link>
            <span className="text-gray-300">|</span>
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
              <span className="text-gray-300">|</span>
            <Link 
              href="/cookies" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Cookies
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/disclaimer" 
              className="text-gray-600 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              Disclaimer   
            </Link>
          </nav>
          <div className="text-center space-y-2">
            <Text variant="small" color="muted" className="text-gray-500">
              © 2026 ricepuritytestapp.com | The Rice Purity Test originated at Rice University
            </Text>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
              <span>Email: <a href="mailto:contact@ricepuritytestapp.com" className="text-green-500 hover:underline">contact@ricepuritytestapp.com</a></span>
              <span>•</span>
              <span>For press inquiries: <a href="mailto:press@ricepuritytestapp.com" className="text-green-500 hover:underline">press@ricepuritytestapp.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
