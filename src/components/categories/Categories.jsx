import './Categories.scss'
import Title from "../title/Title.jsx";
import CategoryCard from "../categoryCard/CategoryCard.jsx";

const categories = [
    {title: "Fertilizer", img: "/plant.png"},
    {title: "Protective products and septic tanks", img: "/plant.png"},
    {title: "Planting material", img: "/plant.png"},
    {title: "Tools and equipment", img: "/plant.png"},
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
