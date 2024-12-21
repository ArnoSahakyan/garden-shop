import './Categories.scss'
import Title from "../title/Title.jsx";
import CategoryCard from "../categoryCard/CategoryCard.jsx";

const categories = [
    {title: "Fertilizer", img: "/category1.png"},
    {title: "Protective products and septic tanks", img: "/category2.png"},
    {title: "Planting material", img: "/category3.png"},
    {title: "Tools and equipment", img: "/category4.png"},
];

export default function Categories() {
    return (
        <section className="Categories container">
            <Title
                title="Categories"
                subtitle="All categories"
            />
            <div className="Categories__cards">
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
        </section>
    )
}
