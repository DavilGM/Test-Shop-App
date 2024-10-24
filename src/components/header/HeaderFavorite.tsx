
import { IoIosArrowBack } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";

function HeaderFavorite() {
    return (
        <div className="fixed top-0 left-0 bg-custom-green w-full flex-wrap p-4 z-10 ">
            <div className="flex items-center justify-between text-white">
                <div className="flex items-center justify-center">
                    <div className="text-xl bg-white bg-opacity-20 p-2 rounded-full shadow-lg">
                        <IoIosArrowBack />
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-xl font-bold ml-2">Fruits</span>
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-xl bg-white bg-opacity-20 p-2 rounded-full shadow-lg">
                        <CiBellOn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderFavorite