import './Sale.scss'
import Title from "../title/Title.jsx";
import ProductCard from "../productCard/ProductCard.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {discountedProductsSelector} from "../../store/products/productsSlice.js";

export default function Sale() {
    const navigate = useNavigate();
    const sales = useSelector(discountedProductsSelector);

    return (
        <section className="Sale container">
            <Title
                title="Sale"
                subtitle="All sales"
                onClick={() => navigate('/sales')}
            />
            <div className="Sale__cards">
                {
                    sales.slice(0, 4).map((item, index) => (
                        <ProductCard
                            key={index}
                            product={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
