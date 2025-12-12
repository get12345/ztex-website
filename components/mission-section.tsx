import Image from "next/image";

export function MissionSection() {
  return (
    <section id="mission" className="relative border-b border-neutral-900/80 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/mission.png"
          alt="Mission Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      <div className="section-inner py-10 md:py-14">
        <div className="space-y-6">
          <div>
            <p className="section-eyebrow">MISSION</p>
            <h2 className="section-title">
              経営課題を解決する、
              <br />
              「実利ある技術」の実装を。
            </h2>
          </div>

          <div className="grid gap-6 text-sm text-neutral-400 md:grid-cols-2 md:text-base">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-neutral-100 md:text-base">
                Client First = 現場視点の定着支援
              </h3>
              <p className="section-description">
                高度な技術も、現場で使われなければ意味がありません。
                経営層の意図と現場の実情、双方を深く理解し、
                組織に無理なく浸透する導入プロセスを設計します。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-neutral-100 md:text-base">
                Structural Design = 堅牢な仕組み化
              </h3>
              <p className="section-description">
                属人化した業務を「構造」として可視化・再定義します。
                AIと自動化技術を適切に組み込み、特定の個人に依存しない、
                安定した事業基盤を構築します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}