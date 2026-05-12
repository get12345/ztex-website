import { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社ZTEX",
  description:
    "株式会社ZTEX（ジーテックス）の会社情報。企業理念・ミッション・ビジョン・代表挨拶・沿革・実績などをご紹介します。仙台・宮城を拠点に全国の中小企業をAI導入で支援。",
  keywords: [
    "株式会社ZTEX",
    "会社概要",
    "仙台",
    "AI企業",
    "宮城",
    "東北",
    "AI導入支援",
  ],
  openGraph: {
    title: "会社概要 | 株式会社ZTEX",
    description:
      "株式会社ZTEX（ジーテックス）の会社情報。企業理念・代表挨拶・沿革・実績をご紹介します。",
  },
  alternates: {
    canonical: "/company",
  },
};

const history = [
  {
    year: "2020年",
    label: "個人事業主時代",
    desc: "内閣府ムーンショット計画に触発され、AI・Python分野の学習を本格開始。Pythonを専門としたプログラミングスクールを運営。",
  },
  {
    year: "2023年3月",
    label: "創業",
    desc: "株式会社ZTEX設立（3名にて創業）。ブロックチェーン技術を活用した複数店舗間ポイント交換サービスの開発に着手。",
  },
  {
    year: "2024年",
    label: "受託開発",
    desc: "現場課題に直結するシステム受託開発事業へ転換。アプリ開発、AIを活用した画像認識システム（防犯カメラ連携）、基幹システム構築など、多様な開発案件を手がける。",
  },
  {
    year: "2025年",
    label: "AI事業本格参入",
    desc: "全国の中小企業向けに、AI導入による業務効率化支援を開始。導入企業数30社以上を達成。",
  },
];



export default function CompanyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社ZTEX",
    alternateName: "ZTEX Inc.",
    url: "https://ztex-japan.com",
    foundingDate: "2023-03-07",
    description:
      "AI導入・業務自動化の専門企業。仙台・宮城を拠点に全国の中小企業を支援。",
    address: {
      "@type": "PostalAddress",
      streetAddress: "福室2丁目8番17号 福室マンション314号",
      addressLocality: "仙台市宮城野区",
      addressRegion: "宮城県",
      postalCode: "983-0005",
      addressCountry: "JP",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 38.26, longitude: 140.87 },
      name: "全国",
    },
    knowsAbout: [
      "AI導入支援",
      "業務自動化",
      "n8n",
      "LLM",
      "RAG",
      "AI-OCR",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-neutral-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-inner pt-16 md:pt-20 mt-16">
        <p className="section-eyebrow">COMPANY</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl mb-16">会社情報</h1>

        {/* ===== 会社概要テーブル ===== */}
        <section id="profile" className="mb-24">
          <h2 className="text-xl font-semibold mb-8 text-neutral-100">
            会社概要
          </h2>
          <dl className="divide-y divide-neutral-800 border-t border-neutral-800">
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">会社名</dt>
              <dd className="text-neutral-200 md:col-span-2">
                株式会社ZTEX (ジーテックス)
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">所在地</dt>
              <dd className="text-neutral-200 md:col-span-2 leading-relaxed">
                〒983-0005
                <br />
                宮城県仙台市宮城野区福室2丁目8番17号 福室マンション314号
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">設立</dt>
              <dd className="text-neutral-200 md:col-span-2">2023年3月7日</dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">資本金</dt>
              <dd className="text-neutral-200 md:col-span-2">5,000,000円</dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">事業内容</dt>
              <dd className="text-neutral-200 md:col-span-2">
                AI導入支援 / 業務自動化（AX）コンサルティング / システム開発 /
                AI教育研修
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">保有資格・認定</dt>
              <dd className="text-neutral-200 md:col-span-2">
                Google AI プロフェッショナル認定
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">営業時間</dt>
              <dd className="text-neutral-200 md:col-span-2">
                10:00〜18:00（土日・祝日を除く）
              </dd>
            </div>
          </dl>
        </section>

        {/* ===== 沿革 ===== */}
        <section id="history" className="mb-24">
          <h2 className="text-xl font-semibold mb-8 text-neutral-100">
            沿革
          </h2>
          <dl className="divide-y divide-neutral-800 border-t border-neutral-800">
            {history.map((item) => (
              <div key={item.year} className="grid grid-cols-1 gap-4 py-6 md:grid-cols-4 lg:grid-cols-5">
                <dt className="font-medium text-neutral-200">
                  {item.year}
                  <span className="ml-3 inline-block rounded-full border border-neutral-800 bg-neutral-900/50 px-2 py-0.5 text-[11px] text-neutral-400 font-normal">
                    {item.label}
                  </span>
                </dt>
                <dd className="text-[14px] leading-relaxed text-neutral-400 md:col-span-3 lg:col-span-4">
                  {item.desc}
                </dd>
              </div>
            ))}
          </dl>
        </section>


      </div>
    </div>
  );
}
