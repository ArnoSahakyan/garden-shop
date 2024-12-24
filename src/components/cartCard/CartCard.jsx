import './CartCard.scss';
import AddCounter from "../addCounter/AddCounter.jsx";

export default function CartCard({product, deleteProduct}) {
    const salePrice = (price, discount) => {
        return Math.ceil(price * (100 - discount) / 100);
    };

    const {id, title, quantity, initialPrice, discount, img} = product;

    return (
        <div className='CartCard'>
            <div className="CartCard__img">
                <img src={img} alt={title}/>
            </div>
            <div className='CartCard__info'>
                <h4>{title}</h4>
                <div className="price">
                    <AddCounter
                        count={quantity}
                        // handleDecrement={handleDecrement}
                        // handleIncrement={handleIncrement}
                    />
                    <h2>${discount ? salePrice(initialPrice, discount) : initialPrice}</h2>
                    {
                        discount && <h5>${initialPrice}</h5>
                    }
                </div>
            </div>
            <span onClick={deleteProduct}>&#x2715;</span>
        </div>
    );
}

