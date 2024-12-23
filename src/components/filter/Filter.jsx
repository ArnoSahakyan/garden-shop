import './Filter.scss'
import { useState } from "react";
import { filterByPrice } from "../../store/products/productsSlice.js";
import {useDispatch} from "react-redux";

export default function Filter(){
  const dispatch=useDispatch()

  const[priceFrom,setPriceFrom]=useState("")
  const [priceTo,setPriceTo]=useState("")
  
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

  return(
    <div className="filters">
    <div className="filter">
        <h3>Price</h3>
        <input
            type="number"
            value={priceFrom}
            placeholder='from'
            onChange={handlePriceFromChange}
        />
    </div>
    <div className="filter">
        <input
            type="number"
            placeholder='to'
            value={priceTo}
            onChange={handlePriceToChange}
        />
    </div>
</div>
  )
}