import React from 'react';
import { DocumentRenderer } from '@keystatic/core/renderer';

export default function RichText({ document, className, style }: { document: any, className?: string, style?: React.CSSProperties }) {
  if (!document || !Array.isArray(document)) return null;

  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          paragraph: ({ children }) => {
            return className ? <p className={className} style={style}>{children}</p> : <p style={style}>{children}</p>;
          },
          heading: ({ level, children }) => {
            if (level === 2) return <h2 className={className} style={style}>{children}</h2>;
            if (level === 3) return <h3 className={className} style={style}>{children}</h3>;
            if (level === 4) return <h4 className={className} style={style}>{children}</h4>;
            return <h2 className={className} style={style}>{children}</h2>;
          },
          blockquote: ({ children }) => {
            return className ? <blockquote className={className} style={style}>{children}</blockquote> : <blockquote style={style}>{children}</blockquote>;
          },
        }
      }}
    />
  );
}
