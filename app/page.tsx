import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "株式会社ZTEX | 技術を経営の確かな推進力に。",
  description: "AI導入・AXコンサルティングの株式会社ZTEX（ジーテックス）。業務自動化から高度AI実装、AI人材育成まで、経営課題を解決する「実利ある技術」を提供します。仙台・宮城から全国対応。",
  keywords: ["AI導入", "仙台", "宮城", "AXコンサルティング", "業務自動化", "AIエージェント", "DX推進", "n8n"],
  openGraph: {
    title: "株式会社ZTEX | 技術を経営の確かな推進力に。",
    description: "AI導入・AXコンサルティングの株式会社ZTEX。業務自動化から高度AI実装まで。仙台・宮城から全国対応。",
  },
};

export default function Page() {
  return (
    <>
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
    </>
  );
}