import {useState} from "react";
import RecentSearches from "./components/recentSearches/RecentSearches";
import SearchResult from "./components/searchResult/SearchResult";
import s from "./SearchSuggestions.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={s.ss_container}>
        <RecentSearches />

        <SearchResult />
      </div>
    </>
  );
}

export default App;
