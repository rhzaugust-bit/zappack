import { HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'surface' | 'hero';
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { variant = 'default', className = '', children, ...props },
  ref,
) {
  const variants = {
    default: 'bg-transparent',
    surface: 'bg-[var(--color-surface)]',
    hero: 'pt-32 pb-24 md:pt-48 md:pb-32', // Tighter top padding for hero to account for fixed header if needed, or just generous spacing
  };

  // Base vertical spacing for non-hero sections
  const baseSpacing = variant === 'hero' ? '' : 'py-24 md:py-32';

  return (
    <section
      ref={ref}
      className={`w-full ${baseSpacing} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
});
