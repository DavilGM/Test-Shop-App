import Banner from "../../components/banner/Banner";
import BottomBar from "../../components/bottom/BottomBar";
import Categorites from "../../components/categories/Categorites";
import Header from "../../components/header/Header";
import Popular from "../../components/popular/Popular";

function Home() {
    return (
        <div className="container w-full flex flex-col h-screen">
            <div className="header flex-none h-1/4 ">
                <Header />
            </div>
            <div className="relative flex-none h-1/4 ">
                <Banner />
            </div>
            <div className="flex-none ">
                <Categorites />
            </div>
            <div className="flex-none h-1/4 ">
                <Popular />
            </div>
            <div className="flex-none">
                <BottomBar />
            </div>
        </div>
    );
}

export default Home;
