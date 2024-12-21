import ButtonBanner from '../buttonBanner/ButtonBanner';

import './Form.scss';
import natural from '/natural.jpeg';

export default function Form() {
	return (
			<div className="container form-bg">
        <h1>5% off on the first order</h1>
				<div className="row-form">
        <div className='img-container'>
				<img src={natural} alt="" />
				</div>

					<form action="">
						<input type="text" placeholder="Name" required />
						<input
							type="tel"
							placeholder="Phone number"
							pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							required
						/>
						<input type="email" placeholder="Email" required />
						<ButtonBanner className="ButtonBanner" title="Get a discount"/>
					</form>
				</div>
			</div>
	);
}
