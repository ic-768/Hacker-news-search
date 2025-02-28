import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";

import { getStories } from "@/api/get-stories";

export const useSuggestions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // debounce the query
  useEffect(() => {
    const debouncedFunc = debounce((val) => setDebouncedQuery(val), 300);
    debouncedFunc(query);
    return () => debouncedFunc.cancel();
  }, [query]);

  // fetch the data
  const { data: stories = [], isFetching } = useQuery({
    queryKey: ["stories", debouncedQuery],
    queryFn: () => getStories(debouncedQuery),
    placeholderData: (prevData) => prevData,
    enabled: debouncedQuery.length > 2,
  });

  // if no query or no stories, close the dropdown
  useEffect(() => {
    setIsOpen(debouncedQuery.length > 2 && !!stories.length);
  }, [debouncedQuery, stories.length]);

  return { debouncedQuery, isOpen, query, setQuery, isFetching, stories };
};
