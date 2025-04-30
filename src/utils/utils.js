export const fetchSalesData = async (startDate, endDate, category) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const startTimestamp = startDate
    ? new Date(startDate).getTime()
    : new Date("2023-01-01").getTime();
  const endTimestamp = endDate
    ? new Date(endDate).getTime()
    : new Date().getTime();

  const days = Math.floor(
    (endTimestamp - startTimestamp) / (1000 * 60 * 60 * 24)
  );
  const data = [];

  const selectedCategories = category
    ? [category]
    : ["Electronics", "Clothing", "Food", "Books"];

  for (let i = 0; i <= days; i++) {
    const date = new Date(startTimestamp + i * 24 * 60 * 60 * 1000);
    const dateStr = date.toISOString().split("T")[0];

    const row = [dateStr];

    selectedCategories.forEach((cat) => {
      const baseValue = (date.getDay() + 1) * 100;
      const multiplier =
        ["Electronics", "Clothing", "Food", "Books"].indexOf(cat) + 1;
      const randomFactor =
        ((date.getDate() +
          ["Electronics", "Clothing", "Food", "Books"].indexOf(cat)) %
          3) *
          0.2 +
        0.8;

      row.push(Math.round(baseValue * multiplier * randomFactor));
    });

    data.push(row);
  }

  return {
    headers: ["Date", ...selectedCategories],
    rows: data,
    selectedCategories,
  };
};
