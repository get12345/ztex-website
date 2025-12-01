export default function TokushohoPage() {
    return (
        <main className="min-h-screen bg-black text-neutral-50">
            <div className="section-inner py-16 md:py-20">
                <h1 className="text-2xl font-semibold md:text-3xl">
                    特定商取引法に基づく表記
                </h1>

                <div className="mt-10">
                    <dl className="divide-y divide-neutral-800 border-t border-neutral-800">
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">販売業者</dt>
                            <dd className="text-neutral-200 md:col-span-2">株式会社ZTEX</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">所在地</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                〒983-0005
                                <br />
                                宮城県仙台市宮城野区福室2丁目8番17号 福室マンション314号
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">電話番号</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                090-8212-1719
                                <br />
                                <span className="text-xs text-neutral-500">
                                    ※サービスに関するお問い合わせは、まずはフォームよりお願いいたします。
                                </span>
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">メールアドレス</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                info@ztex-japan.com
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">販売価格</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                各サービスページに記載、または個別お見積もりに準じます。
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">商品代金以外の必要料金</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                インターネット接続料金、通信料金、消費税（表示価格は特に断りがない限り税抜価格です）。
                                銀行振込手数料（銀行振込の場合）。
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">お支払い方法</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                銀行振込、クレジットカード決済（Stripe等）
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">お支払い時期</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                契約締結時、または請求書発行後翌月末払い（法人契約の場合）。
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">引渡し時期</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                契約締結後、直ちに（または契約で定めた期間内に）サービス提供を開始します。
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                            <dt className="font-medium text-neutral-400">返品・キャンセルについて</dt>
                            <dd className="text-neutral-200 md:col-span-2">
                                デジタルコンテンツおよび役務提供の性質上、原則として返品・返金には応じられません。
                                中途解約については契約書の条項に基づきます。
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>
    );
}
