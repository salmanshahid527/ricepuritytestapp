import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showTagline?: boolean;
  variant?: 'dark' | 'light';
  className?: string;
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = true,
  variant = 'dark',
  className = '',
  href,
}) => {
  const sizeMap = {
    sm: { px: 34, text: 'text-base', tagline: 'text-[0.6rem]' },
    md: { px: 42, text: 'text-lg', tagline: 'text-[0.65rem]' },
    lg: { px: 56, text: 'text-2xl', tagline: 'text-xs' },
  };

  const currentSize = sizeMap[size];
  const textColor = variant === 'dark' ? 'text-ink' : 'text-white';
  const taglineColor = variant === 'dark' ? 'text-slate' : 'text-[#C9B8D4]';

  const logoContent = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/icon.svg"
        alt="Rice Purity Test Logo"
        width={currentSize.px}
        height={currentSize.px}
        className="flex-shrink-0 rounded-lg"
        priority
      />

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-display font-extrabold ${currentSize.text} ${textColor} leading-tight`}>
            Rice Purity <span className="text-plum">Test</span>
          </span>
          {showTagline && (
            <span className={`font-mono ${currentSize.tagline} tracking-[0.15em] uppercase ${taglineColor} mt-1`}>
              Self-Assessment · 18+
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex hover:opacity-85 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};








