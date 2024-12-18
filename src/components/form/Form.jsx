import './Form.scss';
import natural from '/natural.jpeg';

export default function Form() {
	return (
			<div className="container form-bg">
        <h1>5% off on the first order</h1>
				<div className="row-form">
        
					<img src={natural} alt="" />
					<form action="">
						<input type="text" placeholder="Name" required />
						<input
							type="tel"
							placeholder="Phone number"
							pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							required
						/>
						<input type="email" placeholder="Email" required />
						<button>Get a discount</button>
					</form>
				</div>
			</div>
	);
}
