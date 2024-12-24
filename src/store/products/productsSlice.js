import { createSlice } from "@reduxjs/toolkit";

const productsList = [
  {
    id: 1,
    title: "Decorative forged bridge",
    category: "pots",
    description: "Description here...",
    discount: 50,
    initialPrice: 1000,
    img: "/product1.png",
    date: "2023-11-15",
  },
  {
    id: 2,
    title: "Flower basket",
    category: "planting",
    description: "Description here...",
    discount: 34,
    initialPrice: 150,
    img: "/product2.png",
    date: "2023-03-04",
  },
  {
    id: 3,
    title: "Aquarium lock",
    category: "protective",
    description: "Description here...",
    discount: 25,
    initialPrice: 200,
    img: "/product3.png",
    date: "2023-06-12",
  },
  {
    id: 4,
    title: "Secateurs",
    category: "tools",
    description: "Description here...",
    discount: 17,
    initialPrice: 240,
    img: "/product4.png",
    date: "2023-12-17",
  },
  {
    id: 5,
    title: "Collection for berries (plastic)",
    category: "tools",
    description: "Description here...",
    discount: 26,
    initialPrice: 35,
    img: "/product5.png",
    date: "2023-07-23",
  },
  {
    id: 6,
    title: "Gloves (black)",
    category: "tools",
    description: "Description here...",
    discount: 34,
    initialPrice: 9,
    img: "/product6.png",
    date: "2024-10-12",
  },
  {
    id: 7,
    title: "Sickle-shaped hacksaw",
    category: "tools",
    description: "Description here...",
    discount: null,
    initialPrice: 155,
    img: "/product7.png",
    date: "2023-02-16",
  },
  {
    id: 8,
    title: "Bayonet shovel",
    category: "tools",
    description: "Description here...",
    discount: null,
    initialPrice: 180,
    img: "/product8.png",
    date: "2023-03-11",
  },
  {
    id: 9,
    title: "Garden pitchfork",
    category: "tools",
    description: "Description here...",
    discount: null,
    initialPrice: 179,
    img: "/product9.png",
    date: "2024-09-25",
  },
  {
    id: 10,
    title: "Barbell",
    category: "tools",
    description: "Description here...",
    discount: null,
    initialPrice: 12,
    img: "/product10.png",
    date: "2024-01-14",
  },
  {
    id: 11,
    title: "Souvenir thermometer",
    category: "tools",
    description: "Description here...",
    discount: 18,
    initialPrice: 120,
    img: "/product11.png",
    date: "2023-01-17",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: productsList,
    filteredProducts: productsList,
  },
  reducers: {
    filterReducer: (state, action) => {
      const { from, to, check, selectedOption } = action.payload;
      console.log(check);

      state.filteredProducts = state.allProducts.filter((product) =>
        !from && !to
          ? true
          : product.initialPrice >= (from || 0) &&
            product.initialPrice <= (to || 10000)
      );
      if (check) {
        state.filteredProducts = state.filteredProducts.filter((elm) =>
          check === true ? elm.discount : true
        );
      }
      switch (selectedOption) {
        case "newest":
          state.filteredProducts = state.filteredProducts
            .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
            .filter((elm) => (action.payload === true ? elm.discount : true));
          break;
        case "high-low":
          state.filteredProducts = state.filteredProducts.sort(
              (a, b) =>
                  (b.discount
                      ? b.initialPrice * (1 - b.discount / 100)
                      : b.initialPrice) -
                  (a.discount
                      ? a.initialPrice * (1 - a.discount / 100)
                      : a.initialPrice)
          );
          break;
        case "low-high":
          state.filteredProducts = state.filteredProducts.sort(
              (a, b) =>
                  (a.discount
                      ? a.initialPrice * (1 - a.discount / 100)
                      : a.initialPrice) -
                  (b.discount
                      ? b.initialPrice * (1 - b.discount / 100)
                      : b.initialPrice)
          );
          break;
        case "default":
          state.filteredProducts = state.filteredProducts.sort(
            (a, b) => a.id - b.id
          );
          break;
      }
    },
    // filterByDiscount: (state, action) => {
    //   console.log(action);

    //   state.filteredProducts = state.allProducts.filter((product) =>
    //     action.payload == true ? product.discount : true
    //   );
    // },
    // sortedProductH: (state, action) => {
    //   state.filteredProducts = state.allProducts
    //     .sort((a, b) => a.initialPrice - b.initialPrice)
    //     .filter((elm) => (action.payload == true ? elm.discount : true));
    // },
    // sortedProductL: (state, action) => {
    //   state.filteredProducts = state.allProducts
    //     .sort((a, b) => b.initialPrice - a.initialPrice)
    //     .filter((elm) => (action.payload == true ? elm.discount : true));
    // },
    // sortedProductD: (state, action) => {
    //   state.filteredProducts = state.allProducts
    //     .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    //     .filter((elm) => (action.payload == true ? elm.discount : true));
    // },
    // reset: (state) => {
    //   state.filteredProducts = state.allProducts.sort((a, b) => a.id - b.id);
    // },
  },
});

export const selectProductById = (id) => (state) =>
  state.products.allProducts.find((product) => product.id === id);

export const selectProductByCategory = (category) => (state) =>
  state.products.filteredProducts.filter(
    (product) => product.category === category
  );

export const {
  //   filterByPrice,
  //   filterByDiscount,
  //   sortedProductH,
  //   sortedProductL,
  //   reset,
  //   sortedProductD,
  filterReducer,
} = productsSlice.actions;
export default productsSlice.reducer;
