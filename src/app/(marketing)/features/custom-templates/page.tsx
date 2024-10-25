import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LinkShorteningPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto">
                        <MagicBadge title="Unique" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Create Beautiful Emails with Ease
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            our custom Templates feature brings your brand to life with email designs that stand out in crowded inboxes. With a library of professionally designed templates, along with customizable options, you can create emails that capture your audience’s attention and reflect your brand’s unique style.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <Link href="/dashboard">
                                    Get started
                                </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <Link href="/blog">
                                    Learn more
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-10 mx-auto">
                        <Image
                            src="/assets/qr-codes.svg"
                            alt="Create QR codes for your links"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.3} className="w-full">
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                Trusted by the best in the industry
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.4} className="w-full">
                    <LampContainer className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-3xl font-semibold font-heading tracking-tight text-transparent md:text-5xl mt-8">
                                Personalized Designs to Capture Attention
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-base md:text-lg">
                                Our templates are optimized for mobile and desktop, ensuring your emails look great on any device. You can customize colors, fonts, images, and layouts to match your brand, so each email is a cohesive part of your customer’s journey. Whether you want a minimalist design for a monthly newsletter or a vibrant look for a product launch, Zap-Sendify has a template for every need.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/auth/sign-up" className="flex items-center">
                                        Get started for free
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </>
    );
};

export default LinkShorteningPage;
