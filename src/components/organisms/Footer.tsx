import React from 'react';
import { Text } from '../atoms/Text';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-8 mt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <Logo size="sm" showText={true} showTagline={false} />
          </Link>
          <Text variant="small" color="muted" className="text-gray-500 text-center">
            © 2025 ricepuritytestapp.com | The Rice Purity Test originated at Rice University
          </Text>
        </div>
      </div>
    </footer>
  );
};
