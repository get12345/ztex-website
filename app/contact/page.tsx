import { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
    title: "お問い合わせ | 株式会社ZTEX",
    description: "株式会社ZTEXへの制作依頼、お見積もり、その他ご相談はこちらのフォームよりお気軽にお問い合わせください。",
    openGraph: {
        title: "お問い合わせ | 株式会社ZTEX",
        description: "AI導入・業務自動化のご相談はこちらのフォームよりお気軽にお問い合わせください。",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactForm />;
}
