import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-neutral-100 md:text-8xl">404</h1>
      <h2 className="mt-6 text-xl font-medium text-neutral-300 md:text-2xl">
        ページが見つかりません
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-400">
        お探しのページは、削除されたか、URLが変更された可能性があります。
        お手数ですが、トップページから再度目的のページをお探しください。
      </p>
      <div className="mt-10">
        <Button
          asChild
          className="h-12 rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-neutral-200"
        >
          <Link href="/">トップページへ戻る</Link>
        </Button>
      </div>
    </div>
  );
}
