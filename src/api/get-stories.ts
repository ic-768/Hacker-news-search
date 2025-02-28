import { Story } from "@/types";

export const getStories = async (query: string): Promise<Story[]> => {
  try {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}`,
    );
    const data = await response.json();
    return data.hits;
  } catch (e) {
    console.log("Error", e);
    return [];
  }
};
