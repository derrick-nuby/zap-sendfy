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
                        <MagicBadge title="Analyze" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Analyze, Adjust, and Achieve Your Marketing Goals
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Get a clear view of how your email campaigns perform with easy-to-understand metrics and insights. Track open rates, click-throughs, conversions, and more—all in real time—so you know exactly what’s working and what needs improvement.
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
                            src="/assets/analytics.svg"
                            alt="Protect your links with a password"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>
                </AnimationContainer>
                <Partners />
            </MaxWidthWrapper>
            <FeaturePrompt
                headingText={"Make Data-Driven Decisions with Real-Time Insights"}
                descriptionText={"Our analytics dashboard translates complex data into actionable insights, making it simple for you to understand your audience’s preferences and behavior. From small businesses looking to grow their reach to larger organizations needing robust reporting, our analytics give you the edge to fine-tune your marketing approach."}
            />
        </>
    );
};

export default LinkShorteningPage;
