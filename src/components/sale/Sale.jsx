import './Sale.scss'
import Title from "../title/Title.jsx";
import ProductCard from "../productCard/ProductCard.jsx";

const sales = [
    {title: "Decorative forged bridge", discount: 50, initialPrice: 1000, salePrice: 500, img: "/product1.png"},
    {title: "Flower basket", discount: 34, initialPrice: 150, salePrice: 100, img: "/product1.png"},
    {title: "Aquarium lock", discount: 25, initialPrice: 200, salePrice: 150, img: "/product1.png"},
    {title: "Secateurs", discount: 17, initialPrice: 240, salePrice: 199, img: "/product1.png"},
];

export default function Sale() {
    return (
        <section className="Sale container">
            <Title
                title="Sale"
                subtitle="All sales"
            />
            <div className="Sale__cards">
                {
                    sales.map((item, index) => (
                        <ProductCard
                            key={index}
                            title={item.title}
                            salePrice={item.salePrice}
                            initialPrice={item.initialPrice}
                            discount={item.discount}
                            image={item.img}
                        />
                    ))
                }
            </div>
        </section>
    )
}
