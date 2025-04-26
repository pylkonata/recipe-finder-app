import { getRecipes } from "@/lib/getRecipes";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function Recipes(props: {
  searchParams?: Promise<{
    query?: string;
    cuisine?: string;
    maxReadyTime?: number;
  }>;
}) {
  const searchParams = await props.searchParams;
  const recipes = await getRecipes({
    query: searchParams?.query,
    cuisine: searchParams?.cuisine,
    maxReadyTime: searchParams?.maxReadyTime,
  });

  if (!recipes.length) notFound();

  return (
    <ul className="flex flex-wrap gap-4 p-8">
      {recipes.map((recipe) => (
        <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
          <li className="flex flex-col gap-1 max-w-[312px] max-h-[300px] justify-between hover:cursor-pointer hover:bg-amber-300 hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-pretty">{recipe.title}</h2>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={312}
              height={231}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Recipes;
