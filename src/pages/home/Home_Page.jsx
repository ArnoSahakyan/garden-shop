import Header from "../../components/header/Header"

import Form from "../../components/form/Form"

import Categories from "../../components/categories/Categories.jsx";
import Sale from "../../components/sale/Sale.jsx";


function Home_Page() {
    return (
        <div>
            <div>
            <Header/>
            <Form/>
            </div>
          
       <div>
       <Categories/>
       <Sale/>
       </div>
        </div>


    )
}

export default Home_Page