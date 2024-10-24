import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Products } from '../../Types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function DetailProduct() {
    const { id } = useParams<{ id: string }>();
    const productId = parseInt(id!, 10);

    const favoriteProduct = useSelector((state: RootState) =>
        state.favorites.products.find((product: Products) => product.id === productId)
    );

    const product = favoriteProduct || useSelector((state: RootState) =>
        state.products.products.find((product: Products) => product.id === productId)
    );

    if (!product) return <p>Product not exist.</p>;

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="container mx-auto m-4 p-4">
            <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <div className="flex items-center mt-2">
                {renderStars(product.rating)}
            </div>
            <p className="text-lg text-custom-green mt-2">${product.price}/kg</p>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-4">Total price: ${product.price}</p>
            <button className="mt-4 p-2  bg-custom-green text-white rounded-full">Add to Cart</button>
        </div>
    );
}

export default DetailProduct;
