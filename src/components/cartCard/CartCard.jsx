import './CartCard.scss';
import AddCounter from "../addCounter/AddCounter.jsx";
import { useDispatch } from 'react-redux';
import { addCart, deleteCart } from '../../store/products/productsSlice.js';

export default function CartCard({product, deleteProduct}) {
    const salePrice = (price, discount) => {
        return Math.ceil(price * (100 - discount) / 100);
    };

    const dispatch= useDispatch()
    const {id, title, quantity, initialPrice, discountPrice, img, totalPrice} = product;

   const handleQuantity=(id,newQuantity)=>{
    if(newQuantity<=0){
        dispatch(deleteCart(id))
    }
    else{
        const totalPrice = salePrice(initialPrice,discount) * newQuantity;

        dispatch(
            addCart({
                id,
                quantity: newQuantity,
                totalPrice: totalPrice,
            })
        );

    }
   }
    
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
                       handleDecrement={()=>handleQuantity(id,quantity-1)}
                       handleIncrement={()=>handleQuantity(id,quantity+1)}
                    />
                    <h2>${discountPrice ? discountPrice : initialPrice}</h2>
                    {
                        discountPrice && <h5>${initialPrice}</h5>
                    }
                </div>
            </div>
            <span onClick={deleteProduct}>&#x2715;</span>
        </div>
    );
}

