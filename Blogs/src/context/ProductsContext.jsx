import { createContext, useContext, useState, useMemo } from 'react';
import {productsData} from "../data/data"
// Create a context
const ProductsContext = createContext();



// Provider component
// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [products] = useState(productsData);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, Infinity],
    rating: 0,
    color: '',
    search: '',
    sortBy: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const inCategory = filters.category ? product.category === filters.category : true;
      const inPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const hasRating = product.rating >= filters.rating;
      const inColor = filters.color ? product.color === filters.color : true;
      const matchesSearch = filters.search ? product.title.toLowerCase().includes(filters.search) : true;
      return inCategory && inPriceRange && hasRating && inColor && matchesSearch;
    });

    if (filters.sortBy === 'low-to-high') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'high-to-low') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, filters]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <ProductsContext.Provider value={{ products: paginatedProducts, setFilters, currentPage, setCurrentPage, totalPages }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to use the ProductsContext
// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  return useContext(ProductsContext);
};
