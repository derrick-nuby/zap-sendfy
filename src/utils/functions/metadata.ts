import type { Metadata } from "next";

export const generateMetadata = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME} - The Email Marketing Platform for Businesses`,
    description = `${process.env.NEXT_PUBLIC_APP_NAME} is the email management platform for businesses. It helps you create, send, and track your dynamic emails effortlessly.`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
    ],
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => {
    const metadataBase = process.env.NEXT_PUBLIC_APP_URL
        ? new URL(process.env.NEXT_PUBLIC_APP_URL)
        : new URL("http://localhost:3000");

    return {
        metadataBase,
        title,
        description,
        icons,
        openGraph: {
            title,
            description,
            ...(image && { images: [{ url: image }] }),
        },
        twitter: {
            title,
            description,
            ...(image && { card: "summary_large_image", images: [image] }),
            creator: "@derricknuby",
        },
        ...(noIndex && { robots: { index: false, follow: false } }),
    };
}

