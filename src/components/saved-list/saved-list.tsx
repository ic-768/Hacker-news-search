import { AnimatePresence, motion } from "framer-motion";

import { useFavorites } from "@/context/favorites/use-favorites";

import ListItem from "./list-item";

export default function SavedList() {
  const { favorites } = useFavorites();

  return (
    <div className="flex flex-col items-center gap-2">
      <h2>Saved Stories</h2>

      <motion.ul
        className="overflow-y-auto overflow-x-hidden border rounded shadow-md h-96 w-96"
        id="suggestion-list"
        role="listbox"
        layout
      >
        <AnimatePresence initial={false}>
          {favorites.map((story) => (
            <ListItem key={story.objectID} story={story} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
