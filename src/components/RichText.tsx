import React from 'react';
import { DocumentRenderer } from '@keystatic/core/renderer';

export default function RichText({ document, className, style }: { document: any, className?: string, style?: React.CSSProperties }) {
  if (!document || !Array.isArray(document)) return null;

  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          paragraph: ({ children, textAlign }) => {
            const s = textAlign ? { ...style, textAlign } : style;
            return className ? <p className={className} style={s}>{children}</p> : <p style={s}>{children}</p>;
          },
          heading: ({ level, children, textAlign }) => {
            const s = textAlign ? { ...style, textAlign } : style;
            if (level === 2) return <h2 className={className} style={s}>{children}</h2>;
            if (level === 3) return <h3 className={className} style={s}>{children}</h3>;
            if (level === 4) return <h4 className={className} style={s}>{children}</h4>;
            return <h2 className={className} style={s}>{children}</h2>;
          },
          blockquote: ({ children }) => {
            return className ? <blockquote className={className} style={style}>{children}</blockquote> : <blockquote style={style}>{children}</blockquote>;
          },
          list: ({ children, type }: { children: React.ReactNode[], type: 'ordered' | 'unordered' }) => {
            const listClass = className ? `${className} rt-list` : 'rt-list';
            const items = children.map((child, i) => <li key={i} className="rt-list-item">{child}</li>);
            return type === 'ordered'
              ? <ol className={listClass} style={style}>{items}</ol>
              : <ul className={listClass} style={style}>{items}</ul>;
          },
        }
      }}
    />
  );
}
