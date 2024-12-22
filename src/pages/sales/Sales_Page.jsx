import Title from "../../components/title/Title.jsx";
import {useSelector} from "react-redux";
import {discountedProductsSelector} from "../../store/products/productsSlice.js";
import ProductCard from "../../components/productCard/ProductCard.jsx";

export default function Sales_Page() {
    const sales = useSelector(discountedProductsSelector);
    return (
        <div className="Sale container">
            <Title title="Discounted items"/>
            <div className="Sale__cards">
                {
                    sales.map((item, index) => (
                        <ProductCard
                            key={index}
                            product={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}