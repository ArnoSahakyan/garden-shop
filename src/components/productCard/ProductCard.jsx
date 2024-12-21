import './ProductCard.scss';
import {Link} from "react-router-dom";
import ButtonCard from "../buttonCard/ButtonCard.jsx";

export default function ProductCard({title, initialPrice, salePrice, discount, image}) {
    return (
        <div className="ProductCard">
            <div className="ProductCard__image">
                <div className="discount">
                    <p>-{discount}%</p>
                </div>
                <div className="btn">
                    <ButtonCard
                        title="Add to cart"
                    />
                </div>
                <img src={image} alt={title}/>
            </div>
            <div className="ProductCard__title">
                <Link to={title}>{title}</Link>
                <div className="price">
                    <h2>${salePrice ? salePrice : initialPrice}</h2>
                    <h5>${initialPrice && initialPrice}</h5>
                </div>
            </div>
        </div>
    );
}
