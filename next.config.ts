import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({});

const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx" , "js" , "jsx", "md", "mdx"],
    outputFileTracingIncludes:{
        "/**":["components/apexUi/**/*"]
    },
    async headers(){
        return [
            {
                source:"/r/:path*",
                headers:[
                    {
                        key:"Cache-Control",
                        value: "public, max-age-31536000, immutable"
                    }
                ]
            }
        ]
    },
    reactCompiler: true,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ferf1mheo22r9ira.public.blob.vercel-storage.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
  
} as NextConfig;

export default withMDX(nextConfig);
