import { IRecipeDetailsResponse, IRecipeResponse } from "@/lib/definitions";

export async function getRecipes(searchParams: {
  query?: string;
  cuisine?: string;
  maxReadyTime?: number;
}) {
  const params = getSearchParams(searchParams);

  const url = `${process.env.BASE_URL}complexSearch?${params}&apiKey=${process.env.API_KEY}`;

  const response = await fetch(url, { next: { revalidate: 60 } });
  if (response.status !== 200) return [];

  const data: IRecipeResponse = await response.json();

  return data.results;
}

function getSearchParams(searchParams: {
  query?: string;
  cuisine?: string;
  maxReadyTime?: number;
}) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) params.set(key, String(value));
  });

  return params.toString();
}

export async function getRecipe(id: string) {
  const url = `${process.env.BASE_URL}${id}/information?apiKey=${process.env.API_KEY}`;

  const response = await fetch(url, { next: { revalidate: 60 } });
  if (response.status !== 200) return null;

  const data: IRecipeDetailsResponse = await response.json();
  return data;
}
