import { AD_SLOTS_ENABLED } from '@/lib/site';

/**
 * Reserved advertising space. Renders a neutral, fixed-height box only when
 * NEXT_PUBLIC_ADSENSE_SLOTS is set, so a future ad unit fills it without
 * moving content (CLS). Contains no ad code. Rules for placement: never above
 * a page's main answer, and never between a question and its answer.
 */
export function AdSlot({ name, className = '' }: { name: string; className?: string }) {
  if (!AD_SLOTS_ENABLED) return null;
  return <div data-slot-name={name} aria-hidden="true" className={`ad-slot ${className}`} />;
}
