import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { bannerLists } from '../../utils';
import { Link } from 'react-router-dom';

const colors = [
    "from-[#1e1e1e]/70 to-[#1e1e1e]/20", // dark overlay for first image
    "from-[#432c2c]/70 to-[#432c2c]/20", // red-brown overlay for cosmetic
    "from-[#2c3e50]/70 to-[#2c3e50]/20"  // blue overlay for milk
];

const HeroBanner = () => {
    return (
        <div className="py-2 rounded-md">
            <Swiper
                grabCursor={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                slidesPerView={1}
            >
                {bannerLists.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="carousel-item rounded-md sm:h-[500px] h-96 relative overflow-hidden">
                            {/* Background Image */}
                            <img 
                                src={item?.image} 
                                alt={item.title} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${colors[i % colors.length]}`}></div>

                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full">
                                
                                {/* Text section */}
                                <div className="hidden lg:flex justify-center w-full lg:w-1/2 p-8">
                                    <div className="text-center text-white">
                                        <h3 className="text-3xl font-bold">{item.title}</h3>
                                        <h1 className="text-5xl font-bold mt-2">{item.subtitle}</h1>
                                        <p className="font-bold mt-4">{item.description}</p>
                                        <Link 
                                            className="mt-6 inline-block bg-black/70 text-white py-2 px-4 rounded hover:bg-black"
                                            to="/products"
                                        >
                                            Shop
                                        </Link>
                                    </div>
                                </div>

                                {/* Image section */}
                                <div className="w-full flex justify-center lg:w-1/2 p-4">
                                    <img src={item?.image} alt={item.title} className="rounded-md object-cover z-20" />
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBanner;
