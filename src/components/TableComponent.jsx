import React from "react";

const TableComponent = ({ salesData, visibleCategories }) => {
  return (
    <div
      className="table-container"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            {visibleCategories.map((cat) => (
              <th key={cat}>{cat}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {salesData.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
