import Header from '../../components/header/Header';

import Form from '../../components/form/Form';

import Categories from '../../components/categories/Categories.jsx';
import Sale from '../../components/sale/Sale.jsx';
import { Conact } from '../../components/contact/Contact.jsx';

function Home_Page() {
	return (
		<div>
			<div>
				<Header />
				<Categories />
				<Form />
			</div>

			<div>
				<Sale />
			</div>
            <div>
                <Conact/>
            </div>
		</div>
	);
}

export default Home_Page;
