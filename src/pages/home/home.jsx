import Header from './header'
import './home.css'
import { FiSend } from "react-icons/fi";
import Rating from '../Rating/Rating';
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { useState } from 'react';
import CountCard from '../CountCard/CountCard'
import { BsChevronRight } from "react-icons/bs";
import fruit from '../../assets/promotion/fruits.svg';
import seafood from '../../assets/promotion/seafood.svg';
import rice from '../../assets/promotion/rice.svg';
import crab from '../../assets/promotion/crab.svg';
import milk from '../../assets/promotion/milk.svg';
import basket from '../../assets/promotion/basket.svg';
import wines from '../../assets/promotion/wines.svg';
import dress from '../../assets/promotion/dress.svg';
import pet from '../../assets/promotion/pet.svg';
import packages from '../../assets/promotion/package.svg';
import baking from '../../assets/promotion/baking.svg';
import carrot from '../../assets/promotion/carrot.jpg';
import pepper from '../../assets/promotion/pepper.jpg';
import mango from '../../assets/promotion/mango.jpg';
import banana from '../../assets/promotion/banana.jpg';
import watermelon from '../../assets/promotion/watermelon.jpg';
import kiwi from '../../assets/promotion/kiwi.jpg';
import raw from '../../assets/promotion/raw.jpg';
import sachet from '../../assets/promotion/sachet.jpg';
import corn from '../../assets/promotion/corn.jpg';
import pomegranate from '../../assets/promotion/pomegranate.jpg';
import pear from '../../assets/promotion/pear.jpg';
import orange from '../../assets/promotion/orange.jpg';
import tag from '../../assets/promotion/tag.svg';
import shake from '../../assets/promotion/shake.svg';
import contract from '../../assets/promotion/contract.svg';
import man from '../../assets/promotion/man.svg';
import box from '../../assets/promotion/box.svg';
import zerd from '../../assets/promotion/zerds.png';
import apple from '../../assets/promotion/apple.jpg';
import google from '../../assets/promotion/google.jpg';
import visa from '../../assets/promotion/visa.png';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from '../../assets/promotion/nestback.jpg';
import img2 from '../../assets/promotion/nestofront.jpg';
import img8A from '../../assets/promotion/Nutritionfront.jpg';
import img8B from '../../assets/promotion/Nutritionback.jpg';
import img6A from '../../assets/promotion/banaback.jpg';
import img6B from '../../assets/promotion/banafront.jpg';
import img5A from '../../assets/promotion/cafeback.jpg';
import img5B from '../../assets/promotion/cafefront.jpg';
import img4A from '../../assets/promotion/Orangeback-removebg-preview.png';
import img4B from '../../assets/promotion/Orangefront-removebg-preview.png';
import img3A from '../../assets/promotion/viggieback.jpg';
import img3B from '../../assets/promotion/vegepostfront.jpg';
import img2A from '../../assets/promotion/seedbag1.jpg';
import img2B from '../../assets/promotion/seedbag2.jpg';
import img1A from '../../assets/promotion/bottleback.jpg';
import img1B from '../../assets/promotion/bottlefront.jpg';



