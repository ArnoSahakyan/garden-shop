import './CartCard.scss';
import AddCounter from "../addCounter/AddCounter.jsx";

export default function CartCard({product}) {
    const salePrice = (price, discount) => {
        return Math.ceil(price * (100 - discount) / 100);
    };

    const {id, title, count, initialPrice, discount, img} = product;

    return (
        <div className='CartCard'>
            <div className="CartCard__img">
                <img src={img} alt={title}/>
            </div>
            <div className='CartCard__info'>
                <h4>{title}</h4>
                <div className="price">
                    <AddCounter
                        count={count}
                        // handleDecrement={handleDecrement}
                        // handleIncrement={handleIncrement}
                    />
                    <h2>${discount ? salePrice(initialPrice, discount) : initialPrice}</h2>
                    {
                        discount && <h5>${initialPrice}</h5>
                    }
                </div>
            </div>
        </div>
    );
}

