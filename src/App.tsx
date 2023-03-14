import {useState} from "react";
import RecentSearches from "./components/recentSearches/RecentSearches";
import SearchResult from "./components/searchResult/SearchResult";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecentSearches />
      <button className="font-bold">ciao</button>
      <SearchResult />
    </>
  );
}

export default App;
