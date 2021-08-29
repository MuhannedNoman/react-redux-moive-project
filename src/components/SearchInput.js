import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchInput({ queryHandler, loadingHandler }) {
  const [queryValue, setQueryValue] = useState("");

  function handleChange(e) {
    setQueryValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    loadingHandler(false);
    queryHandler(queryValue);
  }

  SearchInput.propTypes = {
    queryHandler: PropTypes.func.isRequired,
    loadingHandler: PropTypes.func.isRequired,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search anything..."
            onChange={handleChange}
          />

          <div>
            <button type="submit" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchInput;
