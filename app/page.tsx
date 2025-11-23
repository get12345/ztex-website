// app/page.tsx

import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ServicesSection } from "@/components/services-section";
import { CasesSection } from "@/components/cases-section";
import { StrengthsSection } from "@/components/strengths-section";
import { FlowSection } from "@/components/flow-section";
import { ContactSection } from "@/components/contact-section";
import { TechStack } from "@/components/tech-stack";
import { FAQSection } from "@/components/faq-section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function Page() {
  return (
    <>
      <main className="flex-1">
        <Hero />

        <ScrollAnimation delay={0.2}>
          <TechStack />
        </ScrollAnimation>

        <ScrollAnimation>
          <MissionSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <ServicesSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <CasesSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <StrengthsSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <FlowSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <FAQSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <ContactSection />
        </ScrollAnimation>
      </main>
    </>
  );
}