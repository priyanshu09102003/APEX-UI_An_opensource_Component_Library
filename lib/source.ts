import { docs } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  // Icon configuration for the new API
  icon(icon) {
    if (!icon) {
      // Default icon if none specified
      return createElement(icons.BookOpen);
    }
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
    // Fallback if icon name doesn't exist in lucide-react
    return createElement(icons.FileText);
  },
});