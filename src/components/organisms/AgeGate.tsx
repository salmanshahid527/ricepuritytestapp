import React from 'react';
import { useRouter } from 'next/navigation';

interface AgeGateProps {
  onConfirm: () => void;
}

export const AgeGate: React.FC<AgeGateProps> = ({ onConfirm }) => {
  const router = useRouter();

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ backgroundColor: 'rgba(34, 26, 43, 0.95)' }}
      >
        <div className="bg-surface rounded-2xl max-w-sm w-full p-6 text-center">
          <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto mb-5">
            <rect width="100" height="100" rx="26" fill="#5B3A72" />
            <rect x="19" y="50" width="62" height="11.5" rx="5.75" fill="#fff" opacity="0.38" />
            <rect x="19" y="50" width="38.4" height="11.5" rx="5.75" fill="#fff" opacity="0.85" />
            <rect x="53.9" y="30" width="7" height="40" rx="3.5" fill="#D98E2B" />
            <circle cx="57.4" cy="26.5" r="7.5" fill="#D98E2B" />
          </svg>

          <h2 className="font-display font-extrabold text-2xl text-ink mb-3">
            This test is for adults only
          </h2>
          <p className="text-slate leading-relaxed mb-6 max-w-[36ch] mx-auto">
            It asks about experiences including alcohol, drugs and sex. You must be 18
            or older to continue.
          </p>

          <div className="flex gap-3">
            <button
              onClick={onConfirm}
              className="flex-1 bg-amber text-ink font-display font-semibold rounded-lg min-h-[46px] hover:brightness-105 transition-all"
            >
              I am 18 or older
            </button>
            <button
              onClick={() => router.push('/')}
              className="flex-1 bg-surface text-ink border border-ink font-display font-semibold rounded-lg min-h-[46px] hover:border-plum hover:text-plum transition-all"
            >
              Take me back
            </button>
          </div>

          <p className="font-mono text-xs text-slate mt-5 max-w-[34ch] mx-auto leading-relaxed">
            We remember this choice on your device only. Nothing is sent to a server.
          </p>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-[1120px] mx-auto px-5">
          <h1 className="font-display font-extrabold text-4xl text-ink mb-2">
            The test
          </h1>
          <p className="text-lg text-slate">A hundred questions, one at a time.</p>
        </div>
      </section>
    </>
  );
};