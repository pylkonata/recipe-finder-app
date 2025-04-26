"use client";

import dynamic from "next/dynamic";
const LazySearchForm = dynamic(
  () => import("@/app/ui/search-page/search-form"),
  { ssr: false },
);
export default function SearchPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <LazySearchForm />
    </div>
  );
}
