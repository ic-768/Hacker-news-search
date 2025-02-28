import { AnimatePresence, motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { useSuggestions } from "@/hooks/useSuggestions";

import ListItem from "./list-item";

export default function AutoSuggest() {
  const { setQuery, isOpen, isFetching, query, stories } = useSuggestions();

  return (
    <div className="flex flex-col items-center gap-2" role="combobox">
      <h2>Explore</h2>

      <Input
        type="text"
        placeholder="Search Hacker News..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isOpen && stories.length > 0 && (
        <motion.ul
          id="suggestion-list"
          className="border rounded shadow-md max-h-96 overflow-y-auto "
          layout
        >
          <AnimatePresence initial={false}>
            {stories.map((story) => (
              <ListItem query={query} story={story} key={story.objectID} />
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      {isFetching && <span>Loading...</span>}
    </div>
  );
}
