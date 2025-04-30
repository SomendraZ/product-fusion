import React from "react";

const Filters = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  category,
  setCategory,
  handleSearch,
}) => {
  return (
    <div className="filters-container">
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {["Electronics", "Clothing", "Food", "Books"].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Filters;
