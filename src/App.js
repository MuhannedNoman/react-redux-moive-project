import React from "react";
import SearchInput from "./components/SearchInput";
import useFetch from "./hooks/useFetch";

function App() {
  const { response, loading, setQuery, setLoading } = useFetch();

  function queryHandler(q) {
    setQuery(q);
  }
  function loadingHandler(l) {
    setLoading(l);
  }

  console.log(response, loading);

  return (
    <div>
      <h1>Hello World</h1>
      <SearchInput
        queryHandler={queryHandler}
        loadingHandler={loadingHandler}
      />
    </div>
  );
}

export default App;
