import { LineChartIcon, UserRoundPlusIcon, MailPlusIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Ikaze",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Ihuriro",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Ubumwe Solutions",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Agaciro",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Inzozi Tech",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Intambwe",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Build Your Subscriber List",
        description: "Easily import or add subscribers to your email lists, segmenting them for targeted communication.",
        icon: UserRoundPlusIcon,
    },
    {
        title: "Launch Email Campaigns",
        description: "Craft and send engaging email campaigns with customizable templates and scheduling options.",
        icon: MailPlusIcon,
    },
    {
        title: "Analyze Campaign Performance",
        description: "Access detailed analytics on email opens, clicks, and conversions to optimize future campaigns.",
        icon: LineChartIcon,
    },
] as const;


export const FEATURES = [
    {
        title: "Multi-Tenant Architecture",
        description: "Enable multiple companies to manage their email lists and SMTP settings securely within a single platform.",
    },
    {
        title: "Custom Email Templates",
        description: "Create and customize email templates for different campaigns, allowing companies to maintain brand consistency.",
    },
    {
        title: "Subscriber Management",
        description: "Easily add, edit, and manage subscriber lists for each company, ensuring efficient communication.",
    },
    {
        title: "Automated Email Campaigns",
        description: "Set up automated email sequences based on subscriber behavior and interactions for effective marketing.",
    },
    {
        title: "Analytics Dashboard",
        description: "Gain insights into email performance with advanced analytics, including open rates, click-through rates, and subscriber engagement.",
    },
    {
        title: "Segmentation and Targeting",
        description: "Segment subscribers based on various criteria to send targeted messages for higher engagement.",
    },
    {
        title: "A/B Testing",
        description: "Test different email versions to determine the most effective messaging and design for your audience.",
    },
    {
        title: "Link Tracking",
        description: "Track links in emails to measure engagement and effectiveness of content shared within campaigns.",
    },
    {
        title: "Compliance and Security",
        description: "Ensure all communications comply with regulations and provide secure access to user data.",
    },
    {
        title: "Integration with Third-Party Services",
        description: "Seamlessly integrate with CRM and other marketing tools to enhance functionality and streamline workflows.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Jean-Pierre Ndoli",
        username: "@jpndoli",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        review: "Zap Sendify has transformed how we communicate with our clients. The automation features are a game-changer for our marketing strategy!"
    },
    {
        name: "Diane Umutoni",
        username: "@dianeumutoni",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        review: "The platform is easy to use and set up. I love the customizable templates. However, I wish there were more integrations available."
    },
    {
        name: "Eric Nshimiyimana",
        username: "@ericnshimiyimana",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        review: "We've been able to significantly increase our open rates thanks to the advanced analytics. Zap Sendify is a must-have for any business!"
    },
    {
        name: "Amina Mukamurera",
        username: "@aminamukamurera",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        review: "Great platform for managing our email campaigns. The segmentation feature helps us target the right audience effectively."
    },
    {
        name: "Olivier Munyaneza",
        username: "@oliviermunyaneza",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        review: "I appreciate the ability to track link performance directly in our emails. This feature has helped us refine our marketing efforts."
    },
    {
        name: "Chantal Niyonsaba",
        username: "@chantalniyonsaba",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        review: "A solid email marketing tool. It's user-friendly, but I hope they introduce more design options in the future."
    },
    {
        name: "Eric Kayitesi",
        username: "@erickayitesi",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        review: "Zap Sendify has streamlined our email communication process. The customer support is also excellent!"
    },
    {
        name: "Solange Uwase",
        username: "@solangeuwase",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4,
        review: "I love the automated campaigns feature. It saves me so much time while keeping our subscribers engaged."
    },
    {
        name: "Alain Mugenzi",
        username: "@alainmugenzi",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        review: "This app has been a game changer for our marketing team. The performance metrics are detailed and insightful."
    },
] as const;

