"use client";
import { Button } from "@/app/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const cuisines = ["Italian", "Asian", "Indian", "Japanese"];

export default function SearchForm() {
  const [isDisabled, setIsDisabled] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleQueryChange = useDebouncedCallback(
    (query: string | number, name: string) => {
      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set(name, String(query));
      } else {
        params.delete(name);
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
  );

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const data = new FormData(form);

    const hasValue = Array.from(data.values()).some(
      (value) => typeof value === "string" && value.trim() !== "",
    );

    setIsDisabled(!hasValue);
  };

  const navigateNext = () => {
    const params = new URLSearchParams(searchParams);
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <form
      className="flex gap-4 flex-wrap md:flex-nowrap"
      onChange={handleChange}
      action={navigateNext}
    >
      <label htmlFor="search"></label>
      <input
        type="text"
        name="query"
        id="query"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search recipe"
        onChange={(e) => {
          handleQueryChange(e.target.value, "query");
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />

      <select
        id="cuisine"
        name="cuisine"
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        defaultValue={
          searchParams.get("cuisine")?.toString()
            ? searchParams.get("cuisine")?.toString()
            : "empty"
        }
        onChange={(e) => {
          handleQueryChange(e.target.value, "cuisine");
        }}
      >
        <option value="empty" disabled className="disabled:text-gray-500">
          Select a cuisine
        </option>
        {cuisines.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Preparation time, min"
        name="maxReadyTime"
        step={5}
        onChange={(e) => {
          handleQueryChange(e.target.value, "maxReadyTime");
        }}
        defaultValue={searchParams.get("maxReadyTime")?.toString()}
      />
      <Button type="submit" disabled={isDisabled}>
        Next
      </Button>
    </form>
  );
}
