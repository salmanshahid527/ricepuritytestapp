import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

interface ShareButtonProps {
  platform: 'twitter' | 'facebook' | 'whatsapp' | 'copy';
  score: number;
  onShare: () => void;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  platform,
  score,
  onShare,
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (platform === 'copy') {
      onShare();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      onShare();
    }
  };

  const labels = {
    twitter: 'Twitter',
    facebook: 'Facebook',
    whatsapp: 'WhatsApp',
    copy: copied ? 'Copied!' : 'Copy Link',
  };

  const icons = {
    twitter: 'twitter',
    facebook: 'facebook',
    whatsapp: 'whatsapp',
    copy: 'copy',
  } as const;

  return (
    <Button
      variant="secondary"
      size="md"
      onClick={handleClick}
      className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
    >
      <Icon name={icons[platform]} size="sm" />
      <span>{labels[platform]}</span>
    </Button>
  );
};
