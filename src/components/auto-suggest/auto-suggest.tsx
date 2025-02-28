import { Input } from "@/components/ui/input";
import { useSuggestions } from "@/hooks/useSuggestions";
import ListItem from "./list-item";
import { AnimatePresence, motion } from "framer-motion";

export default function AutoSuggest() {
  const { setQuery, isOpen, isFetching, query, stories } = useSuggestions();

  return (
    <div className="w-96" role="combobox" aria-expanded={isOpen}>
      <Input
        type="text"
        placeholder="Search Hacker News..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-autocomplete="list"
        aria-controls="suggestion-list"
      />
      {isOpen && stories.length > 0 && (
        <motion.ul
          id="suggestion-list"
          className=" border rounded shadow-md max-h-96 overflow-y-auto"
          role="listbox"
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
