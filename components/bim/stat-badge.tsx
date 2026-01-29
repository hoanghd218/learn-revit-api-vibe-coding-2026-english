import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatBadgeProps {
  /** Numeric value or string */
  value: string | number;
  /** Label/description */
  label: string;
  /** Optional icon */
  icon?: LucideIcon;
  /** Color variant */
  variant?: 'default' | 'primary' | 'accent' | 'success';
  /** Additional className */
  className?: string;
}

/**
 * StatBadge component - Displays statistics with prominent numbers
 * Extends shadcn Badge with custom styling for stats
 *
 * @example
 * <StatBadge
 *   value="10+"
 *   label="Years in AEC"
 *   icon={CalendarIcon}
 *   variant="primary"
 * />
 */
export function StatBadge({
  value,
  label,
  icon: Icon,
  variant = 'default',
  className,
}: StatBadgeProps) {
  const variantStyles = {
    default: 'bg-card hover:bg-muted border-border',
    primary: 'bg-[var(--orange-red-accent)]/10 hover:bg-[var(--orange-red-accent)]/20 border-[var(--orange-red-accent)]/30 text-[var(--orange-red-accent)]',
    accent: 'bg-[var(--ocean-blue-accent)]/10 hover:bg-[var(--ocean-blue-accent)]/20 border-[var(--ocean-blue-accent)]/30 text-[var(--ocean-blue-accent)]',
    success: 'bg-[var(--teal-accent)]/10 hover:bg-[var(--teal-accent)]/20 border-[var(--teal-accent)]/30 text-[var(--teal-accent)]',
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        'flex flex-col items-center gap-1 px-6 py-3',
        'transition-all duration-200',
        variantStyles[variant],
        className
      )}
    >
      {/* Icon + Value */}
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5" />}
        <span className="text-2xl font-bold">{value}</span>
      </div>

      {/* Label */}
      <span className="text-xs font-normal text-muted-foreground">{label}</span>
    </Badge>
  );
}
