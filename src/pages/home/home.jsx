import Header from './header'
import './home.css'
import { FiSend } from "react-icons/fi";
import cabbage from "../../assets/cabbage.png"
import strawberry from "../../assets/strawberry.png"
import grain from "../../assets/grain.png"
import berry from "../../assets/berry.png"
import pineapple from "../../assets/pineapple.png"
import greenberry from "../../assets/green-berry.png"
import oranges from "../../assets/orange.png"
import plant from "../../assets/plant.png"
import apples from "../../assets/apple.png"
import peach from "../../assets/peach.png"
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { slides } from "../../Data/hero.json"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import CountCard from '../CountCard/CountCard'
import { BsChevronRight } from "react-icons/bs";
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
import products from '../../Data/products.json'
import { useWishlist } from '../../context/WishlistContext';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Footer from './Footer';

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // Auto-switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  
    const [rating, setRating] = useState(0); // Store the rating

    const handleRating = (rate) => {
      setRating(rate); // Update the rating state


    };

    // const [hoverText, setHoverText] = useState("");
    // const [hoverTexts1, setHoverTexts1] = useState("");
    const [hoverTexts, setHoverTexts] = useState("");
    // const [hoverText3, setHoverText3] = useState("");
    // const [hoverText4, setHoverText4] = useState("");
    // const [hoverText5, setHoverText5] = useState("");
    // const [hoverText6, setHoverText6] = useState("");
    // const [hoverText7, setHoverText7] = useState("");
    // const [hoverText8, setHoverText8] = useState("");

    const { addToWishlist } = useWishlist();

    const handleAdd = (product) => {
      addToWishlist(product)
    }
    return (
        <>
        <Header/>
      <div className='carou'>
        {slides.map((item, idx) => {
          return <section
            key={idx}
            className={`home-hero ${idx === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundRepeat: "none",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >

            <div className='ama-txt'>
              <h1>{item.text1}</h1>
              <h1>{item.text2}</h1>
            </div>
            <h3>{item.text3}</h3>

            <div className='input-btn'>
              <FiSend className='send-icon' />
              <input type="email" placeholder='Enter Your Email' />
              <button>Subsribe</button>
            </div>
            <div>
              <button className='right-btn' onClick={handleNext}>
                <FaChevronLeft className='arrow-dir' />
              </button>
              <button className='left-btn'>
                <FaAngleRight className='arrow-dir' onClick={handlePrevious} />
              </button>
            </div>
          </section>
        })}

        <div className="indicators">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`indicator ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>

      <section className='top-cate'>
        <div className='tp-cat'>
          <h1>Top Categories</h1>
          <div className='arrow-cnt'>
            <div className='arw-div'>
              <FaArrowLeftLong className='arrw-long'/>
            </div>
            <div className='arw-div'>
             <FaArrowRightLong className='arrw-long'/>
            </div>
          </div>
        </div>

        <div className='fruit-div'>
          <div className='fruits-indiv'>
            <img className='cabbage-img' src={cabbage} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivs'>
            <img className='cabbage-img' src={strawberry} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivss'>
            <img className='cabbage-img' src={grain} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsss'>
            <img className='cabbage-img' src={berry} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivssss'>
            <img className='cabbage-img' src={pineapple} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsssss'>
            <img className='cabbage-img' src={greenberry} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivssssss'>
            <img className='cabbage-img' src={oranges} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsssssss'>
            <img className='cabbage-img' src={plant} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivssssss'>
            <img className='cabbage-img' src={apples} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsssssssss'>
            <img className='cabbage-img' src={peach} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
        </div>
      </section>

            <section className='product-section'>
                <div className='popular-product'>
                  <h2>Popular Product</h2>
                </div>

                <div className='try'>
                  {/* <div className='card-div'>
                    <div className="product-card">

                      <div className="tip1">

                        <div className='tip'>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText("Quick View")}
                            onMouseLeave={() => setHoverText("")}
                          >
                            <IoEyeOutline className='fa' />
                            {hoverText === "Quick View" && <div className="tooltip">{hoverText}</div>}
                          </div>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText("Add To Wishlist")}
                            onMouseLeave={() => setHoverText("")}
                          >
                            <FaRegHeart className='fa' />
                            {hoverText === "Add To Wishlist" && <div className="tooltip">{hoverText}</div>}
                          </div>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText("Add To Compare")}
                            onMouseLeave={() => setHoverText("")}
                          >
                            <FaShuffle className='fa' />
                            {hoverText === "Add To Compare" && <div className="tooltip">{hoverText}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details'>
                        <div className="lightspan">Cake $ Milk</div>

                        <div className="info">
                          <span className="product-header"><h2 className='text-truncate'>Seeds of Change Organic Quinoe</h2></span>
                          <div className="content-info">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Global Official</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span>$1,845.00</span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div> */}









                  {/* Second-card */}


                  {products.map((product) => {
                      const { name, price, id } = product;
                        return (
                      <div className='card-div' key={id}>
                    <div className="product-design">

                      <div className="badges"><span>Hot</span></div>

                      <div className="tip3">

                        <div className='tip2'>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverTexts("Quick View")}
                            onMouseLeave={() => setHoverTexts("")}
                          >
                            <IoEyeOutline className='fa1' />
                            {hoverTexts === "Quick View" && <div className="tooltip1">{hoverTexts}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverTexts("Add To Wishlist")}
                            onMouseLeave={() => setHoverTexts("")}
                            onClick={()=> handleAdd(product)}
                          >
                            <FaRegHeart className='fa1' />
                            {hoverTexts === "Add To Wishlist" && <div className="tooltip1">{hoverTexts}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverTexts("Add To Compare")}
                            onMouseLeave={() => setHoverTexts("")}
                          >
                            <FaShuffle className='fa1' />
                            {hoverTexts === "Add To Compare" && <div className="tooltip1">{hoverTexts}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details1'>
                        <div className="lightspan1">Pet Food</div>

                        <div className="info1">
                          <span className="product-header1"><h2 className='text-truncate1'>{name}</h2></span>
                          <div className="content-info1">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>GoPro</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>${price} <p className='old-price'>$1,845.00</p>

                          </span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                        )
                  })}



                  {/* third-card

                  <div className='card-div'>
                    <div className="product-card4">

                      <div className="tip1">

                        <div className='tip'>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText3("Quick View")}
                            onMouseLeave={() => setHoverText3("")}
                          >
                            <IoEyeOutline className='fa' />
                            {hoverText3 === "Quick View" && <div className="tooltip">{hoverText3}</div>}
                          </div>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText3("Add To Wishlist")}
                            onMouseLeave={() => setHoverText3("")}
                          >
                            <FaRegHeart className='fa' />
                            {hoverText3 === "Add To Wishlist" && <div className="tooltip">{hoverText3}</div>}
                          </div>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText3("Add To Compare")}
                            onMouseLeave={() => setHoverText3("")}
                          >
                            <FaShuffle className='fa' />
                            {hoverText3 === "Add To Compare" && <div className="tooltip">{hoverText3}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details'>
                        <div className="lightspan">Cake $ Milk</div>

                        <div className="info">
                          <span className="product-header"><h2 className='text-truncate'>Seeds of Change Organic Quinoe</h2></span>
                          <div className="content-info">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Global Official</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span>$1,845.00</span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div>









                  {/* fourth-card */}

                  {/* <div className='card-div'>
                    <div className="product-design1">

                      <div className="badges1"><span>-37%</span></div>

                      <div className="tip3">

                        <div className='tip2'>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverTexts1("Quick View")}
                            onMouseLeave={() => setHoverTexts1("")}
                          >
                            <IoEyeOutline className='fa1' />
                            {hoverTexts1 === "Quick View" && <div className="tooltip1">{hoverTexts1}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverTexts1("Add To Wishlist")}
                            onMouseLeave={() => setHoverTexts1("")}
                          >
                            <FaRegHeart className='fa1' />
                            {hoverTexts1 === "Add To Wishlist" && <div className="tooltip1">{hoverTexts1}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverTexts1("Add To Compare")}
                            onMouseLeave={() => setHoverTexts1("")}
                          >
                            <FaShuffle className='fa1' />
                            {hoverTexts1 === "Add To Compare" && <div className="tooltip1">{hoverTexts1}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details1'>
                        <div className="lightspan1">Pet Food</div>

                        <div className="info1">
                          <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                          <div className="content-info1">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                          </span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div>  */}





                  {/* fifth-card


                  <div className='card-div'>
                    <div className="product-card5">

                      <div className="badges"><span>Hot</span></div>

                      <div className="tip3">

                        <div className='tip2'>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText5("Quick View")}
                            onMouseLeave={() => setHoverText5("")}
                          >
                            <IoEyeOutline className='fa1' />
                            {hoverText5 === "Quick View" && <div className="tooltip1">{hoverText5}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText5("Add To Wishlist")}
                            onMouseLeave={() => setHoverText5("")}
                          >
                            <FaRegHeart className='fa1' />
                            {hoverText5 === "Add To Wishlist" && <div className="tooltip1">{hoverText5}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText5("Add To Compare")}
                            onMouseLeave={() => setHoverText5("")}
                          >
                            <FaShuffle className='fa1' />
                            {hoverText5 === "Add To Compare" && <div className="tooltip1">{hoverText5}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details1'>
                        <div className="lightspan1">Pet Food</div>

                        <div className="info1">
                          <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                          <div className="content-info1">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>GoPro</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                          </span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div>









                  {/* six-card */}

                  {/* <div className='card-div'>
                    <div className="product-card6">

                      <div className="tip1">

                        <div className='tip'>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText6("Quick View")}
                            onMouseLeave={() => setHoverText6("")}
                          >
                            <IoEyeOutline className='fa' />
                            {hoverText6 === "Quick View" && <div className="tooltip">{hoverText6}</div>}
                          </div>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText6("Add To Wishlist")}
                            onMouseLeave={() => setHoverText6("")}
                          >
                            <FaRegHeart className='fa' />
                            {hoverText6 === "Add To Wishlist" && <div className="tooltip">{hoverText6}</div>}
                          </div>

                          <div
                            className="icon"
                            onMouseEnter={() => setHoverText4("Add To Compare")}
                            onMouseLeave={() => setHoverText4("")}
                          >
                            <FaShuffle className='fa' />
                            {hoverText4 === "Add To Compare" && <div className="tooltip">{hoverText4}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details'>
                        <div className="lightspan">Cake $ Milk</div>

                        <div className="info">
                          <span className="product-header"><h2 className='text-truncate'>Seeds of Change Organic Quinoe</h2></span>
                          <div className="content-info">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Global Official</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span>$1,845.00</span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div> */}



                  {/* seven-card */}

                  {/* <div className='card-div'>
                    <div className="product-design7">

                      <div className="badges1"><span>-37%</span></div>

                      <div className="tip3">

                        <div className='tip2'>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText7("Quick View")}
                            onMouseLeave={() => setHoverText7("")}
                          >
                            <IoEyeOutline className='fa1' />
                            {hoverText7 === "Quick View" && <div className="tooltip1">{hoverText7}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText7("Add To Wishlist")}
                            onMouseLeave={() => setHoverText7("")}
                          >
                            <FaRegHeart className='fa1' />
                            {hoverText7 === "Add To Wishlist" && <div className="tooltip1">{hoverText7}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText7("Add To Compare")}
                            onMouseLeave={() => setHoverText7("")}
                          >
                            <FaShuffle className='fa1' />
                            {hoverText7 === "Add To Compare" && <div className="tooltip1">{hoverText7}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details1'>
                        <div className="lightspan1">Pet Food</div>

                        <div className="info1">
                          <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                          <div className="content-info1">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                          </span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div> */}



                  {/* Eight-card */}


                  {/* <div className='card-div'>
                    <div className="product-design8">

                      <div className="badges"><span>Hot</span></div>

                      <div className="tip3">

                        <div className='tip2'>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText8("Quick View")}
                            onMouseLeave={() => setHoverText8("")}
                          >
                            <IoEyeOutline className='fa1' />
                            {hoverText8 === "Quick View" && <div className="tooltip1">{hoverText8}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText8("Add To Wishlist")}
                            onMouseLeave={() => setHoverText8("")}
                          >
                            <FaRegHeart className='fa1' />
                            {hoverText8 === "Add To Wishlist" && <div className="tooltip1">{hoverText8}</div>}
                          </div>

                          <div
                            className="icon1"
                            onMouseEnter={() => setHoverText8("Add To Compare")}
                            onMouseLeave={() => setHoverText8("")}
                          >
                            <FaShuffle className='fa1' />
                            {hoverText8 === "Add To Compare" && <div className="tooltip1">{hoverText8}</div>}
                          </div>

                        </div>
                      </div>

                      <div className='details1'>
                        <div className="lightspan1">Pet Food</div>

                        <div className="info1">
                          <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                          <div className="content-info1">
                            <div className='rating1'>
                              <Rating totalStars={5}></Rating>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>GoPro</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                          </span>
                          <button className='cart'> <IoCartOutline size={14} /> Add</button>
                        </div>
                      </div>
                    </div>
                  </div>  */}






                </div>
              </section><section className=''>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
                    <div className='popular-product'>
                      <h2>Deals Of The Day</h2>
                    </div>
                    <CountCard />

                  </div>
                </section><div className="cards-container">
                  <div className="card">
                    <div className="card-text">
                      <h3>Everyday Fresh & Clean with Our Products</h3>
                      <button className="shop-now">
                        Shop Now <span>→</span>
                      </button>
                    </div>
                  </div>

                  <div className="card1">
                    <div className="card-text">
                      <h3>Make your Breakfast Healthy and Easy</h3>
                      <button className="shop-now">
                        Shop Now <span>→</span>
                      </button>
                    </div>
                  </div>

                  <div className="card2">
                    <div className="card-text">
                      <h3>The best Organic Products Online</h3>
                      <button className="shop-now">
                        Shop Now <span>→</span>
                      </button>
                    </div>
                  </div>
                </div><section className="categories">
                  <div className="upper">
                    <div className="uppercategory">
                      <h1 className='each'>Shop by Categories</h1>
                      <a href="" className="all">All Categories <BsChevronRight /></a>
                    </div>

                    <div className="arrows-div">
                      <button className="prev-arrow"><FaArrowLeftLong className='iconsm' /></button>
                      <button className="next-arrow"><FaArrowRightLong className='iconsm' /></button>
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
                    breakpoints={{
                      //     640: { slidesPerView: 2 },
                      1100: { slidesPerView: 5 },
                      1200: { slidesPerView: 6 },
                      900: {slidesPerView: 4},
                      706: {slidesPerView: 4},
                      630: {slidesPerView: 3},
                      571: {slidesPerView: 3},
                      430: {slidesPerView: 2},
                      300: {slidesPerView: 1},
                    }}
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

                </section><section className="trending-shi">
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
                </section><section className="tags">
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
              <Footer/>
                </>
     
  
    )
}

    export default Home;
