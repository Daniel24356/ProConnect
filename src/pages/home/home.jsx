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
    import carrot from '../../assets/carrot.jpg';
    import pepper from '../../assets/pepper.jpg';
    import mango from '../../assets/mango.jpg';
    import banana from '../../assets/banana.jpg';
    import watermelon from '../../assets/watermelon.jpg';
    import kiwi from '../../assets/kiwi.jpg';
    import raw from '../../assets/raw.jpg';
    import sachet from '../../assets/sachet.jpg';
    import corn from '../../assets/corn.jpg';
    import pomegranate from '../../assets/pomegranate.jpg';
    import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
    import { useState } from 'react';

    // Swiper imports
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation, Autoplay } from 'swiper/modules';

    const Home = () => {
        const [rating, setRating] = useState(0); // Store the rating

  const handleRating = (rate) => {
    setRating(rate); // Update the rating state
  };
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

                <section className="trending-shi">
                     <div className="selling">
                        <h1 className="top">Top Selling</h1>
                        <div className="products">
                            <a href="" className="carrot"><img src={carrot} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Nestle Original Coffee-Mate Coffee Creamer</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={pepper} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Nestle Original Coffee-Mate Coffee Creamer</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={mango} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Nestle Original Coffee-Mate Coffee Creamer</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>
                     </div>

                     <div className="selling">
                        <h1 className="top">Trending Products</h1>
                        <div className="products">
                            <a href="" className="carrot"><img src={banana} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Organic Cage-Free Grade A Large Brown Eggs</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={watermelon} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Seeds of Change Organic Quinoa, Brown, & Red Rice</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={kiwi} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Naturally Flavored Cinnamon Vanilla Light Roast Coffee</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>
                     </div>

                     <div className="selling">
                        <h1 className="top">Recently Added</h1>
                        <div className="products">
                            <a href="" className="carrot"><img src={raw} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Pepperidge Farm FarmHouse Hearty White Bread</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={sachet} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Organic Frozen Triple Berry Blend</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={corn} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Oroweat Country ButterMilk Bread</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>
                     </div>

                     <div className="selling">
                        <h1 className="top">Top Rated</h1>
                        <div className="products">
                            <a href="" className="carrot"><img src={pomegranate} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={pepper} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Nestle Original Coffee-Mate Coffee Creamer</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>

                        <div className="products">
                            <a href="" className="carrot"><img src={mango} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Nestle Original Coffee-Mate Coffee Creamer</a>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                       <span
                                        key={index}
                                          className={index < rating ? "star filled" : "star"}
                                             onClick={() => handleRating(index + 1)} // Set rating on click
                                                  >
                                                  ★
                                                    </span>
                                                       ))}
                                  </div>
                               <p className="price">$32.85</p>
                            </div>
                        </div>
                     </div>
                </section>
            </>
        );
    }

    export default Home;
