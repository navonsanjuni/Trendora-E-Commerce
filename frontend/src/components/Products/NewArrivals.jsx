import React, { use, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const newArrivals = [
        {
            _id: '1',
            name: 'Product 1',
            price: 29.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jecket"
                },
            ],
        },

        {
            _id: '2',
            name: 'Product 2',
            price: 39.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Casual Shirt"
                },
            ],
        },
        {
            _id: '3',
            name: 'Product 3',
            price: 49.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Running Shoes"
                },
            ],
        },
        {
            _id: '4',
            name: 'Product 4',
            price: 59.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Elegant Watch"
                },
            ],
        },
        {
            _id: '5',
            name: 'Product 5',
            price: 69.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Leather Wallet"
                },
            ],
        },
        {
            _id: '6',
            name: 'Product 6',
            price: 79.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish Sunglasses"
                },
            ],
        },
        {
            _id: '7',
            name: 'Product 7',
            price: 89.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Trendy Backpack"
                },
            ],
        },
        {
            _id: '8',
            name: 'Product 8',
            price: 99.99,
            image: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Fashionable Hat"
                },
            ],
        },
    ]

    useEffect(() => {
        const container = scrollRef.current;
        if(container){
            container.addEventListener("scroll", updateScrollButtons);
        }
    })
    return (
        <section>
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className="text-3xl mb-4 font-bold">Explore New Arrivals</h2>
                <p className="text-gray-600 text-lg mb-8">
                    Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
                </p>

                {/* Scroll Button */}
                <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                    <button className="p-2 rounded border bg-white text-black">
                        <FiChevronLeft className='text-2xl' />
                    </button>
                    <button className="p-2 rounded border bg-white text-black">
                        <FiChevronRight className='text-2xl' />
                    </button>

                </div>
            </div>

            {/* Scrollable Content */}
            <div ref={scrollRef} className="container mx-auto overflow-scroll flex space-x-6 relative">
                {newArrivals.map((product) => (
                    <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                        <img
                            src={product.image[0]?.url}
                            alt={product.image[0].altText || product.name}
                            className='w-full h-[500px] rounded-lg object-cover'
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                            <Link to={`/product/${product._id}`}
                                className="block">
                                <h4 className="font-medium ">{product.name}</h4>
                                <p className="mt-1">${product.price}</p>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default NewArrivals
