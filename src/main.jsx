import {createRoot} from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home_Page from "./pages/home/Home_Page.jsx";
import Layout from "./components/layout/Layout.jsx";
import Error_Page from "./pages/error/Error_Page.jsx";
import Categories_Page from "./pages/categories/Categories_Page.jsx";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import Sales_Page from "./pages/sales/Sales_Page.jsx";
import Products_Page from "./pages/products/Products_Page.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '', element: <Home_Page/>},
            {path: 'categories', element: <Categories_Page/>},
            {path: 'products', element: <Products_Page/>},
            {path: 'sales', element: <Sales_Page/>},
            {path: '*', element: <Error_Page/>}
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
)
