import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/favoritesSlice';
import { fetchProducts } from '../../store/productsSlice';
import { RootState, AppDispatch } from '../../store/store';
import { Products } from '../../Types';
import { FaPlusSquare, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

function Popular() {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);
    const favoriteProducts = useSelector((state: RootState) => state.favorites.products);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleToggleFavorite = (product: Products) => {
        dispatch(toggleFavorite(product));
    };

    const isFavorite = (id: number) => favoriteProducts.some(product => product.id === id);

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
        <div className="popular mt-4">
            <h2 className="text-xl font-bold mb-4">Popular</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="product-card relative p-4 bg-white rounded-lg shadow-md cursor-pointer"
                        onClick={() => navigate(`/detail/${product.id}`)}
                    >
                        <CiHeart
                            className={`absolute top-2 right-2 text-5xl p-1 rounded-full shadow-lg cursor-pointer ${isFavorite(product.id) ? 'text-red-500' : 'bg-custom-green-gray-gray text-custom-green-text'
                                }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleToggleFavorite(product);
                            }}
                        />
                        <img src={product.img} alt={product.name} className="w-full h-32 object-cover rounded-t-lg" />
                        <div className="p-2 bg-white rounded-b-lg">
                            <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                            <div className="flex items-center">
                                {renderStars(product.rating)}
                            </div>
                            <p className="text-sm font-bold text-custom-green">
                                ${product.price}
                                <span className="text-gray-600 font-normal text-xs">/KG</span>
                            </p>
                            <button className="absolute bottom-0 right-0 bg-white text-custom-green">
                                <FaPlusSquare className="text-5xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Popular;
