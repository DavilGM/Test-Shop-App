import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <form className="flex items-center justify-center w-full mt-4">
            <div className="relative w-[95%] max-w-md sm:max-w-none">
                <input
                    type="text"
                    placeholder="Search Your Groceries"
                    className="input input-bordered rounded-full w-full pl-10 pr-16"
                />
                <button
                    type="submit"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-custom-green p-2 rounded-full"
                >
                    <CiSearch className="text-2xl" />
                </button>
            </div>
        </form>
    );
}

export default Search;
