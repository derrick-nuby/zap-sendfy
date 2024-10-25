import { AnimationContainer, MaxWidthWrapper } from "@/components";
import FeaturePrompt from "@/components/global/FeaturePrompt";
import Partners from "@/components/global/Partners";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AnalyticsPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto">
                        <MagicBadge title="New" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Unleash the Potential of Targeted Messaging
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Our Email Campaigns feature empowers you to create and launch professional, effective email campaigns in a few simple steps. Whether you’re promoting a new product, sharing updates, or nurturing leads, we provide the tools to reach your audience with personalized, engaging messages.
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
                            alt="Advanced analytics for your business"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>
                </AnimationContainer>
                <Partners />
            </MaxWidthWrapper>
            <FeaturePrompt
                headingText={"Create Powerful Campaigns in Minutes"}
                descriptionText={"Our user-friendly campaign builder is designed for everyone—from beginners to marketing professionals—offering pre-designed templates and intuitive editing tools so you can create emails that stand out. With built-in scheduling, automation, and personalization options, every campaign you launch can be tailored to the unique interests of your customers."}
            />
        </>
    );
};

export default AnalyticsPage;
