import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blog-data";
import { glossaryTerms } from "@/lib/glossary-data";

export async function GET() {
    const blogList = blogPosts
        .map((p) => `- [${p.title}](https://ztex-japan.com/blog/${p.slug})`)
        .join("\n");

    const glossaryList = glossaryTerms
        .map(
            (t) =>
                `- [${t.term}](https://ztex-japan.com/glossary/${t.slug}): ${t.definition}`
        )
        .join("\n");

    const content = `# 株式会社ZTEX

> AI導入・AXコンサルティングの専門企業。仙台・宮城を拠点に、中小企業の経営課題を「実利ある技術」で解決します。全国対応。

## 会社概要
- 会社名: 株式会社ZTEX（ジーテックス / ZTEX Inc.）
- 所在地: 宮城県仙台市宮城野区福室2丁目8番17号 福室マンション314号
- 設立: 2023年3月7日
- 代表: 佐藤 啓之
- 公式サイト: https://ztex-japan.com
- お問い合わせ: info@ztex-japan.com

## サービス一覧

### 業務フロー自動化・効率化支援
API連携やノーコードツール（n8n等）を活用し、手作業に依存した事務処理や反復業務を自動化。利益率の高い組織体制を構築します。
- 詳細: https://ztex-japan.com/services/automation

### AI人材育成・内製化支援
現場社員がAIを使いこなせる状態まで伴走。「自走できる組織」への変革を促し、長期的な競争力を高めます。
- 詳細: https://ztex-japan.com/services/training

### 高度AI導入・技術顧問
LLMの専門的知見に基づき、貴社独自のAI環境を構築。モデルのチューニングやRAG構成の改善により、ビジネス特化の高精度なAIを実現します。
- 詳細: https://ztex-japan.com/services/model-engineering

### 生成AI活用ブランディング・制作
最新の生成AI技術を駆使し、高品質なクリエイティブを迅速に制作。動画、画像、SNSコンテンツなど、広報・販促コストを抑えつつ認知拡大を支援します。
- 詳細: https://ztex-japan.com/services/creative-intelligence

## 導入事例
AI導入、業務自動化、生成AI活用の実績をご紹介します。
- 詳細: https://ztex-japan.com/cases

## ブログ
${blogList}

## 用語集（AI/DX関連）
${glossaryList}

## その他のページ
- [お問い合わせ](https://ztex-japan.com/contact)
- [採用情報](https://ztex-japan.com/recruit)
- [お知らせ](https://ztex-japan.com/news)
- [会社概要](https://ztex-japan.com/company)
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}
