import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'primary' | 'secondary' | 'quiet';
type Size = 'md' | 'lg';

const classes = (variant: Variant, size: Size, extra = '') =>
  ['btn', `btn-${variant}`, size === 'lg' ? 'btn-lg' : '', extra].filter(Boolean).join(' ');

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant;
  size?: Size;
}

/** An action. For navigation use ButtonLink so it stays a real link. */
export function Button({ variant = 'primary', size = 'md', className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={classes(variant, size, className)} {...props} />;
}

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
}

/** A link styled as a button (never a <button> nested inside an <a>). */
export function ButtonLink({ variant = 'primary', size = 'md', className, ...props }: ButtonLinkProps) {
  return <Link className={classes(variant, size, className)} {...props} />;
}
