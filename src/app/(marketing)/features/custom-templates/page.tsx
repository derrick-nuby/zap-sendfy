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
                <Partners />
            </MaxWidthWrapper>
            <FeaturePrompt
                headingText={"Personalized Designs to Capture Attention"}
                descriptionText={"Our templates are optimized for mobile and desktop, ensuring your emails look great on any device. You can customize colors, fonts, images, and layouts to match your brand, so each email is a cohesive part of your customer’s journey. Whether you want a minimalist design for a monthly newsletter or a vibrant look for a product launch, Zap-Sendify has a template for every need."}
            />
        </>
    );
};

export default LinkShorteningPage;
