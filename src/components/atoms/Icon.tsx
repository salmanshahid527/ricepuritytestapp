type IconName =
  | 'arrow-right'
  | 'check'
  | 'copy'
  | 'share'
  | 'x'
  | 'facebook'
  | 'whatsapp'
  | 'reset'
  | 'list'
  | 'chart'
  | 'lock'
  | 'clock'
  | 'book'
  | 'info';

/** Stroke icons are 24x24 outlines; brand icons are filled. All are decorative (aria-hidden). */
const STROKE: Partial<Record<IconName, string>> = {
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  check: 'M5 13l4 4L19 7',
  copy: 'M9 9h10v10H9zM5 15V5h10',
  share: 'M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6',
  reset: 'M4 4v6h6M20 12a8 8 0 01-14.9 4M4.3 10A8 8 0 0120 12',
  list: 'M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01',
  chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  lock: 'M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 017 0v3',
  clock: 'M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  book: 'M4 5a2 2 0 012-2h14v16H6a2 2 0 00-2 2zM4 5v16',
  info: 'M12 11v5M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
};

const FILL: Partial<Record<IconName, string>> = {
  x: 'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.2h1.7L7.4 4.7H5.57z',
  facebook: 'M14 8.5V6.7c0-.8.2-1.3 1.4-1.3H17V2.2c-.3 0-1.3-.2-2.5-.2C12 2 10.5 3.5 10.5 6.2v2.3H8V12h2.5v10H14V12h2.7l.4-3.5z',
  whatsapp:
    'M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z',
};

export function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  const fill = FILL[name];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth={fill ? undefined : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={fill ?? STROKE[name]} />
    </svg>
  );
}
