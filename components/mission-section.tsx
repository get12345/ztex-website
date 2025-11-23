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
              自由に生きられる世界を、
              <br />
              「やわらかな設計」で支える。
            </h2>
          </div>

          <div className="grid gap-6 text-sm text-neutral-400 md:grid-cols-2 md:text-base">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-neutral-100 md:text-base">
                SOFT = 柔らかく寄り添う
              </h3>
              <p className="section-description">
                技術よりも先に「人」を見る。どんなに高度なAIや自動化も、
                現場の温度感や不安を無視しては根づきません。SOFT FRAME は、
                対話と小さな一歩を重ねながら、チームにとって無理のない導入スピードを
                一緒に決めていきます。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-neutral-100 md:text-base">
                FRAME = 混沌を構造化して支える
              </h3>
              <p className="section-description">
                「誰が・いつ・何を・どうやるか」を、仕組みとしてフレーム化する。
                自動化ツールやAIエージェント、RAG、専用ダッシュボードを組み合わせ、
                ばらばらだった業務フローを一枚の図に落とし込みます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}