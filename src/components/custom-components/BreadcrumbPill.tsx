"use client";
import { useRouter } from "next/navigation";

export default function BreadcrumbPill({
  currentRoute,
}: {
  currentRoute: string;
}) {
    const router = useRouter();

  return (
    <section className="flex items-center gap-1 -space-x-6">
      <div
      onClick={() => router.push('/')}
        className="text-sm text-white font-medium bg-main-purple !hover:bg-main-pink !cursor-pointer transition-colors !ease-in !duration-1000 rounded-l-2xl py-2 px-6"
      >
        Home
      </div>
      <div className="h-8 w-8 rounded-full p-2 z-20 flex items-center justify-center bg-grey-text text-black font-bold">
        /
      </div>
      <p className="text-sm bg-white font-medium text-main-purple hover:bg-grey-text transition duration-1000 rounded-r-2xl py-2 px-6">{currentRoute}</p>
    </section>
  );
}
