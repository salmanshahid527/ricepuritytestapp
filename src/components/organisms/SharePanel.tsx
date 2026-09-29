'use client';

import { useState } from 'react';
import { Icon } from '../atoms/Icon';
import { shareToTwitter, shareToFacebook, shareToWhatsApp, copyToClipboard } from '@/lib/utils';

const btn =
  'btn btn-secondary w-full justify-start gap-3 px-4 text-[0.9375rem] sm:justify-center';

export function SharePanel({ score }: { score: number }) {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle');

  const copy = async () => {
    const ok = await copyToClipboard(score);
    setCopied(ok ? 'ok' : 'fail');
    window.setTimeout(() => setCopied('idle'), 2500);
  };

  return (
    <section aria-labelledby="share-heading" className="card p-6 sm:p-8">
      <h2 id="share-heading" className="font-display text-h2 font-semibold text-ink">
        Share Your Score
      </h2>
      <p className="mt-1 text-small text-ink-3">Shares only your number, never your answers.</p>
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <button type="button" onClick={copy} className={btn}>
          <Icon name={copied === 'ok' ? 'check' : 'copy'} className="h-5 w-5 text-brand" />
          {copied === 'ok' ? 'Copied!' : 'Copy text'}
        </button>
        <button type="button" onClick={() => shareToTwitter(score)} className={btn}>
          <Icon name="x" className="h-4 w-4" /> X (Twitter)
        </button>
        <button type="button" onClick={() => shareToWhatsApp(score)} className={btn}>
          <Icon name="whatsapp" className="h-5 w-5 text-[#128C4B]" /> WhatsApp
        </button>
        <button type="button" onClick={() => shareToFacebook()} className={btn}>
          <Icon name="facebook" className="h-5 w-5 text-[#1877F2]" /> Facebook
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-3 min-h-[1.25rem] text-xs text-ink-3">
        {copied === 'ok' && 'Copied to your clipboard.'}
        {copied === 'fail' && 'Copying isn’t available in this browser. Try a screenshot instead.'}
      </p>
    </section>
  );
}
