import { IoIosArrowBack } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Search from "./Search";

function Header() {
    return (
        <div className="fixed top-0 left-0 bg-custom-green w-full flex-wrap p-4 z-10 ">
            <div className="flex items-center justify-between text-white">
                <div className="flex items-center justify-center">
                    <div className="text-xl bg-white bg-opacity-20 p-2 rounded-full shadow-lg">
                        <IoIosArrowBack />
                    </div>
                </div>
                <div className="flex items-center">
                    <CiLocationOn className="text-2xl font-bold" />
                    <span className="text-xl font-light ml-2">Location</span>
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-xl bg-white bg-opacity-20 p-2 rounded-full shadow-lg">
                        <CiBellOn />
                    </div>
                </div>
            </div>
            <div className="mt-2 text-center text-white font-bold text-lg">
                Baridhara, Dhaka
            </div>
            <Search />
        </div>
    );
}

export default Header;
