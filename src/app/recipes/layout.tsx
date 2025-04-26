import { Suspense } from "react";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center align-center min-h-3/5">
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </section>
  );
}
