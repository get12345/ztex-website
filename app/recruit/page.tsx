import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function RecruitPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-50">
      <div className="section-inner py-16 md:py-20">
        <p className="section-eyebrow">RECRUIT</p>

        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
          採用情報
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-neutral-400 md:text-[15px] leading-relaxed">
          株式会社ZTEXでは、AIと自動化の力で「自由に生きられる世界」を創る仲間を募集しています。
          <br />
          最先端の技術を扱いながら、クライアントの課題解決と自社の事業成長にコミットできる環境です。
        </p>

        <div className="mt-16 space-y-16">
          {/* 1. 営業（AIコンサル型セールス） */}
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Badge variant="outline" className="mb-3 border-neutral-700 text-neutral-300">
                  Sales / Consultant
                </Badge>
                <h2 className="text-xl font-bold md:text-2xl">
                  AIコンサル型セールス・ヒアリング担当
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  「売る」のではなく、「課題を因数分解」する仕事。
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  【募集背景】
                  <br />
                  AI導入や業務自動化へのニーズ急増に伴い、クライアントからの相談が増えています。
                  単なるツール売りではなく、顧客の業務フロー深くに入り込み、本質的な課題を特定できる人材を求めています。
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">業務内容</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>問い合わせ顧客へのヒアリング・課題抽出</li>
                      <li>業務フローの可視化と改善提案書の作成</li>
                      <li>エンジニアと連携した要件定義のサポート</li>
                      <li>導入後の定着支援・カスタマーサクセス</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">必須スキル</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>法人営業またはコンサルティングの実務経験</li>
                      <li>論理的思考力とドキュメント作成能力</li>
                      <li>AI・ITツールへの強い関心と学習意欲</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">歓迎スキル</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>SaaS企業でのセールス・CS経験</li>
                      <li>業務改善プロジェクトのリード経験</li>
                      <li>Notion / Slack / Chatwork 等のツール活用経験</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">求める人物像</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>相手の意図を汲み取り、整理して話せる方</li>
                      <li>新しい技術や変化を楽しめる方</li>
                      <li>チーム全体の成果にコミットできる方</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-neutral-950 p-5 border border-neutral-800/50">
                <h4 className="text-sm font-medium text-neutral-200">働き方・待遇</h4>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  雇用形態：正社員 / 業務委託（試用期間あり）
                  <br />
                  報酬：経験・能力を考慮し、面談にて決定（インセンティブ制度あり）
                  <br />
                  勤務地：フルリモート推奨（仙台オフィス利用可）
                </p>
              </div>
            </div>
          </section>

          {/* 2. エンジニア */}
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Badge variant="outline" className="mb-3 border-neutral-700 text-neutral-300">
                  Engineer
                </Badge>
                <h2 className="text-xl font-bold md:text-2xl">
                  フルスタックエンジニア (Next.js / AI)
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  最新のAI APIとモダンスタックで、爆速開発を。
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  【募集背景】
                  <br />
                  受託開発案件および自社プロダクト開発の加速に伴い、技術選定から実装までをリードできるエンジニアを募集します。
                  AIエージェントやRAG構築など、最先端の技術領域に挑戦できる環境です。
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">業務内容</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>Webアプリケーションの設計・開発・運用</li>
                      <li>n8n / Dify 等を用いた業務自動化ワークフロー構築</li>
                      <li>LLM (OpenAI, Anthropic等) を活用した機能実装</li>
                      <li>データベース設計 (Supabase / PostgreSQL)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">必須スキル</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>Next.js / React / TypeScript での開発経験</li>
                      <li>Supabase または Firebase の利用経験</li>
                      <li>Git / GitHub を用いたチーム開発経験</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">歓迎スキル</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>n8n / Make / Zapier 等のiPaaS活用経験</li>
                      <li>Python / LangChain / LlamaIndex の知識</li>
                      <li>Vercel / AWS 等のインフラ構築・運用経験</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">求める人物像</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>技術への好奇心が強く、自走できる方</li>
                      <li>コードの品質だけでなく、UXやビジネス価値を意識できる方</li>
                      <li>アウトプット（Qiita, Zenn, GitHub等）を日常的に行っている方</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-neutral-950 p-5 border border-neutral-800/50">
                <h4 className="text-sm font-medium text-neutral-200">働き方・待遇</h4>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  雇用形態：正社員 / 業務委託 / 副業可
                  <br />
                  報酬：スキル・実績に応じて優遇（ストックオプション制度検討中）
                  <br />
                  勤務地：フルリモート（裁量労働制）
                </p>
              </div>
            </div>
          </section>

          {/* 3. アルバイト */}
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Badge variant="outline" className="mb-3 border-neutral-700 text-neutral-300">
                  Part-time / Assistant
                </Badge>
                <h2 className="text-xl font-bold md:text-2xl">
                  AIオペレーター・クリエイティブ補助
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  AIを使いこなし、クリエイティブと効率化の最前線へ。
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  【募集背景】
                  <br />
                  SNS運用や資料作成、画像生成など、AIを活用したオペレーション業務が増加しています。
                  未経験からでも「AIを使うスキル」を身につけながら働けるポジションです。
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">業務内容</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>AIツールを用いた画像生成・ライティング補助</li>
                      <li>SNSアカウントの運用代行・投稿作成</li>
                      <li>事務作業・データ入力・リサーチ業務</li>
                      <li>マニュアル作成・ドキュメント整理</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">必須スキル</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>基本的なPC操作（タイピング、Google検索等）</li>
                      <li>SNS（Instagram, X, TikTok）の日常的な利用経験</li>
                      <li>報告・連絡・相談がスムーズにできる方</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">歓迎スキル</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>ChatGPT / Midjourney 等のAIツール利用経験</li>
                      <li>Canva / Photoshop 等での画像編集経験</li>
                      <li>動画編集の経験</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">求める人物像</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400 space-y-1">
                      <li>コツコツとした作業が好きな方</li>
                      <li>新しいツールを触るのが好きな方</li>
                      <li>成長意欲があり、素直に学べる方</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-neutral-950 p-5 border border-neutral-800/50">
                <h4 className="text-sm font-medium text-neutral-200">働き方・待遇</h4>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  雇用形態：アルバイト / パート / 業務委託
                  <br />
                  報酬：時給 1,200円〜（能力に応じて昇給あり）
                  <br />
                  勤務地：リモート可（週1〜2回の出社推奨、完全リモートも相談可）
                  <br />
                  勤務時間：週3日〜、1日4時間〜OK（シフト制）
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* 共通：働く魅力 */}
        <div className="mt-20 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            株式会社ZTEXで働く魅力
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3 text-left">
            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-200">AI最前線での経験</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                日々進化するAI技術を実務で活用し、市場価値の高いスキルセットを習得できます。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-200">圧倒的な自由度</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                フルリモート・フレックス制を導入（職種による）。成果を出せば、働く場所や時間は自由です。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-200">成長できる環境</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                少人数のプロフェッショナルチームで、裁量を持って大きなプロジェクトに挑戦できます。
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button asChild className="h-12 rounded-full bg-white px-8 text-black hover:bg-neutral-200">
              <Link href="/contact">お問い合わせはこちら</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
