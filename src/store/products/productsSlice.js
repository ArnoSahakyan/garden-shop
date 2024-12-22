import {createSlice} from "@reduxjs/toolkit";

const productsList = [
    {id: 1, title: "Decorative forged bridge", category:'', discount: 50, initialPrice: 1000, img: "/product1.png"},
    {id: 2, title: "Flower basket", category:'planting', discount: 34, initialPrice: 150, img: "/product2.png"},
    {id: 3, title: "Aquarium lock", category:'protective', discount: 25, initialPrice: 200, img: "/product3.png"},
    {id: 4, title: "Secateurs", category:'tools', discount: 17, initialPrice: 240, img: "/product4.png"},
    {id: 5, title: "Collection for berries (plastic)", category:'tools', discount: 26, initialPrice: 35, img: "/product5.png"},
    {id: 6, title: "Gloves (black)", category:'tools', discount: 34, initialPrice: 9, img: "/product6.png"},
    {id: 7, title: "Sickle-shaped hacksaw", category:'tools', discount: null, initialPrice: 155, img: "/product7.png"},
    {id: 8, title: "Bayonet shovel", category:'tools', discount: null, initialPrice: 180, img: "/product8.png"},
    {id: 9, title: "Garden pitchfork", category:'tools', discount: null, initialPrice: 179, img: "/product9.png"},
    {id: 10, title: "Barbell", category:'tools', discount: null, initialPrice: 12, img: "/product10.png"},
    {id: 11, title: "Souvenir thermometer", category:'tools', discount: 18, initialPrice: 120, img: "/product11.png"},
];

const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts:productsList,
        filteredProducts: productsList,
    },
    reducers: {
        filterByPrice:(state,action)=>{
            
            const {from,to}=action.payload
            state.filteredProducts=state.allProducts.filter((product)=>product.initialPrice>=(from || 0)&&product.initialPrice<=(to || 10000))

        },
    },
    
})

export const { allProducts, filteredProducts } = productsSlice.selectors
export const { filterByPrice } = productsSlice.actions;
export default productsSlice.reducer;
