import Title from "../../components/title/Title.jsx";
import {useSelector} from "react-redux";
import {allProductsSelector} from "../../store/products/productsSlice.js";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import { Contact } from "../../components/contact/Contact.jsx";

export default function Products_Page() {
    const products = useSelector(allProductsSelector);
    return (
        <div className="Sale container">

            <Title title="All Products" />
            <div className="Sale__cards">
                {
                    products.map(item => (
                        <ProductCard
                            key={item.id}
                            product={item}
                        />
                    ))
                }
            </div>
            <Contact/>
        </div>
      
    )
}
