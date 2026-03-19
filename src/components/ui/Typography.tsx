import { HTMLAttributes, forwardRef, ElementType } from 'react';

// Headings
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  variant?: 'default' | 'primary';
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(
    { level = 2, variant = 'default', className = '', children, ...props },
    ref,
  ) {
    const Tag = `h${level}` as ElementType;

    const sizes = {
      1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight', // Reduced from 5xl/7xl
      2: 'text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight', // Reduced from 3xl/5xl
      3: 'text-2xl md:text-3xl font-bold mb-6 leading-snug',
      4: 'text-xl font-bold mb-4 leading-normal',
    };

    const colors = {
      default: 'text-[var(--color-text)]',
      primary: 'text-[var(--color-primary-light)]',
    };

    return (
      <Tag
        ref={ref}
        className={`${sizes[level]} ${colors[variant]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

// Text
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'secondary' | 'muted' | 'lead';
  size?: 'sm' | 'base' | 'lg' | 'xl';
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { variant = 'default', size = 'base', className = '', children, ...props },
  ref,
) {
  const variants = {
    default: 'text-[var(--color-text)] leading-relaxed',
    secondary: 'text-[var(--color-text-secondary)] leading-relaxed',
    muted: 'text-[var(--color-text-muted)] leading-relaxed',
    lead: 'text-[var(--color-text-secondary)] text-xl md:text-2xl leading-relaxed',
  };

  const sizesMap = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  // If variant is lead, size is ignored in favor of lead styles
  const sizeClass = variant === 'lead' ? '' : sizesMap[size];

  return (
    <p
      ref={ref}
      className={`${variants[variant]} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});
