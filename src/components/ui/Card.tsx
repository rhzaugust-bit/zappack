import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'default';
}

const variantStyles = {
  default: 'bg-[var(--color-surface)]',
  elevated: 'bg-[var(--color-surface-elevated)] shadow-lg',
  bordered: 'bg-[var(--color-surface)] border border-[var(--color-border)]',
};

const paddingStyles = {
  none: '',
  default: 'p-10 md:p-12',
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-10',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    variant = 'bordered',
    padding = 'default',
    className = '',
    children,
    ...props
  },
  ref,
) {
  const paddingClass = padding === 'none' ? '' : paddingStyles[padding];

  return (
    <div
      ref={ref}
      className={`rounded-2xl ${variantStyles[variant]} ${paddingClass} ${className} transition-all duration-300 hover:shadow-lg`}
      {...props}
    >
      {children}
    </div>
  );
});
