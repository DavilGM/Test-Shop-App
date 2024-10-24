import '@arco-design/web-react/dist/css/arco.css';
import { Carousel } from '@arco-design/web-react';
function Banner() {
    return (
        <div className="banner h-full flex items-center justify-center">
            <Carousel
                autoPlay
                animation="slide"
                style={{ width: '100%', height: '100%' }}
                indicatorPosition="bottom"
            >
                <div className="flex justify-center items-center h-full">
                    <div className="w-11/12 h-4/5 mb-10">
                        <img
                            src="https://topshare.vn/wp-content/uploads/2021/12/hinh-nen-mau-xanh-la-cay-50.jpg"
                            alt="Banner 1"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="w-11/12 h-4/5 mb-10">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAhWT2cQWBFUc34P54Oami4FZxKJwvRmUgw&s"
                            alt="Banner 2"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
