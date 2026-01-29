'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';
import Prism from 'prismjs';
Prism.manual = true;
import 'prismjs/components/prism-csharp';

interface CodeBlockProps {
  /** Code string to display */
  code: string;
  /** Programming language */
  language?: 'csharp' | 'typescript' | 'javascript' | 'python';
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Optional title (filename, etc.) */
  title?: string;
  /** Additional className */
  className?: string;
}

/**
 * CodeBlock component - Syntax-highlighted code display with copy button
 * Uses Prism.js with VS Code color scheme
 *
 * @example
 * <CodeBlock
 *   code="using Autodesk.Revit.DB;\nvar doc = commandData.Application.ActiveUIDocument.Document;"
 *   language="csharp"
 *   title="RevitCommand.cs"
 *   showLineNumbers
 * />
 */
export function CodeBlock({
  code,
  language = 'csharp',
  showLineNumbers = true,
  title,
  className,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  // Syntax highlighting
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  // Copy to clipboard
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('group relative', className)}>
      {/* Title bar (like VS Code tab) */}
      {title && (
        <div className="flex items-center justify-between rounded-t-md border border-b-0 border-border bg-card px-4 py-2">
          <span className="text-sm text-muted-foreground font-mono">{title}</span>
        </div>
      )}

      {/* Code container */}
      <div className="relative">
        {/* Copy button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'absolute right-2 top-2 h-8 w-8',
            'opacity-0 group-hover:opacity-100 transition-opacity',
            'hover:bg-muted'
          )}
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-[var(--teal-accent)]" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>

        {/* Code block */}
        <pre
          className={cn(
            'code-block overflow-x-auto p-4',
            !title && 'rounded-md',
            title && 'rounded-b-md border border-border'
          )}
        >
          <code
            ref={codeRef}
            className={`language-${language} block ${showLineNumbers ? 'line-numbers' : ''}`}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

// VS Code Dark Theme for Prism.js (inject styles)
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    /* VS Code Dark Theme - Prism.js Override */
    .code-block code[class*="language-"],
    .code-block pre[class*="language-"] {
      color: #D4D4D4;
      background: none;
      text-shadow: none;
      font-family: 'Fira Code', Consolas, Monaco, 'Courier New', monospace;
      font-size: 0.875rem;
      line-height: 1.5;
      direction: ltr;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      tab-size: 2;
      hyphens: none;
    }

    /* Syntax highlighting colors (VS Code) */
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #6A9955; /* Green comment */
    }

    .token.punctuation {
      color: #D4D4D4;
    }

    .token.namespace {
      opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #B5CEA8; /* Light green */
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #CE9178; /* Orange string */
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: #D4D4D4;
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #569CD6; /* Blue keyword */
    }

    .token.function,
    .token.class-name {
      color: #DCDCAA; /* Yellow function */
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: #C586C6; /* Purple */
    }

    /* Line numbers */
    .code-block .line-numbers {
      counter-reset: linenumber;
    }

    .code-block .line-numbers > code {
      counter-increment: linenumber;
    }

    .code-block .line-numbers > code::before {
      content: counter(linenumber);
      position: absolute;
      left: 0;
      width: 2.5rem;
      text-align: right;
      color: #858585;
      user-select: none;
      pointer-events: none;
    }

    .code-block .line-numbers code {
      position: relative;
      padding-left: 3.5rem;
    }
  `;
  document.head.appendChild(style);
}
