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
            if (level === 5) return <h5 className={className} style={s}>{children}</h5>;
            if (level === 6) return <h6 className={className} style={s}>{children}</h6>;
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
          divider: () => <hr className="rt-divider" />,
          image: ({ src, alt, title }: { src: string, alt: string, title: string }) => (
            <img src={src} alt={alt} title={title} className="rt-image" loading="lazy" />
          ),
          table: (props: any) => {
            const head = props.head as { children: React.ReactNode, colSpan?: number, rowSpan?: number }[] | undefined;
            const body = props.body as { children: React.ReactNode, colSpan?: number, rowSpan?: number }[][];
            return (
              <div className="rt-table-wrap">
                <table className="rt-table">
                  {head && (
                    <thead>
                      <tr>{head.map((cell, i) => <th key={i} colSpan={cell.colSpan} rowSpan={cell.rowSpan}>{cell.children}</th>)}</tr>
                    </thead>
                  )}
                  <tbody>
                    {body.map((row, i) => (
                      <tr key={i}>{row.map((cell, j) => <td key={j} colSpan={cell.colSpan} rowSpan={cell.rowSpan}>{cell.children}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          },
        },
        inline: {
          link: ({ href, children }: { href: string, children: React.ReactNode }) => (
            <a href={href} className="rt-link" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>{children}</a>
          ),
        },
      }}
    />
  );
}
