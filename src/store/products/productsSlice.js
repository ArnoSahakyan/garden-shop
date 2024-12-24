import { createSlice } from '@reduxjs/toolkit';

const productsList = [
	{
		id: 1,
		title: 'Decorative forged bridge',
		category: '',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: 50,
		initialPrice: 1000,
		img: '/product1.png',
	},
	{
		id: 2,
		title: 'Flower basket',
		category: 'planting',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: 34,
		initialPrice: 150,
		img: '/product2.png',
	},
	{
		id: 3,
		title: 'Aquarium lock',
		category: 'protective',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: 25,
		initialPrice: 200,
		img: '/product3.png',
	},
	{
		id: 4,
		title: 'Secateurs',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: 17,
		initialPrice: 240,
		img: '/product4.png',
	},
	{
		id: 5,
		title: 'Collection for berries (plastic)',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: 26,
		initialPrice: 35,
		img: '/product5.png',
	},
	{
		id: 6,
		title: 'Gloves (black)',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: 34,
		initialPrice: 9,
		img: '/product6.png',
	},
	{
		id: 7,
		title: 'Sickle-shaped hacksaw',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: null,
		initialPrice: 155,
		img: '/product7.png',
	},
	{
		id: 8,
		title: 'Bayonet shovel',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: null,
		initialPrice: 180,
		img: '/product8.png',
	},
	{
		id: 9,
		title: 'Garden pitchfork',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: null,
		initialPrice: 179,
		img: '/product9.png',
	},
	{
		id: 10,
		title: 'Barbell',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: null,
		initialPrice: 12,
		img: '/product10.png',
	},
	{
		id: 11,
		title: 'Souvenir thermometer',
		category: 'tools',
        description: 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.\n' +
            'This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.\n' +
            'Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.',
		discount: 18,
		initialPrice: 120,
		img: '/product11.png',
	},
];

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		allProducts: productsList,
		filteredProducts: productsList,
	},
	reducers: {
		filterByPrice: (state, action) => {
			const { from, to } = action.payload;
			state.filteredProducts = state.allProducts.filter(
				(product) =>
					product.initialPrice >= (from || 0) &&
					product.initialPrice <= (to || 10000)
			);
		},
       filterByDiscount:(state)=>{
        state.filteredProducts=state.allProducts.filter(product=>product.discount)
       },
			 sortedProductH:(state)=>{
				state.filteredProducts=state.allProducts.sort((a,b)=>a.initialPrice-b.initialPrice)
			 },
			 sortedProductL:(state)=>{
				state.filteredProducts=state.allProducts.sort((a,b)=>b.initialPrice-a.initialPrice)
			 },
			 reset:(state)=>{

				state.filteredProducts=state.allProducts
			 }

	},
});

export const selectProductById = (id) => (state) =>
	state.products.allProducts.find((product) => product.id === id);

export const selectProductByCategory = (category) => (state) =>
	state.products.filteredProducts.filter((product) => product.category === category);

export const { filterByPrice,filterByDiscount,sortedProductH,sortedProductL,reset } = productsSlice.actions;
export default productsSlice.reducer;
