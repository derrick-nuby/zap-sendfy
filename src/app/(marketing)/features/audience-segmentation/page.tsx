import { AnimationContainer, MaxWidthWrapper } from "@/components";
import FeaturePrompt from "@/components/global/FeaturePrompt";
import Partners from "@/components/global/Partners";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import Link from "next/link";

const LinkShorteningPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-3xl mx-auto">
                        <MagicBadge title="Divide" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Reach the Right Audience Every Time
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Audience Segmentation feature helps you divide your subscribers based on behaviors, demographics, past interactions, and more, so every email feels personal and meaningful.
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
                            src="/assets/shorten-links.svg"
                            alt="Shorten links and track their performance"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>
                </AnimationContainer>
                <Partners />
            </MaxWidthWrapper>
            <FeaturePrompt
                headingText={"Get to Know Your Customers Like Never Before"}
                descriptionText={"With audience segmentation, you can target your messages to meet the unique needs of each segment. For example, if you own a retail business, segment by purchase history to send discounts on specific product categories. If you’re in the service industry, segment by engagement level, so active clients receive updates, while new subscribers are introduced to your brand more gradually."}
            />
        </>
    );
};

export default LinkShorteningPage;
