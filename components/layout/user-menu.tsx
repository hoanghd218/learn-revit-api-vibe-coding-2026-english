'use client';

import { useAuth } from '@/lib/auth/auth-context';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, CreditCard, BookOpen, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * UserMenu Component - Custom dropdown menu triggered by avatar
 * Custom implementation replacing Clerk UserButton
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export function UserMenu() {
  const { signOut, user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const menuItems = [
    {
      href: '/profile',
      label: 'Profile',
      icon: User,
    },
    {
      href: '/affiliate',
      label: 'Affiliate',
      icon: CreditCard,
    },
    {
      href: '/courses',
      label: 'My Courses',
      icon: BookOpen,
    },
  ];

  // Generate initials from user name
  const getInitials = () => {
    if (user?.fullName) {
      return user.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    if (user?.userName) {
      return user.userName.slice(0, 2).toUpperCase();
    }
    return 'U';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="outline-none focus-visible:ring-2 focus-visible:ring-coral-accent rounded-full transition-transform active:scale-95"
          aria-label="User menu"
        >
          {user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt="Profile"
              className="h-9 w-9 rounded-full border-2 border-coral-accent/50 object-cover"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-coral-accent/20 border-2 border-coral-accent/50 flex items-center justify-center text-coral-accent text-sm font-semibold">
              {getInitials()}
            </div>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56 bg-popover border border-border shadow-lg"
      >
        {/* User info section */}
        <div className="px-3 py-2 border-b border-border">
          <p className="text-sm font-medium text-popover-foreground truncate">
            {user?.fullName || user?.userName || 'User'}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {user?.email}
          </p>
        </div>

        {menuItems.map((item) => (
          <DropdownMenuItem
            key={item.href}
            onClick={() => router.push(item.href)}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 cursor-pointer',
              'text-sm text-popover-foreground',
              'hover:bg-accent hover:text-accent-foreground',
              'focus:bg-accent focus:text-accent-foreground',
              'transition-colors duration-150',
              'data-[variant=destructive]:hover:bg-destructive/10',
              'data-[variant=destructive]:focus:bg-destructive/10'
            )}
          >
            <item.icon className="h-4 w-4 text-muted-foreground group-hover/dropdown-menu-item:text-coral-accent" />
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator className="my-1.5 bg-border" />

        <DropdownMenuItem
          onClick={handleSignOut}
          variant="destructive"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 cursor-pointer',
            'text-sm',
            'hover:bg-destructive/10 hover:text-destructive',
            'focus:bg-destructive/10 focus:text-destructive',
            'transition-colors duration-150'
          )}
        >
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
