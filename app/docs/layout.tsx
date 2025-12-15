import {source} from "../../lib/source"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../layout.config'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template:
      "%s | Apex UI ",
    default: "Apex UI ",
  },
};

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}
    sidebar={{
      defaultOpenLevel:1
    }}
    >
      {children}
    </DocsLayout>
  );
}