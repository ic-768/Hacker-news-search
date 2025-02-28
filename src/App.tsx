import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AutoSuggest from "./components/auto-suggest";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center p-8 min-h-screen">
        <AutoSuggest />
      </div>
    </QueryClientProvider>
  );
}

export default App;
