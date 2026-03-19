import { Image, FileText, Smartphone } from 'lucide-react';
import { HTMLAttributes } from 'react';

interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'hero' | 'feature' | 'mobile';
  className?: string;
}

export function Placeholder({
  variant = 'hero',
  className = '',
  ...props
}: PlaceholderProps) {
  const getIcon = () => {
    switch (variant) {
      case 'feature':
        return <FileText className="w-8 h-8 text-[var(--color-text-muted)]" />;
      case 'mobile':
        return <Smartphone className="w-12 h-12 text-[var(--color-text-muted)]" />;
      case 'hero':
      default:
        return <Image className="w-16 h-16 text-[var(--color-text-muted)]" />;
    }
  };

  const getHeight = () => {
    switch (variant) {
      case 'feature':
        return 'h-48';
      case 'mobile':
        return 'h-96 w-48 mx-auto'; // Tall aspect ratio
      case 'hero':
      default:
        return 'h-64 md:h-96';
    }
  };

  return (
    <div
      className={`
        w-full rounded-2xl border-2 border-dashed border-[var(--color-border)]
        bg-[var(--color-surface)] flex flex-col items-center justify-center p-6
        transition-colors hover:border-[var(--color-border-hover)]
        ${getHeight()} ${className}
      `}
      {...props}
    >
      <div className="bg-[var(--color-surface-elevated)] p-4 rounded-full mb-4">
        {getIcon()}
      </div>
      <span className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
        {variant === 'hero' ? 'Product Preview' : variant === 'mobile' ? 'Mobile View' : 'Feature Asset'}
      </span>
    </div>
  );
}
