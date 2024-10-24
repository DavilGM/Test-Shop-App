import { useState } from 'react';
import { FaHome, FaHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function BottomBar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleTabClick = (path: string) => {
        setActiveTab(path);
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-custom-green-gray text-white flex justify-around p-4">
            <Link
                to="/"
                className={`flex flex-col items-center ${activeTab === '/' ? 'text-custom-green' : 'text-black'}`}
                onClick={() => handleTabClick('/')}
            >
                <FaHome className="text-2xl" />
                <span>Home</span>
            </Link>
            <Link
                to="/favorite"
                className={`flex flex-col items-center ${activeTab === '/favorite' ? 'text-custom-green' : 'text-black'}`}
                onClick={() => handleTabClick('/favorite')}
            >
                <FaHeart className="text-2xl " />
                <span>Favorite</span>

            </Link>
        </div>
    );
}

export default BottomBar;
