import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

interface ButtonAsButton
  extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary)]',
  secondary:
    'bg-[var(--color-surface-elevated)] text-[var(--color-text)] hover:bg-[var(--color-border)] border border-[var(--color-border)]',
  ghost:
    'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]',
  outline:
    'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:border-[var(--color-border-hover)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg font-semibold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className = '',
      ...rest
    } = props;

    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-base)] disabled:opacity-50 disabled:cursor-not-allowed';

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
      fullWidth ? 'w-full' : ''
    } ${className}`;

    if ('href' in props && props.href) {
      return (
        <Link href={props.href} className={classes}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  },
);
