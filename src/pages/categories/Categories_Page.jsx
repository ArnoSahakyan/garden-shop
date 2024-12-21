import './Categories_Page.scss'
import Title from "../../components/title/Title.jsx";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";

const categories = [
    {title: "Fertilizer", img: "/category1.png"},
    {title: "Protective products and septic tanks", img: "/category2.png"},
    {title: "Planting material", img: "/category3.png"},
    {title: "Tools and equipment", img: "/category4.png"},
    {title: "Pots and planters", img: "/category5.jpg"},
];

export default function Categories_Page() {
    return (
        <div className="CategoriesPage container">
            <Title
                title="Categories"
            />
            <div className="CategoriesPage__cards">
                {
                    categories.map((item, index) => (
                        <CategoryCard
                            key={index}
                            title={item.title}
                            image={item.img}
                        />
                    ))
                }
            </div>
        </div>
    )
}