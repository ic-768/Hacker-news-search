import { Input } from "@/components/ui/input";
import { useSuggestions } from "@/hooks/useSuggestions";
import ListItem from "./list-item";

export default function AutoSuggest() {
  const { setQuery, isOpen, isFetching, query, stories } = useSuggestions();

  return (
    <div role="combobox" aria-expanded={isOpen}>
      {isFetching && <span>Loading...</span>}
      <Input
        type="text"
        placeholder="Search Hacker News..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-autocomplete="list"
        aria-controls="suggestion-list"
      />
      {isOpen && stories.length > 0 && (
        <ul
          id="suggestion-list"
          className=" border rounded shadow-md max-h-96 overflow-y-auto"
          role="listbox"
        >
          {stories.map((story) => (
            <ListItem story={story} key={story.objectID} />
          ))}
        </ul>
      )}
    </div>
  );
}
