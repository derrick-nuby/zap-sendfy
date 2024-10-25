import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { LampContainer } from '../ui/lamp';
import AnimationContainer from './animation-container';
import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';

interface FeaturePromptProps {
  headingText: string;
  descriptionText: string;
}
const FeaturePrompt: React.FC<FeaturePromptProps> = ({ headingText, descriptionText }) => {
  return (
    <MaxWidthWrapper className="pt-20">
      <AnimationContainer delay={0.4} className="w-full">
        <LampContainer className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-3xl font-semibold font-heading tracking-tight text-transparent md:text-5xl mt-8">
              {headingText}
            </h2>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-base md:text-lg">
              {descriptionText}
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
  );
};

export default FeaturePrompt;
