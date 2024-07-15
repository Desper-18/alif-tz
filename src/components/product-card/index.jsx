import { Rating } from '@smastrom/react-rating';
import '../../functions/String';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div className="h-full flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="w-full overflow-hidden">
                <img
                    className="w-full aspect-video object-contain object-center"
                    src={product.image}
                    alt="blog"
                />
            </div>
            <div className="p-6 grow flex flex-col">
                <div className="text-ellipsis line-clamp-3 mb-3">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {product.category.capitalize()}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {product.title}
                    </h1>
                </div>
                <div className="flex items-center flex-wrap justify-between mt-auto">
                    <Link
                        to={`/${product.id}`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                        Learn More
                        <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                    <div className="text-gray-400 gap-1 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <Rating
                            readOnly
                            halfFillMode="svg"
                            style={{ maxWidth: 80 }}
                            value={product.rating.rate}
                        />
                        {product.rating.rate}
                    </div>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        ${product.price}
                    </span>
                </div>
            </div>
        </div>
    );
}
