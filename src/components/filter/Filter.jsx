import './Filter.scss';
import { useState } from 'react';
import {
	filterByPrice,
	filterByDiscount,
	sortedProductH,
	sortedProductL,
	reset,
} from '../../store/products/productsSlice.js';
import { useDispatch } from 'react-redux';

export default function Filter() {
	const dispatch = useDispatch();

	const [priceFrom, setPriceFrom] = useState('');
	const [priceTo, setPriceTo] = useState('');
	const [check, setCheck] = useState(false);
	const [selectedOption, setSelectedOption] = useState('default');

	const handlePriceFromChange = (e) => {
		const from = Number(e.target.value) || 0;
		setPriceFrom(e.target.value);
		dispatch(filterByPrice({ from, to: priceTo }));
	};

	const handlePriceToChange = (e) => {
		const to = Number(e.target.value) || 10000;
		setPriceTo(e.target.value);
		dispatch(filterByPrice({ from: priceFrom, to }));
	};

	const FilterCheck = () => {
		let newCheck = !check;
		setCheck(newCheck);
		if (newCheck) {
			dispatch(filterByDiscount());
		} else {
			dispatch(filterByPrice({ from: 0, to: 10000 }));
		}
	};

	const applySorting = (value) => {
		if (value === 'high-low') {
			dispatch(sortedProductH());
		} else if (value === 'low-high') {
			dispatch(sortedProductL());
		}
	};

	const resetFilters = () => {
		setPriceFrom('');
		setPriceTo('');
		setCheck(false);
		setSelectedOption('default');
		dispatch(reset());
	};

	const handleOptionChange = (e) => {
		const value = e.target.value;
		setSelectedOption(value);

		if (value === 'default') {
			resetFilters();
		} else {
			applySorting(value);
		}
	};

	return (
		<div className="filters">
			<div className="filter">
				<h3>Price</h3>
				<input
					type="number"
					value={priceFrom}
					placeholder="from"
					onChange={handlePriceFromChange}
				/>
			</div>
			<div className="filter">
				<input
					type="number"
					placeholder="to"
					value={priceTo}
					onChange={handlePriceToChange}
				/>
			</div>
			<div className="filter">
				<label className="custom-checkbox">
					Discounted Items
					<input type="checkbox" onChange={FilterCheck} checked={check} />
					<span></span>
				</label>
			</div>
			<div className="filter">
				<div className="custom-select">
					<select value={selectedOption} onChange={handleOptionChange}>
						<option value="default">by default</option>
						<option value="newest">newest</option>
						<option value="high-low">price: high-low</option>
						<option value="low-high">price: low-high</option>
					</select>
				</div>
			</div>
		</div>
	);
}
