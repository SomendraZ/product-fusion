import React from "react";

const SummaryCard = ({ category, salesData }) => {
  const total = salesData.reduce((sum, row) => sum + row[category.index + 1], 0);
  const avg = salesData.length ? (total / salesData.length).toFixed(2) : 0;

  return (
    <div className="summary-card">
      <h3>{category.name}</h3>
      <p>{total} total</p>
      <p style={{ fontSize: "16px", fontWeight: "normal" }}>
        Avg: {avg}
      </p>
    </div>
  );
};

export default SummaryCard;
