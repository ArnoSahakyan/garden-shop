import './Cart_Page.scss'
import {useState} from "react";
import Modal from "../../components/modal/Modal.jsx";
import Title from "../../components/title/Title.jsx";
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';

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
            <p onClick={toggleModal}>Open</p>
        </div>
    )
}