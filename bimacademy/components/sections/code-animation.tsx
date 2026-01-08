'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { heroAnimationCode } from '@/data/code-snippets';
import Prism from 'prismjs';
// Prevent Prism from automatically highlighting code on DOMContentLoaded
// which causes hydration mismatches in Next.js
Prism.manual = true;
import 'prismjs/components/prism-csharp';

interface CodeAnimationProps {
  className?: string;
}

/**
 * CodeAnimation component - Mock VS Code window with auto-scrolling C# code
 * Demonstrates real Revit API code in action
 */
export function CodeAnimation({ className }: CodeAnimationProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <div className={cn('relative w-full h-full', className)}>
      {/* Mock VS Code Window */}
      <div className="relative h-[500px] rounded-lg overflow-hidden border border-border bg-popover shadow-2xl">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-card border-b border-border">
          {/* Traffic lights */}
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#28CA42]" />
          </div>
          {/* Filename */}
          <span className="text-xs text-muted-foreground font-mono ml-2">
            AutoReinforcement.cs
          </span>
        </div>

        {/* Code Content with Auto-Scroll */}
        <div className="relative h-[calc(100%-40px)] overflow-hidden">
          <pre className="h-full p-4 m-0 overflow-hidden">
            <code
              ref={codeRef}
              className="language-csharp block text-sm leading-relaxed animate-scroll"
            >
              {heroAnimationCode}
            </code>
          </pre>

          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-popover to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating "Building..." indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-card/90 backdrop-blur-sm border border-border shadow-lg">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse [animation-delay:0.2s]" />
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse [animation-delay:0.4s]" />
        </div>
        <span className="text-xs text-muted-foreground font-mono">Building...</span>
      </div>
    </div>
  );
}
