    import Header from './header';
    import './home.css';
    import { BsChevronRight } from "react-icons/bs";
    import { FiSend } from "react-icons/fi";
    import fruit from '../../assets/fruits.svg';
    import seafood from '../../assets/seafood.svg';
    import rice from '../../assets/rice.svg';
    import crab from '../../assets/crab.svg';
    import milk from '../../assets/milk.svg';
    import basket from '../../assets/basket.svg';
    import wines from '../../assets/wines.svg';
    import dress from '../../assets/dress.svg';
    import pet from '../../assets/pet.svg';
    import packages from '../../assets/package.svg';
    import baking from '../../assets/baking.svg';
    import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

    // Swiper imports
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation, Autoplay } from 'swiper/modules';

    const Home = () => {
        return (
            <>
                <Header />
                <section className='home-hero'>
                    <div className='ama-txt'>
                        <h1>Don't Miss Amazing</h1>
                        <h1>Grocery Deals</h1>
                    </div>
                    <h3>Save up to 50% off On your first Order</h3>
                    <div className='input-btn'>
                        <FiSend className='send-icon' />
                        <input type="email" placeholder='Your email address' />
                        <button>Subscribe</button>
                    </div>
                </section>

                <section className="categories">
                    <div className="upper">
                        <div className="uppercategory">
                            <h1 className='each'>Shop by Categories</h1>
                            <a href="" className="all">All Categories <BsChevronRight /></a>
                        </div>

                        <div className="arrows-div">
                        <button className="prev-arrow"><FaArrowLeftLong className='icon' /></button>
                        <button className="next-arrow"><FaArrowRightLong className='icon' /></button>
                    </div>
                    </div>

                    {/* Swiper for scrolling categories */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={8}
                        navigation={{ prevEl: '.prev-arrow', nextEl: '.next-arrow' }}
                        loop={true}
                        autoplay={{
                            delay: 5000, // Change slide every 10 seconds
                            disableOnInteraction: false, // Continue autoplay even after user interaction
                        }}
                        // breakpoints={{
                        //     640: { slidesPerView: 2 },
                        //     768: { slidesPerView: 3 },
                        //     1024: { slidesPerView: 4 },
                        // }}
                        className="scrolling-div"
                    >
                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={fruit} alt="Fruit" className='fruit' /></a>
                                <a href="" className="description">Vegetables <br /> & tubers</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={seafood} alt="Seafood" className='fruit' /></a>
                                <a href="" className="description">Fresh<br />Seafood</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={rice} alt="Rice" className='fruit' /></a>
                                <a href="" className="description">Noodles<br />Rice</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={crab} alt="Crab" className='fruit' /></a>
                                <a href="" className="description">Fastfood</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={milk} alt="Milk" className='fruit' /></a>
                                <a href="" className="description">Ice cream</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={basket} alt="Basket" className='fruit' /></a>
                                <a href="" className="description">Milks and <br />Dairies</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={wines} alt="Wines" className='fruit' /></a>
                                <a href="" className="description">Wines & <br />Alcohol</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={dress} alt="Dress" className='fruit' /></a>
                                <a href="" className="description">Clothing & <br />Beauty</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={pet} alt="Pet" className='fruit' /></a>
                                <a href="" className="description">Pet Foods & Toys</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={packages} alt="Packages" className='fruit' /></a>
                                <a href="" className="description">Packaged fast food</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="each-div">
                                <a href="" className="eachdiv"><img src={baking} alt="Baking" className='fruit' /></a>
                                <a href="" className="description">Baking Material</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    
                </section>
            </>
        );
    }

    export default Home;
