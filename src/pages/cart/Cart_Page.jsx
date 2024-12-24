import './Cart_Page.scss'
import {useState} from "react";
import Modal from "../../components/modal/Modal.jsx";
import Title from "../../components/title/Title.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import CartCard from "../../components/cartCard/CartCard.jsx";
import {getTotalPrice, totalCartQuantity} from "../../store/products/productsSlice.js";
import ButtonCard from "../../components/buttonCard/ButtonCard.jsx";

export default function Cart_Page() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const cartList = useSelector((state) => state.products.cart)
    const toggleModal = () => setIsOpen(!isOpen);
    const totalProducts = useSelector(totalCartQuantity)
    const totalPrice = useSelector(getTotalPrice)

    return (
        <div className='CartPage container'>
            <Title title="Shopping cart" subtitle="Back to store" onClick={() => navigate('/')}/>
            {
                isOpen &&
                <Modal
                    isOpen={isOpen}
                    toggleModal={toggleModal}
                />
            }
            {
                !totalProducts ?
                    <div className="empty">
                        <p>Looks like you have no items in your basket currently.</p>
                        <div>
                            <ButtonCard
                                title="Continue Shopping"
                                onClick={() => navigate('/products')}
                            />
                        </div>
                    </div>

                    : <div className="Cart">
                        <div className="Cart__products">
                            {
                                cartList.map(product => (
                                    <CartCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }
                        </div>
                        <div className="Cart__order">
                            <div className="title">
                                <h2>Order Details</h2>
                                <h3>{totalProducts} Items</h3>
                                <div>
                                    <h3>Total</h3>
                                    <h2>${totalPrice}</h2>
                                </div>
                            </div>
                            <div className="form">

                            </div>
                        </div>
                    </div>
            }

            <p onClick={toggleModal}>Open</p>
        </div>
    )
}