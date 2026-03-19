import { HTMLAttributes, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container(
    { size = 'default', className = '', children, ...props },
    ref,
  ) {
    const sizes = {
      default: 'max-w-7xl', // Replaces var(--container-max) which was ~1200px
      narrow: 'max-w-4xl',  // Replaces var(--container-narrow) which was ~800px
    };

    return (
      <div
        ref={ref}
        className={`w-full mx-auto px-4 sm:px-6 md:px-8 ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);
