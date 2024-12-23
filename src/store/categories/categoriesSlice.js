import {createSlice} from "@reduxjs/toolkit";

const categoriesList = [
    {id: 1, title: "Fertilizer", img: "/category1.png", link: "fertilizer"},
    {id: 2, title: "Protective products and septic tanks", img: "/category2.png", link: "protective"},
    {id: 3, title: "Planting material", img: "/category3.png", link: "planting"},
    {id: 4, title: "Tools and equipment", img: "/category4.png", link: "tools"},
    {id: 5, title: "Pots and planters", img: "/category5.jpg", link: "pots"},
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: categoriesList,
    reducers: {},
    selectors: {
        allCategoriesSelector: state => state,
        categoryNamesSelector: state => {
            return state.map(category => {
                return {title: category.title, link: category.link};
            });
        }
    }
})

export const selectCategoryName = (link) => (state) =>
    state.categories.find((category) => category.link === link).title;

export const { allCategoriesSelector, categoryNamesSelector } = categoriesSlice.selectors
export default categoriesSlice.reducer;