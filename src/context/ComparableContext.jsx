import { createContext, useContext, useState } from "react";

// Create Context
const ComparableContext = createContext();

// Comparable Provider
export const ComparableProvider = ({ children }) => {
  const [comparable, setComparable] = useState([]);

  // Add product to comparison list
  const addToComparable = (product) => {
    setComparable((prevComparable) => [...prevComparable, product]);
  };

  // Remove product from comparison list
  const removeFromComparable = (id) => {
    setComparable((prevComparable) => prevComparable.filter((item) => item.id !== id));
  };

  return (
    <ComparableContext.Provider value={{ comparable, addToComparable, removeFromComparable }}>
      {children}
    </ComparableContext.Provider>
  );
};

// Custom Hook to Use Comparable
export const useComparable = () => useContext(ComparableContext);
