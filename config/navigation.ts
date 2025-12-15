export interface NavItem {
    id: string | number;
    title: string;
    href: string;
    description?: string;
    count?: number | string;
    isComingSoon?: boolean;
    isNew?: boolean;
    isLab?: boolean;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const navigationSections: NavSection[] = [
    {
        title: "Get Started",
        items: [
            {
                id: "intro",
                title: "Installation",
                href: "/docs",
                description: "Introduction and Usage guidelines",
            },
        ],
    },
    {
        title: "Latest",
        items: [
            {
                id: "action-search-bar",
                title: "Action Search Bar",
                href: "/docs/components/action-search-bar",
                description: "Command action search bar",
                isNew: true,
            },
            {
                id: "avatar-picker",
                title: "Avatar Picker",
                href: "/docs/components/avatar-picker",
                isNew: true,
            },
            {
                id: "beams-background",
                title: "Beams Background",
                href: "/docs/components/beams-background",
                isNew: true,
            },
            {
                id: "background-circles",
                title: "Background Circles",
                href: "/docs/components/background-circles",
            },
            {
                id: "background-paths",
                title: "Background Paths",
                href: "/docs/components/background-paths",
            },
            {
                id: "bento-grid",
                title: "Bento Grid",
                href: "/docs/components/bento-grid",
                isNew: true,
            },
            {
                id: "checkout-interaction",
                title: "Checkout Interaction",
                href: "/docs/components/checkout-interaction",
            },
            {
                id: "currency-transfer",
                title: "Currency Transfer",
                href: "/docs/components/currency-transfer",
            },
            {
                id: "faq-component",
                title: "Faq",
                href: "/docs/components/faq",
            },
            {
                id: "hand-written-svg",
                title: "Hand Written SVG",
                href: "/docs/components/hand-written-title",
            },
            {
                id: "shapes-hero",
                title: "Shapes Hero",
                href: "/docs/components/hero-geometric",
                isNew: true,
            },
            {
                id: "particle-button",
                title: "Particle Button",
                href: "/docs/components/particle-button",
            },
            {
                id: "particles-background",
                title: "Background Particles",
                href: "/docs/components/particles-background",
            },
            {
                id: "toolbar",
                title: "Toolbar",
                href: "/docs/components/toolbar",
            },
        ],
    },
    {
        title: "Components",
        items: [
            {
                id: 1,
                title: "AI Input",
                href: "/docs/components/ai-input",
                description: "Modern AI chat interface components",
                count: 16,
            },
            {
                id: 2,
                title: "Alerts",
                href: "/docs/components/alert",
                description: "Alert components and layouts",
                count: 7,
            },
            {
                id: 3,
                title: "Button",
                href: "/docs/components/button",
                description: "Interactive button components with animations",
                count: 10,
            },
            {
                id: 4,
                title: "Card",
                href: "/docs/components/card",
                description: "Versatile card components and layouts",
                count: 7,
            },
            {
                id: 5,
                title: "Input",
                href: "/docs/components/input",
                description: "Input components with various styles",
                count: 10,
            },
            {
                id: 6,
                title: "List",
                href: "/docs/components/list",
                description: "List components and layouts",
                count: 6,
            },
            {
                id: 7,
                title: "Pricing",
                href: "/docs/components/pricing",
                description: "Pricing components and layouts",
                count: 4,
                isNew: true,
            },
            {
                id: 8,
                title: "Profile",
                href: "/docs/components/profile",
                description: "Profile components and layouts",
                count: 5,
                isNew: true,
            },
            {
                id: 9,
                title: "Text",
                href: "/docs/components/text",
                description: "Typography and text animation components",
                count: 6,
                isNew: true,
            },
        ],
    },
    {
        title: "Hooks",
        items: [
            {
                id: "use-tags",
                title: "Use Tags",
                href: "/docs/hooks/use-tags",
            },
            {
                id: "use-click-outside",
                title: "Use Click Outside",
                href: "/docs/hooks/use-click-outside",
            },
            {
                id: "use-auto-resize",
                title: "Use Auto Resize Textarea",
                href: "/docs/hooks/use-auto-resize-textarea",
            },
            {
                id: "use-file-input",
                title: "Use File Input",
                href: "/docs/hooks/use-file-input",
            },
        ],
    },
    {
        title: "Blocks",
        items: [
            {
                id: "ai-card-gen",
                title: "AI Card Generation",
                href: "/docs/blocks/ai-card-generation",
                isLab: true,
            },
            {
                id: "ai-chat",
                title: "AI Chat",
                href: "/docs/blocks/ai-chat",
                isLab: true,
            },
            {
                id: "auth-basic",
                title: "Auth Basic",
                href: "/docs/blocks/auth-basic",
                isLab: true,
            },
            {
                id: "dashboard",
                title: "Dashboard",
                href: "/docs/blocks/dashboard",
                isLab: true,
            },
            {
                id: "minimal-shop",
                title: "Minimal Shop",
                href: "/docs/blocks/minimal-shop",
                isLab: true,
            },
        ],
    },
];