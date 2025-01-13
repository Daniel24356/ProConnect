import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

// Create Context
const ComparableContext = createContext();

// Comparable Provider
export const ComparableProvider = ({ children }) => {
  const [comparable, setComparable] = useState([]);

  // Add product to comparison list
  const addToComparable = (product) => {
    setComparable((prevComparable) => {
      if (prevComparable.length < 4) {
        return [...prevComparable, product];
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Limit Reached',
          text: 'You can only compare up to 4 products. Please remove one before adding another.',
          confirmButtonText: 'OK',
        });
        return prevComparable; // No change to the state
      }
    });
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
