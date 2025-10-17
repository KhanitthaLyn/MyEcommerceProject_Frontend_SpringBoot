import ProductCard from "./shared/ProductCard";

const products = [
    {
        productName: "Camera Canon EOS 1500D",
        image: "https://www.zoomcamera.net/wp-content/uploads/2021/07/Canon-DSLR-Camera-EOS-1500D-Black-Bundled-18-55mm-1.jpg",
        productDescription: "The Canon EOS 1500D is an entry-level DSLR camera with a 24.1MP APS-C CMOS sensor, Full HD video recording, and a built-in feature guide for beginners. It includes Wi-Fi and NFC connectivity for easy sharing, an optical viewfinder for an authentic DSLR experience, and user-friendly auto modes alongside full manual control. ",
        price: 1520.0,
        specialPrice: 1370.0,
    },
    {
        productName: "Lip care Products",
        image: "https://media.istockphoto.com/id/2062546752/photo/open-tube-of-lip-gloss-and-applicator-on-white-background-pink-liquid-lipstick.webp?b=1&s=612x612&w=0&k=20&c=ASUJGW8vzSVU8Ni6Wl40JJRXB9LDaW1au2fVRpfcV2w=",
        productDescription: "Lip care products include a variety of options like balms, masks, oils, and tinted balms that are used to moisturize and protect lips, which lack oil glands and can't retain moisture as effectively as the rest of the skin. Popular products include balms like Burt's Bees and Aquaphor, overnight masks from brands like Laneige, hydrating lip oils such as Fenty Skin's or Rhode's, and products with SPF to protect from the sun. ",
        price: 12.0,
        specialPrice: 9.0,
    },
    {
        productName: "Milk",
        image: "https://media.istockphoto.com/id/155373465/photo/assortment-of-most-common-dairy-products-on-white-backdrop.webp?b=1&s=612x612&w=0&k=20&c=3Li0_h03ZGpItFO_fvDz1KBSgGEoWdGqhnDKPYTzCes=",
        productDescription: "Milk offers a wide range of health benefits due to its rich nutritional content, including calcium and vitamin D for strong bones and teeth, high-quality protein for muscle growth and repair, and essential nutrients like riboflavin, vitamin B12, potassium, phosphorus, and zinc.",
        price: 10.0,
        specialPrice: 8.9,
    }
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header */}
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>

            {/* About Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg text-gray-700 mb-4">
                        Welcome to MY SHOP! We provide high-quality laptops and tech products at competitive prices. Our mission is to deliver the best customer experience with a focus on innovation, reliability, and style.
                    </p>
                    <p className="text-lg text-gray-700">
                        Whether you're a student, professional, or creative, our products are designed to suit all your needs. Explore our collection and find the perfect device for you.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src="https://media.istockphoto.com/id/1311600080/photo/small-shipping-packages-on-a-notebook-with-the-inscription-online-shopping.webp?b=1&s=612x612&w=0&k=20&c=MR8ShlWZcazJfazHhXrhiFa4lC404EIPNGycvU6WpXk="
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Products Section */}
            <div className="py-7 space-y-8">
                <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                    Our Products
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <ProductCard 
                        key={index}
                        image={product.image}
                        productName={product.productName}
                        productDescription={product.productDescription}
                        specialPrice={product.specialPrice}
                        price={product.price}
                        about
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
