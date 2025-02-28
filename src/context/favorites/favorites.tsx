import { ReactNode, useEffect, useState } from "react";

import { Story } from "@/types";

import { FavoritesContext } from "./provider";

export interface FavoritesContextType {
  favorites: Story[];
  addToFavorites: (story: Story) => void;
  removeFromFavorites: (story: Story) => void;
}

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Story[]>(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites") as string)
      : [],
  );

  // Load favorites from localStorage after mounting
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    console.log(savedFavorites);
    setFavorites(savedFavorites ? JSON.parse(savedFavorites) : []);
  }, []);

  // Update localStorage whenever favorites changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (story: Story) => {
    if (!favorites || favorites.find((s) => s.objectID === story.objectID)) {
      return; // Item already in favorites
    }
    setFavorites((prevFavorites) =>
      prevFavorites ? [...prevFavorites, story] : [story],
    );
  };

  const removeFromFavorites = (story: Story) => {
    setFavorites((prevFavorites) =>
      prevFavorites
        ? prevFavorites.filter((s) => s.objectID !== story.objectID)
        : [],
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
