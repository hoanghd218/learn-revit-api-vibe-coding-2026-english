import Link from 'next/link';
import { Home } from 'lucide-react';

/**
 * 404 page for invalid course IDs
 */
export default function CourseNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Course Not Found</h1>
        <p className="text-muted-foreground">
          The course you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--orange-red-accent)] text-white hover:bg-[var(--orange-red-accent)]/90 transition-colors"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
