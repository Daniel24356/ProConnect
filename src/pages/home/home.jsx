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
    import pear from '../../assets/pear.jpg';
    import orange from '../../assets/orange.jpg';
    import tag from '../../assets/tag.svg';
    import shake from '../../assets/shake.svg';
    import contract from '../../assets/contract.svg';
    import man from '../../assets/man.svg';
    import box from '../../assets/box.svg';
    import zerd from '../../assets/zerds.png';
    import apple from '../../assets/apple.jpg';
    import google from '../../assets/google.jpg';
    import visa from '../../assets/visa.png';
    import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
    import { useState } from 'react';
    import { CiLocationOn } from "react-icons/ci";
    import { TfiHeadphoneAlt } from "react-icons/tfi";
    import { FaRegPaperPlane } from "react-icons/fa";
    import { FaRegClock } from "react-icons/fa6";

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
                        <h1>Don&apos;t Miss Amazing</h1>
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
                            <a href="" className="carrot"><img src={pear} alt="" className="carrot-pic" /></a>
                            <div className="more-info">
                                <a href="" className="nestle">Angies Boomchikapop Sweet & Salty Kettle Corn</a>
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
                            <a href="" className="carrot"><img src={orange} alt="" className="carrot-pic" /></a>
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

                <section className="tags">
                    <div className="each-tag">
                        <img src={tag} alt="" className="move" />
                        <div className="each-text">
                            <p className="best">Best Prices and Offers</p>
                            <p className="orders">Order $50 or more</p>
                        </div>
                    </div>

                    <div className="each-tag">
                        <img src={shake} alt="" className="move" />
                        <div className="each-text">
                            <p className="best">Free delivery</p>
                            <p className="orders">24/7 amazing services</p>
                        </div>
                    </div>

                    <div className="each-tag">
                        <img src={contract} alt="" className="move" />
                        <div className="each-text">
                            <p className="best">Great daily deal</p>
                            <p className="orders">When you sign up</p>
                        </div>
                    </div>

                    <div className="each-tag">
                        <img src={man} alt="" className="move" />
                        <div className="each-text">
                            <p className="best">Wide assortment</p>
                            <p className="orders">Mega Discounts</p>
                        </div>
                    </div>

                    <div className="each-tag">
                        <img src={box} alt="" className="move" />
                        <div className="each-text">
                            <p className="best">Easy returns</p>
                            <p className="orders">Within 30 days</p>
                        </div>
                    </div>
                </section>

                <section className="contact">
                    <div className="topcontact">
                        <div className="leftdiv">
                            <a href="" className="logo"><img src={zerd} alt="" width={"200px"}/></a>
                            <p className="awesome">Awesome grocery store website template</p>
                            <div className="info-div">
                            <CiLocationOn className='location'/>
                            <p className="address-info"><span className="idk">Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                            </div>

                            <div className="info-div">
                            <TfiHeadphoneAlt className='location'/>
                            <p className="address-info"><span className="idk">Call Us: </span>(+91) - 540-025-124553</p>
                            </div>

                            <div className="info-div">
                            <FaRegPaperPlane className='location'/>
                            <p className="address-info"><span className="idk">Email: </span>sale@Nest.com</p>
                            </div>

                            <div className="info-div">
                            <FaRegClock className='location'/>
                            <p className="address-info"><span className="idk">Hours: </span>10:00 - 18:00, Mon - Sat</p>
                            </div>

                            <h1 className="install">Install App</h1>

                            <div className="download">From App Store or Google Play</div>

                            <div className="download-links">
                                <a href="" className="apple-link"><img src={apple} alt="" className="apple-pic" /></a>
                                <a href="" className="apple-link"><img src={google} alt="" className="apple-pic" /></a>
                            </div>

                            <p className="gateway">Secured Payment Gateways</p>
                            <img src={visa} alt="" className="visa" />
                        </div>

                        <div className="rightdiv">
                            <div className="each-stress">
                                <h1 className="company">Company</h1>
                                <div className="all-links">
                                    <a href="" className="about-us">About Us</a>
                                    <a href="" className="about-us">Delivery Information</a>
                                    <a href="" className="about-us">Privacy Policy</a>
                                    <a href="" className="about-us">Terms & Conditions</a>
                                    <a href="" className="about-us">Contact Us</a>
                                    <a href="" className="about-us">Support Center</a>
                                    <a href="" className="about-us">Careers</a>
                                </div>
                            </div>

                            <div className="each-stress">
                                <h1 className="company">Account</h1>
                                <div className="all-links">
                                    <a href="" className="about-us">Sign In</a>
                                    <a href="" className="about-us">View Chart</a>
                                    <a href="" className="about-us">My Wishlist</a>
                                    <a href="" className="about-us">Track My Order</a>
                                    <a href="" className="about-us">Help Ticket</a>
                                    <a href="" className="about-us">Shipping Details</a>
                                    <a href="" className="about-us">Compare Products</a>
                                </div>
                            </div>

                            <div className="each-stress">
                                <h1 className="company">Corporate</h1>
                                <div className="all-links">
                                    <a href="" className="about-us">Become a Vendor</a>
                                    <a href="" className="about-us">Affiliate Program</a>
                                    <a href="" className="about-us">Farm Bsuiness</a>
                                    <a href="" className="about-us">Farm Careers</a>
                                    <a href="" className="about-us">Our Suppliers</a>
                                    <a href="" className="about-us">Accessibility</a>
                                    <a href="" className="about-us">Promotions</a>
                                </div>
                            </div>

                            <div className="each-stress">
                                <h1 className="company">Popular</h1>
                                <div className="all-links">
                                    <a href="" className="about-us">Milk & Flavored Milk</a>
                                    <a href="" className="about-us">Butter and Margarine</a>
                                    <a href="" className="about-us">Eggs Substitute</a>
                                    <a href="" className="about-us">Marmalades</a>
                                    <a href="" className="about-us">Sour Cream & Dips</a>
                                    <a href="" className="about-us">Tea & Kombucha</a>
                                    <a href="" className="about-us">Cheese</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    export default Home;
