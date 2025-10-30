export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'AndresTheAnalyst',
    subtitle: 'I’m Andres. I’m a Zootechnician turned Data Analyst, curious about how data can make life, work, and the world a little smarter and more sustainable.',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/AndresTheAnalyst'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },

    ],
    socialLinks: [

        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/andres-felipe-estrada/'
        }
    ],
    hero: {
        title: 'Hi friends! Welcome to my online space where I share what I’m learning and creating!',
        text: "I’m **Andres**, a Data Analyst and Zootechnician with a specialization in Poultry Science and Nutrition. I’ve spent over 9 years working in the field, and now I apply the knowledge I’ve gained to analyze data for companies in the agricultural and livestock sectors. My approach combines curiosity, practical experience, and a focus on actionable insights to help businesses make smarter, data-driven decisions. I have a deep appreciation for quality analysis, meaningful patterns, and using data to solve real-world problems. Feel free to check out some of my projects in <a href='https://github.com/AndresTheAnalyst?tab=repositories'>GitHub</a>.",
        image: {
            src: '/port.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Andres Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
