import './ProductCard.scss';
import {Link} from "react-router-dom";
import ButtonCard from "../buttonCard/ButtonCard.jsx";

export default function ProductCard({product}) {
    const salePrice = (price, discount) => {
        return Math.ceil(price * (100 - discount) / 100);
    };
    const {id, title, initialPrice, discount, img} = product;
    return (
        <div className="ProductCard">
            <div className="ProductCard__image">
                {
                    discount &&
                    <div className="discount">
                        <p>-{discount}%</p>
                    </div>
                }
                <div className="btn">
                    <ButtonCard
                        title="Add to cart"
                    />
                </div>
                <img src={img} alt={title}/>
            </div>
            <div className="ProductCard__title">
                <Link to={`/products/${id}`}>{title}</Link>
                <div className="price">

                    <h2>${salePrice ? salePrice : initialPrice}</h2>
                    <h5>${initialPrice}</h5>

                    <h2>${discount ? salePrice(initialPrice, discount) : initialPrice}</h2>
                    {
                        discount && <h5>${initialPrice}</h5>
                    }
                </div>
            </div>
        </div>
    );
}
