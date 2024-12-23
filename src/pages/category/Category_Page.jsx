import Title from "../../components/title/Title.jsx";
import {useSelector} from "react-redux";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Filter from "../../components/filter/Filter.jsx";
import {categoryNamesSelector} from "../../store/categories/categoriesSlice.js";
import {useParams} from "react-router-dom";


export default function Category_Page() {
    const {title} = useParams()
    const categories = useSelector(categoryNamesSelector);
    const currentCategory = categories.find(elem => elem.link === title).title;
    const filtered = useSelector((state) => state.products.filteredProducts).filter(elem => elem.category === title);

    return (
        <div className="Sale container">
            <Title title={currentCategory}/>
            <Filter/>
            <div className="Sale__cards">
                {
                    filtered.length > 0
                        ? filtered.map(item => (
                            <ProductCard
                                key={item.id}
                                product={item}
                            />
                        ))
                        : <h2 className="no-product">No products available</h2>
                }
            </div>
        </div>

    )
}
