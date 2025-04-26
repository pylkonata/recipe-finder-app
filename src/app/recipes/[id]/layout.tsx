import { Suspense } from "react";

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center">
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </section>
  );
}
