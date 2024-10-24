import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import HeaderFavorite from '../../components/header/HeaderFavorite';
import { Products } from '../../Types';
import { FaPlusSquare, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

function Favorite() {
    const favoriteProducts = useSelector((state: RootState) => state.favorites.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToggleFavorite = (product: Products) => {
        if (favoriteProducts.find(fav => fav.id === product.id)) {
            dispatch(removeFavorite(product.id));
        } else {
            dispatch(addFavorite(product));
        }
    };

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
        <div className="container flex flex-col h-screen">
            <div className="flex-none mb-16">
                <HeaderFavorite />
            </div>
            <div className="favorite-products mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favoriteProducts.map(product => (
                    <div
                        key={product.id}
                        className="product-card relative p-4 bg-white rounded-lg shadow-md cursor-pointer"
                        onClick={() => navigate(`/detail/${product.id}`)}
                    >
                        <CiHeart
                            className={`absolute top-2 right-2 text-5xl bg-custom-green-gray-gray p-1 rounded-full shadow-lg cursor-pointer ${favoriteProducts.find(fav => fav.id === product.id) ? 'text-red-500' : 'text-custom-green-text'
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
                            <p className="text-sm text-custom-green font-bold ">
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

export default Favorite;
