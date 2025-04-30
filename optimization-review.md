# Performance Optimization Review

## Identified Optimization Opportunities

1. **Issue:** Large Single Component

   - **Description:** The "ProductPage.jsx" file handles filters, product display, and cart logic all in one big component.
   - **Proposed Solution:** Split it into smaller components like "ProductFilter", "ProductCard", "Cart", and "CartItem".
   - **Benefits:** Easier to read, reuse, and manage. Each part can be tested and updated separately.

2. **Issue:** Unnecessary Filtering on Every Keystroke

   - **Description:** Search filtering happens on every character the user types.
   - **Proposed Solution:** Use a debounce to wait a few seconds after typing before updating the search term.
   - **Benefits:** Improves performance and gives a smoother typing experience for the user.

3. **Issue:** Inefficient Product Filtering with "useEffect"

   - **Description:** Products are filtered using a "useEffect", which updates state every time the user interacts.
   - **Proposed Solution:** Use "useMemo" to calculate the filtered products based on current filters.
   - **Benefits:** Avoids extra renders and improves speed when working with large data.

4. **Issue:** Duplicate State for Filtered Products

   - **Description:** "filteredProducts" is stored in state, even though it can be derived from "products", "searchTerm", and "selectedCategory".
   - **Proposed Solution:** Remove "filteredProducts" from state and calculate it using "useMemo".
   - **Benefits:** Cleaner code, avoids bugs, and reduces memory usage.

5. **Issue:** Poor Loading Feedback
   - **Description:** Only a basic “Loading…” message is shown while products load.
   - **Proposed Solution:** Add loading skeletons to show placeholder product cards while data is being fetched.
   - **Benefits:** Improves user experience and makes the app feel faster and more polished.

## Additional Recommendations

6. **Issue:** Cart Resets on Page Refresh
   - **Description:** The cart disappears on refresh because it's only stored in memory "useState".
   - **Proposed Solution:** Save and load the cart using "localStorage" with "useEffect".
   - **Benefits:** Keeps the cart even after refreshing or closing the tab, improving user experience.
