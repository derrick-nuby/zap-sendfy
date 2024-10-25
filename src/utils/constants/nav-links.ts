import { MailIcon, TrendingUpIcon, UsersIcon, SettingsIcon, NewspaperIcon, HelpCircleIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "/features",
        menu: [
            {
                title: "Email Campaigns",
                tagline: "Create and send custom email campaigns.",
                href: "/features/email-campaigns",
                icon: MailIcon,
            },
            {
                title: "Audience Segmentation",
                tagline: "Organize subscribers into targeted segments.",
                href: "/features/audience-segmentation",
                icon: UsersIcon,
            },
            {
                title: "Performance Analytics",
                tagline: "Track engagement and view detailed analytics.",
                href: "/features/performance-analytics",
                icon: TrendingUpIcon,
            },
            {
                title: "Customizable Templates",
                tagline: "Use pre-built templates or create your own.",
                href: "/features/custom-templates",
                icon: SettingsIcon,
            },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
