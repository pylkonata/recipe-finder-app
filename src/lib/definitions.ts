export interface IRecipeResponse {
  offset: number;
  number: number;
  results: Recipe[];
  totalResults: number;
}
export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export interface IRecipeDetailsResponse {
  id: number;
  image: string;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: null;
  cookingMinutes: null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: [];
  instructions: string;
  analyzedInstructions: [{ name: string; steps: [] }];
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}
export type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: [];
  measures: [object];
};
