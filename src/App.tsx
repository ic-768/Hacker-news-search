import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AutoSuggest from "./components/auto-suggest";
import SavedList from "./components/saved-list";
import { FavoritesProvider } from "./context/favorites/favorites";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <div className="grid grid-cols-2 gap-4 p-8">
          <AutoSuggest />
          <SavedList />
        </div>
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
