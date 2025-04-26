import { notFound } from "next/navigation";
import Image from "next/image";

import { getRecipe } from "@/lib/getRecipes";

async function Recipe({ params }: { params: { id: string } }) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  if (!recipe) return notFound();

  return (
    <div className="flex flex-col gap-1 max-w-[375px] justify-start ">
      <h1 className="text-pretty text-2xl self-center">{recipe.title}</h1>
      <Image src={recipe.image} alt={recipe.title} width={375} height={250} />
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
