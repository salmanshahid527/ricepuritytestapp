import React from 'react';
import { Text } from '../atoms/Text';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-8 mt-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Text variant="small" color="muted" className="text-gray-500">
          © 2025 ricepuritytestapp.com | The Rice Purity Test originated at Rice University
        </Text>
      </div>
    </footer>
  );
};
