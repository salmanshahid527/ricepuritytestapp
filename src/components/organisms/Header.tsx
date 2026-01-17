import React from 'react';
import Link from 'next/link';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';

interface HeaderProps {
  showProgress?: boolean;
  progress?: number;
  current?: number;
  total?: number;
}

export const Header: React.FC<HeaderProps> = ({
  showProgress = false,
  progress = 0,
  current = 0,
  total = 100,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" showText={true} showTagline={false} href="/" />
          <div className="flex items-center gap-4">
            {showProgress && (
              <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-semibold text-gray-800">{progress}%</div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
                <div className="w-48 sm:w-64 bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500 ease-out rounded-full shadow-sm"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
            {!showProgress && (
              <Link href="/test">
                <Button size="md" variant="primary">
                  Start the Test
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
