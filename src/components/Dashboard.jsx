import React, { useState } from "react";
import { fetchSalesData } from "../utils/utils";
import Filters from "./Filters";
import ChartComponent from "./ChartComponent";
import TableComponent from "./TableComponent";
import SummaryCard from "./SummaryCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [chartHeaders, setChartHeaders] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    // Check if start date and end date are selected
    if (!startDate || !endDate) {
      // Show error message using toaster
      toast.error("Please select both start date and end date.");
      return;
    }

    setLoading(true);
    const { headers, rows, selectedCategories } = await fetchSalesData(
      startDate,
      endDate,
      category
    );
    setChartHeaders(headers);
    setSalesData(rows);
    setVisibleCategories(selectedCategories);
    setLoading(false);
  };

  return (
    <div className="dashboard-container">
      <h1>Sales Dashboard</h1>

      <Filters
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        category={category}
        setCategory={setCategory}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div className="loading">Loading data...</div>
      ) : salesData.length > 0 ? (
        <>
          <ChartComponent
            chartHeaders={chartHeaders}
            salesData={salesData}
            visibleCategories={visibleCategories}
          />

          <TableComponent
            salesData={salesData}
            visibleCategories={visibleCategories}
          />

          <div className="summary-container">
            {visibleCategories.map((cat, index) => (
              <SummaryCard
                key={cat}
                category={{ name: cat, index }}
                salesData={salesData}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="no-data-message">
          No data to display. Please select filters and click Search.
        </div>
      )}

      {/* Add ToastContainer at the bottom of your component to show toasts */}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