const Home = () => {

    const [pic, setPic] = useState(false);
    const [picCard2, setPicCard2] = useState(false);
    const [picCard3, setPicCard3] = useState(false);
    const [picCard4, setPicCard4] = useState(false);
    const [picCard5, setPicCard5] = useState(false);
    const [picCard6, setPicCard6] = useState(false);
    const [picCard7, setPicCard7] = useState(false);
    const [picCard8, setPicCard8] = useState(false);

    
    const [rating, setRating] = useState(0); // Store the rating


    const [isHoveredCard1, setIsHoveredCard1] = useState(false);
    const [isHoveredCard2, setIsHoveredCard2] = useState(false);
    const [isHoveredCard3, setIsHoveredCard3] = useState(false);
    const [isHoveredCard4, setIsHoveredCard4] = useState(false);
    const [isHoveredCard5, setIsHoveredCard5] = useState(false);
    const [isHoveredCard6, setIsHoveredCard6] = useState(false);
    const [isHoveredCard7, setIsHoveredCard7] = useState(false);
    const [isHoveredCard8, setIsHoveredCard8] = useState(false);
    
   

    const handleRating = (rate) => {
      setRating(rate); // Update the rating state
    };

    const [hoverText, setHoverText] = useState("");
    const [hoverTexts1, setHoverTexts1] = useState("");
    const [hoverTexts, setHoverTexts] = useState("");
    const [hoverText3, setHoverText3] = useState("");
    const [hoverText4, setHoverText4] = useState("");
    const [hoverText5, setHoverText5] = useState("");
    const [hoverText6, setHoverText6] = useState("");
    const [hoverText7, setHoverText7] = useState("");
    const [hoverText8, setHoverText8] = useState("");


    
    return (
        <>
        <Header/>
        <section className='home-hero'>
            <div className='ama-txt'>
            <h1>Dont Miss Amazing</h1>
            <h1>Grocery Deals</h1>
            </div>
            <h3>Save up to 50% off On your first Order</h3>
            <div className='input-btn'>
                <FiSend className='send-icon'/>
                <input type="email" placeholder='Your email address' />
                <button>Subsribe</button>
            </div>
            <div>
                <button></button>
                <button></button>
            </div>
        </section>

        {/* <section>
            <div>
                <h3>Featured Categories</h3>
                <div>
                    <p>All</p>
                    <p>Milk&Diaries</p>
                    <p>Coffee</p>
                    <p>Pet Foods</p>
                    <p>Meats</p>
                    <p>Vegetables</p>
                    <p>Fruits</p>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
            </div>
            <div>
                <div>
                    <h1>Everyday Fresh &</h1>
                    <h1>Clean with Our</h1>
                    <h1>Products</h1>
                </div>
                <button>Shop Now</button>
            </div>
            <div>
                <div>
                    <h1>Everyday Fresh &</h1>
                    <h1>Clean with Our</h1>
                    <h1>Products</h1>
                </div>
                <button>Shop Now</button>
            </div>
            <div>
                <div>
                    <h1>Everyday Fresh &</h1>
                    <h1>Clean with Our</h1>
                    <h1>Products</h1>
                </div>
                <button>Shop Now</button>
            </div>
        </section> */}

            <section className='product-section'>
                <div className='popular-product'>
                    <h2>Popular Product</h2>
                </div>

                <div className='try'>
                <div className='card-div'onMouseOver={() => setIsHoveredCard8(true)}
                        onMouseOut={() => setIsHoveredCard8(false)}>
                    <div className="product-card" onMouseOver={()=>setPicCard8(true)} onMouseOut={()=>setPicCard8(false)}>
                    <div className="badges1"></div>{isHoveredCard8 &&
                    <>
                    <div className="tip3">

                    <div className='tip2'>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText("Quick View")}
                        onMouseLeave={() => setHoverText("")}
                    >
                        <IoEyeOutline className='fa'/>
                        {hoverText === "Quick View" && <div className="tooltip">{hoverText}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText("Add To Wishlist")}
                        onMouseLeave={() => setHoverText("")}
                    >
                        <FaRegHeart className='fa'/>
                        {hoverText === "Add To Wishlist" && <div className="tooltip">{hoverText}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText("Add To Compare")}
                        onMouseLeave={() => setHoverText("")}
                    >
                        <FaShuffle className='fa'/>
                        {hoverText === "Add To Compare" && <div className="tooltip">{hoverText}</div>}
                    </div>
                            
                    </div>
                </div>
                </>}
                <img src={img1A} alt="" style={{display: picCard8? 'flex':'none', animationName: picCard8?'hovered':''}}/>
                <img src={img1B} alt="" style={{display: picCard8? 'none':'flex'}}/>

                <div className='details1'>
                    <div className="lightspan1">Cake $ Milk</div>

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
                        <button className='cart'> <IoCartOutline  style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>









            {/* Second-card */}


        <div className='card-div'onMouseOver={() => setIsHoveredCard7(true)}
                        onMouseOut={() => setIsHoveredCard7(false)}>
                    <div className="product-design"onMouseOver={()=>setPicCard7(true)} onMouseOut={()=>setPicCard7(false)}>
                        
                    <div className="badges"><span>Hot</span></div>{isHoveredCard7 &&
                        <>
                    <div className="tip3">

                    <div className='tip2'>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverTexts("Quick View")}
                        onMouseLeave={() => setHoverTexts("")}
                    >
                        <IoEyeOutline className='fa1'/>
                        {hoverTexts === "Quick View" && <div className="tooltip1">{hoverTexts}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverTexts("Add To Wishlist")}
                        onMouseLeave={() => setHoverTexts("")}
                    >
                        <FaRegHeart className='fa1'/>
                        {hoverTexts === "Add To Wishlist" && <div className="tooltip1">{hoverTexts}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverTexts("Add To Compare")}
                        onMouseLeave={() => setHoverTexts("")}
                    >
                        <FaShuffle className='fa1'/>
                        {hoverTexts === "Add To Compare" && <div className="tooltip1">{hoverTexts}</div>}
                    </div>
                            
                    </div>
                </div>
                </>}
                <img src={img2B} alt="" style={{display: picCard7? 'flex':'none', animationName: picCard7?'hovered':''}}/>
                <img src={img2A} alt="" style={{display: picCard7? 'none':'flex'}}/>

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
                        <button className='cart'> <IoCartOutline style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>


        
            {/* third-card */}

        <div className='card-div'onMouseOver={() => setIsHoveredCard6(true)}
                        onMouseOut={() => setIsHoveredCard6(false)}>
                    <div className="product-card4"onMouseOver={()=>setPicCard6(true)} onMouseOut={()=>setPicCard6(false)}>
                    <div className="badges1"></div>{isHoveredCard6 &&
                        <>
                    <div className="tip3">

                    <div className='tip2'>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText3("Quick View")}
                        onMouseLeave={() => setHoverText3("")}
                    >
                        <IoEyeOutline className='fa'/>
                        {hoverText3 === "Quick View" && <div className="tooltip">{hoverText3}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText3("Add To Wishlist")}
                        onMouseLeave={() => setHoverText3("")}
                    >
                        <FaRegHeart className='fa'/>
                        {hoverText3 === "Add To Wishlist" && <div className="tooltip">{hoverText3}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText3("Add To Compare")}
                        onMouseLeave={() => setHoverText3("")}
                    >
                        <FaShuffle className='fa'/>
                        {hoverText3 === "Add To Compare" && <div className="tooltip">{hoverText3}</div>}
                    </div>
                            
                    </div>
                </div>
                </>}
                <img src={img3B} alt="" style={{display: picCard6? 'flex':'none', animationName: picCard6?'hovered':''}}/>
                <img src={img3A} alt="" style={{display: picCard6? 'none':'flex'}}/>
                <div className='details1'>
                    <div className="lightspan1">Cake $ Milk</div>

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
                        <button className='cart'> <IoCartOutline style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>








         
        {/* fourth-card */}

        <div className='card-div'onMouseOver={() => setIsHoveredCard5(true)}
                        onMouseOut={() => setIsHoveredCard5(false)}>
                    <div className="product-design1"onMouseOver={()=>setPicCard5(true)} onMouseOut={()=>setPicCard5(false)}>
                        
                    <div className="badges1"><span>-37%</span></div>{isHoveredCard5 &&
                        <>
                    <div className="tip3">

                    <div className='tip2'>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverTexts1("Quick View")}
                        onMouseLeave={() => setHoverTexts1("")}
                    >
                        <IoEyeOutline className='fa1'/>
                        {hoverTexts1 === "Quick View" && <div className="tooltip1">{hoverTexts1}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverTexts1("Add To Wishlist")}
                        onMouseLeave={() => setHoverTexts1("")}
                    >
                        <FaRegHeart className='fa1'/>
                        {hoverTexts1 === "Add To Wishlist" && <div className="tooltip1">{hoverTexts1}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverTexts1("Add To Compare")}
                        onMouseLeave={() => setHoverTexts1("")}
                    >
                        <FaShuffle className='fa1'/>
                        {hoverTexts1 === "Add To Compare" && <div className="tooltip1">{hoverTexts1}</div>}
                    </div>
                            
                    </div>
                </div>
                </>}
                <img src={img4B} alt="" style={{display: picCard5? 'flex':'none', animationName: picCard5?'hovered':''}}/>
                <img src={img4A} alt="" style={{display: picCard5? 'none':'flex'}}/>
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
                        <button className='cart'> <IoCartOutline style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>





            {/* fifth-card */}


            <div className='card-div'onMouseOver={() => setIsHoveredCard4(true)}
                        onMouseOut={() => setIsHoveredCard4(false)}>
                    <div className="product-card5"onMouseOver={()=>setPicCard4(true)} onMouseOut={()=>setPicCard4(false)}>
                        
                    <div className="badges"><span>Hot</span></div>{isHoveredCard4 && 
                        <>
                    <div className="tip3">

                    <div className='tip2'>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText5("Quick View")}
                        onMouseLeave={() => setHoverText5("")}
                    >
                        <IoEyeOutline className='fa1'/>
                        {hoverText5 === "Quick View" && <div className="tooltip1">{hoverText5}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText5("Add To Wishlist")}
                        onMouseLeave={() => setHoverText5("")}
                    >
                        <FaRegHeart className='fa1'/>
                        {hoverText5 === "Add To Wishlist" && <div className="tooltip1">{hoverText5}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText5("Add To Compare")}
                        onMouseLeave={() => setHoverText5("")}
                    >
                        <FaShuffle className='fa1'/>
                        {hoverText5 === "Add To Compare" && <div className="tooltip1">{hoverText5}</div>}
                    </div>
                            
                    </div>
                </div>
                </>}
                <img src={img5B} alt="" style={{display: picCard4? 'flex':'none', animationName: picCard4?'hovered':''}}/>
                <img src={img5A} alt="" style={{display: picCard4? 'none':'flex'}}/>

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
                        <button className='cart'> <IoCartOutline style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>

        







                {/* six-card */}

        <div className='card-div'onMouseOver={() => setIsHoveredCard3(true)}
                        onMouseOut={() => setIsHoveredCard3(false)}>
                    <div className="product-card6"onMouseOver={()=>setPicCard3(true)} onMouseOut={()=>setPicCard3(false)}>
                    <div className="badges1"></div>{isHoveredCard3 && 
                    <>
                    <div className="tip3">
                    <div className='tip2'>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText6("Quick View")}
                        onMouseLeave={() => setHoverText6("")}
                    >
                        <IoEyeOutline className='fa1'/>
                        {hoverText6 === "Quick View" && <div className="tooltip1">{hoverText6}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText6("Add To Wishlist")}
                        onMouseLeave={() => setHoverText6("")}
                    >
                        <FaRegHeart className='fa1'/>
                        {hoverText6 === "Add To Wishlist" && <div className="tooltip1">{hoverText6}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText4("Add To Compare")}
                        onMouseLeave={() => setHoverText4("")}
                    >
                        <FaShuffle className='fa1'/>
                        {hoverText4 === "Add To Compare" && <div className="tooltip1">{hoverText4}</div>}
                    </div>
                            
                    </div>
                </div>
                </>}
                <img src={img6A} alt="" style={{display: picCard3? 'flex':'none', animationName: picCard3?'hovered':''}}/>
                <img src={img6B} alt="" style={{display: picCard3? 'none':'flex'}}/>

                <div className='details1'>
                    <div className="lightspan1">Cake $ Milk</div>

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
                        <button className='cart'> <IoCartOutline style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>



             {/* seven-card */}
             

        <div className='card-div'onMouseOver={() => setIsHoveredCard1(true)}
                        onMouseOut={() => setIsHoveredCard1(false)}>
                    <div className="product-design7" onMouseOver={()=>setPic(true)} onMouseOut={()=>setPic(false)}>
                        
                    <div className="badges1"><span>-37%</span></div>{isHoveredCard1 && 
                    <>
                    <div className="tip3">
                        <div className='tip2'>
                       <div
                        className="icon1"
                        onMouseEnter={() => setHoverText7("Quick View")}
                        onMouseLeave={() => setHoverText7("")}
                    >
                        <IoEyeOutline className='fa1'/>
                        {hoverText7 === "Quick View" && <div className="tooltip1">{hoverText7}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText7("Add To Wishlist")}
                        onMouseLeave={() => setHoverText7("")}
                    >
                        <FaRegHeart className='fa1'/>
                        {hoverText7 === "Add To Wishlist" && <div className="tooltip1">{hoverText7}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText7("Add To Compare")}
                        onMouseLeave={() => setHoverText7("")}
                    >
                        <FaShuffle className='fa1'/>
                        {hoverText7 === "Add To Compare" && <div className="tooltip1">{hoverText7}</div>}
                    </div> 
                    </div>
                
                </div>
                </>}
                    <img src={img1} alt="" style={{display: pic? 'flex':'none', animationName: pic?'hover,fadeIn':''}}/>
                    <img src={img2} alt="" style={{display: pic? 'none':'flex'}}/>


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
                        <button className='cart'> <IoCartOutline style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>


        
           {/* Eight-card */}


           <div className='card-div'onMouseOver={() => setIsHoveredCard2(true)}
                        onMouseOut={() => setIsHoveredCard2(false)}>
                    <div className="product-design8"onMouseOver={()=>setPicCard2(true)} onMouseOut={()=>setPicCard2(false)}>
                        
                    <div className="badges"></div>{isHoveredCard2 &&
                        <>
                    <div className="tip3">
                    <div className='tip2'>
                       <div
                        className="icon1"
                        onMouseEnter={() => setHoverText8("Quick View")}
                        onMouseLeave={() => setHoverText8("")}
                    >
                        <IoEyeOutline className='fa1'/>
                        {hoverText8 === "Quick View" && <div className="tooltip1">{hoverText8}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText8("Add To Wishlist")}
                        onMouseLeave={() => setHoverText8("")}
                    >
                        <FaRegHeart className='fa1'/>
                        {hoverText8 === "Add To Wishlist" && <div className="tooltip1">{hoverText8}</div>}
                    </div>

                    <div
                        className="icon1"
                        onMouseEnter={() => setHoverText8("Add To Compare")}
                        onMouseLeave={() => setHoverText8("")}
                    >
                        <FaShuffle className='fa1'/>
                        {hoverText8 === "Add To Compare" && <div className="tooltip1">{hoverText8}</div>}
                    </div>  
                       
                    </div> 
                </div>
                    </>}
                    <img src={img8A} alt="" style={{display: picCard2? 'flex':'none', animationName: picCard2?'hovered':''}}/>
                    <img src={img8B} alt="" style={{display: picCard2? 'none':'flex'}}/>

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
                        <button className='cart'> <IoCartOutline style={{ fontSize: "16px"}} /> Add</button>
                    </div>
                </div>
            </div> 
        </div>






    </div>
    </section>

    
    <section className=''>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",}}>
    <div className='popular-product'>
                    <h2>Deals Of The Day</h2>
    </div>
      <CountCard />

    </div>
    </section>
    <div className="cards-container">
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
    </div>

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
                        breakpoints={{
                        //     640: { slidesPerView: 2 },
                            1100: { slidesPerView: 5 },
                            1200: { slidesPerView: 6 },
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
    )
}

    export default Home;
