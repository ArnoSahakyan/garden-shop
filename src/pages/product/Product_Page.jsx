import './Product_Page.scss'
import {useParams} from "react-router-dom";
import {selectProductById} from "../../store/products/productsSlice.js";
import {useSelector} from "react-redux";
import ButtonCard from "../../components/buttonCard/ButtonCard.jsx";
import {useState} from "react";

export default function Product_Page() {
    const {id} = useParams();
    const product = useSelector(selectProductById(Number(id)));
    const {title, description, initialPrice, discount, img} = product;
    const [isExpanded, setIsExpanded] = useState(false);

    const salePrice = (price, discount) => {
        return Math.ceil(price * (100 - discount) / 100);
    };
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="ProductPage container">
            <div className="ProductPage__img">
                <img src={img} alt={title}/>
            </div>
            <div className="ProductPage__info">
                <h2>{title}</h2>
                <div className="price">
                    <h2>${discount ? salePrice(initialPrice, discount) : initialPrice}</h2>
                    {
                        discount && <h5>${initialPrice}</h5>
                    }
                    {
                        discount &&
                        <div className="discount">
                            <p>-{discount}%</p>
                        </div>
                    }
                </div>
                <div className="action">
                    <div className="btn">
                        <ButtonCard title="Add to cart"/>
                    </div>
                </div>
                <h4>Description</h4>
                <p className={`description ${isExpanded ? 'expanded' : ''}`}>
                    {description}
                </p>
                <a className="read-more" onClick={toggleReadMore}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </a>
            </div>
        </div>
    );
}