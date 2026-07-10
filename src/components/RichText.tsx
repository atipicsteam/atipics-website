import React from 'react';
import { DocumentRenderer } from '@keystatic/core/renderer';

export default function RichText({ document, className }: { document: any, className?: string }) {
  if (!document || !Array.isArray(document)) return null;

  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          paragraph: ({ children }) => {
            return className ? <p className={className}>{children}</p> : <p>{children}</p>;
          },
          heading: ({ level, children }) => {
            if (level === 2) return <h2 className={className}>{children}</h2>;
            if (level === 3) return <h3 className={className}>{children}</h3>;
            if (level === 4) return <h4 className={className}>{children}</h4>;
            return <h2 className={className}>{children}</h2>;
          },
          blockquote: ({ children }) => {
            return className ? <blockquote className={className}>{children}</blockquote> : <blockquote>{children}</blockquote>;
          },
        }
      }}
    />
  );
}
