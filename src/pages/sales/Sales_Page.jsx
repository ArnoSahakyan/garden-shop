import Title from "../../components/title/Title.jsx";
import {useSelector} from "react-redux";
import ProductCard from "../../components/productCard/ProductCard.jsx";

export default function Sales_Page() {
    const discountedProducts = useSelector((state) =>
        state.products.allProducts.filter((product) => product.discount)
    );
    return (
        <div className="Sale container">
            <Title title="Discounted items"/>
            <div className="Sale__cards">
                {
                    discountedProducts.map((item, index) => (
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