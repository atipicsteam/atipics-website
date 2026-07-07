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
          }
        }
      }}
    />
  );
}
