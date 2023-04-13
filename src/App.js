import "./App.css";
import SearchBar from "./components/SearchBar";
import RecentSearch from "./components/RecentSearch";
import TopRecommended from "./components/TopRecommended";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <RecentSearch />
      <TopRecommended />
    </div>
  );
}

export default App;
