import React from 'react';
import { Heading } from '../atoms/Heading';
import { ShareButton } from '../molecules/ShareButton';
import { shareToTwitter, shareToFacebook, shareToWhatsApp, copyToClipboard } from '@/lib/utils';

interface SharePanelProps {
  score: number;
}

export const SharePanel: React.FC<SharePanelProps> = ({
  score,
}) => {
  const handleShare = async (platform: 'twitter' | 'facebook' | 'whatsapp' | 'copy') => {
    switch (platform) {
      case 'twitter':
        shareToTwitter(score);
        break;
      case 'facebook':
        shareToFacebook();
        break;
      case 'whatsapp':
        shareToWhatsApp(score);
        break;
      case 'copy':
        await copyToClipboard(score);
        break;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 animate-fade-in shadow-lg">
      <Heading size="2xl" className="mb-6 text-center">
        Share Your Score
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ShareButton
          platform="copy"
          score={score}
          onShare={() => handleShare('copy')}
        />
        <ShareButton
          platform="twitter"
          score={score}
          onShare={() => handleShare('twitter')}
        />
        <ShareButton
          platform="facebook"
          score={score}
          onShare={() => handleShare('facebook')}
        />
        <ShareButton
          platform="whatsapp"
          score={score}
          onShare={() => handleShare('whatsapp')}
        />
      </div>
    </div>
  );
};
