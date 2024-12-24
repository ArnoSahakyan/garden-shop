import './Cart_Page.scss'
import {useState} from "react";
import Modal from "../../components/modal/Modal.jsx";
import Title from "../../components/title/Title.jsx";
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import CartCard from "../../components/cartCard/CartCard.jsx";

const product = {
    id: 1,
    title: "Decorative forged bridge",
    category: "pots",
    description: "Description here...",
    discount: 50,
    initialPrice: 1000,
    img: "/product1.png",
    count: 3,
    date: "2023-11-15",
}

export default function Cart_Page() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const cartList=useSelector((state)=>state.products.cart)
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className='Cart container'>
            <Title title="Shopping cart" subtitle="Back to store" onClick={() => navigate('/')}/>

            {
                isOpen &&
                <Modal
                    isOpen={isOpen}
                    toggleModal={toggleModal}
                />
            }
            <div className="Cart__products">
                <CartCard
                    product={product}
                />
                <CartCard
                    product={product}
                />
                <CartCard
                    product={product}
                />
            </div>
            <div className="Cart__form">
                <div className="title">
                    <h2>Order Details</h2>
                </div>
            </div>
            <p onClick={toggleModal}>Open</p>
        </div>
    )
}