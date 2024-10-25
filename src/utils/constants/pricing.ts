export const PLANS = [
    {
        name: "Free",
        info: "For individuals sending limited emails",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "200 Subscribers" },
            { text: "200 emails per week", tooltip: "You can send 200 emails every week." },
            { text: "3 segments only", tooltip: "Organize your subscribers into segments for targeted emails." },
            { text: "Customizable email templates", tooltip: "Use community-submitted templates for your emails." },
            { text: "Basic tracking", tooltip: "Track opens, but detailed analytics are not supported." },
            { text: "Community support", tooltip: "Get answers to your questions from other users." },
            { text: "Basic analytics", tooltip: "View basic statistics on your emails." },
            { text: "Sendify Watermark", tooltip: "To Remove watermark go Pro" },
        ],
        btn: {
            text: "Start for free",
            href: "/auth/sign-up?plan=free",
            variant: "default",
        }
    },
    {
        name: "Pro",
        info: "For small businesses and marketers",
        price: {
            monthly: 14,
            yearly: Math.round(14 * 12 * (1 - 0.15)),
        },
        features: [
            { text: "700 Subscribers" },
            { text: "2,100 emails per week", tooltip: "Send up to 2,100 emails every week." },
            { text: "Customizable email templates", tooltip: "Create and customize your email designs." },
            { text: "Advanced tracking", tooltip: "Track opens and clicks on your emails." },
            { text: "Real-time analytics", tooltip: "View statistics on user engagement." },
            { text: "Priority support", tooltip: "Get 24/7 support via chat." },
            { text: "Basic AI suggestions", tooltip: "Receive basic AI-generated suggestions for optimizing emails." },
            { text: "Dedicated reporting dashboard", tooltip: "Access a dashboard for performance metrics." },
            { text: "Multiple user accounts", tooltip: "Invite team members to manage your campaigns." },
        ],
        btn: {
            text: "Get started",
            href: "/auth/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "Business",
        info: "For large orgs and advanced users",
        price: {
            monthly: 49, // Premium monthly price
            yearly: Math.round(49 * 12 * (1 - 0.20)), // Yearly price with discount
        },
        features: [
            { text: "2000 Subscribers" },
            { text: "Unlimited emails per week", tooltip: "Send as many emails as needed." },
            { text: "Unlimited segments", tooltip: "Create unlimited segments for targeted campaigns." },
            { text: "Advanced tracking", tooltip: "Track unlimited opens and clicks." },
            { text: "Comprehensive analytics", tooltip: "Access detailed analytics for all emails." },
            { text: "Dedicated account manager", tooltip: "Get priority support from a dedicated team." },
            { text: "Unlimited AI suggestions", tooltip: "Receive unlimited AI-generated suggestions for optimizing emails." },
            { text: "Customizable automation workflows", tooltip: "Create automated email campaigns." },
            { text: "Integration with other tools", tooltip: "Connect with various tools to enhance your email campaigns." },
        ],
        btn: {
            text: "Contact team",
            href: "/auth/sign-up?plan=business",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Send emails",
        tooltip: "Send your desired number of emails per month.",
    },
    {
        text: "Track opens and clicks",
        tooltip: "Track engagement metrics for your email campaigns.",
    },
    {
        text: "Analytics dashboard",
        tooltip: "View statistics on your email performance.",
    },
    {
        text: "Manage segments",
        tooltip: "Organize your emails with subscriber segments.",
    },
    {
        text: "Community support",
        tooltip: "Access community support for troubleshooting.",
    },
    {
        text: "Priority support",
        tooltip: "Get priority assistance from our support team.",
    },
    {
        text: "AI powered suggestions",
        tooltip: "Receive intelligent suggestions for optimizing emails.",
    },
];

export const WORKSPACE_LIMIT = 2; // Limit for the number of workspaces
