import React, { useState, useEffect } from "react";
import { products } from "../../utils/product-data";
import {
  Categories,
  ItemTypes,
  Sizes,
  Tags,
  Colors,
} from "../../utils/enums/index";
import {
  Box,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import CategoryFilter from "./subcomponents/CategoryFilter";
import ProductTypeFilter from "./subcomponents/ProductTypeFilter";
import PriceRangeFilter from "./subcomponents/PriceRangeFilter";
import SortFilter from "./subcomponents/SortFilter";
import ColorFilter from "./subcomponents/ColorFilter";
import ProductGrid from "./subcomponents/ProductGrid";

const ProductListing = () => {
  const [sortBy, setSortBy] = useState("lowToHigh");
  const [priceRange, setPriceRange] = useState([10, 600]);
  const [productTypes, setProductTypes] = useState({
    [ItemTypes.TOPS]: true,
    [ItemTypes.BOTTOMS]: false,
    [ItemTypes.HATS]: false,
    [ItemTypes.SHOES]: false,
    [ItemTypes.ACCESSORIES]: false,
  });

  const [categories, setCategories] = useState({
    [Categories.MEN]: true,
    [Categories.WOMEN]: false,
    [Categories.BOYS]: false,
    [Categories.GIRLS]: false,
    [Categories.BABIES]: false,
  });

  const [sizes, setSizes] = useState({
    [Sizes.SMALL]: false,
    [Sizes.MEDIUM]: true,
    [Sizes.LARGE]: false,
    [Sizes.EXTRA_LARGE]: false,
    [Sizes.XXL]: false,
  });

  const [tags, setTags] = useState({
    [Tags.NEW]: false,
    [Tags.SALE]: false,
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const newFilteredProducts = products
      .filter((product) => {
        const categoryMatch = categories[product.category];
        const productTypeMatch = productTypes[product.itemType];
        const priceMatch =
          product.price >= priceRange[0] && product.price <= priceRange[1];
        const colorMatch =
          !selectedColor || product.colors.includes(selectedColor);

        return (
          categoryMatch &&
          productTypeMatch &&
          priceMatch &&
          colorMatch
        );
      })
      .sort((a, b) => {
        if (sortBy === "lowToHigh") {
          return a.price - b.price;
        } else if (sortBy === "highToLow") {
          return b.price - a.price;
        }
        return 0;
      });

    setFilteredProducts(newFilteredProducts);
  }, [categories, productTypes, sizes, priceRange, selectedColor, sortBy]);

  return (
    <>
      <Box display="flex" padding={2} mt={10}>
        <Box
          width="250px"
          padding={2}
          sx={{
            position: "sticky",
            top: "80px",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6">Filters</Typography>
          <Divider />
          <CategoryFilter categories={categories} setCategories={setCategories} />
          <Divider />
          <ProductTypeFilter productTypes={productTypes} setProductTypes={setProductTypes} />
          <Divider />
          <PriceRangeFilter priceRange={priceRange} setPriceRange={setPriceRange} />
          <Divider />
          <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
          <Divider />
          <ColorFilter selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          <Button variant="contained">Clear Filters</Button>
        </Box>
        <Divider />
        <ProductGrid filteredProducts={filteredProducts} />
      </Box>
    </>
  );
};

export default ProductListing;
