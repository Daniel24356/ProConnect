import Header from './header'
import './home.css'
import { FiSend } from "react-icons/fi";
import image from '../../assets/promotion/1.png';
import defaultimage from '../../assets/seedbag2.jpg';
import Rating from '../Rating/Rating';
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { useState } from 'react';
import CountCard from '../CountCard/CountCard'


const Home = () => {
    const [hoverText, setHoverText] = useState("");
    const [hoverTexts1, setHoverTexts1] = useState("");
    const [hoverTexts, setHoverTexts] = useState("");
    const [hoverText3, setHoverText3] = useState("");
    const [hoverText4, setHoverText4] = useState("");
    const [hoverText5, setHoverText5] = useState("");
    const [hoverText6, setHoverText6] = useState("");
    const [hoverText7, setHoverText7] = useState("");
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
                <div className='card-div'>
                    <div className="product-card">
                        
                    <div className="tip1">

                    <div className='tip'>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText("Quick View")}
                        onMouseLeave={() => setHoverText("")}
                    >
                        <IoEyeOutline className='fa'/>
                        {hoverText === "Quick View" && <div className="tooltip">{hoverText}</div>}
                    </div>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText("Add To Wishlist")}
                        onMouseLeave={() => setHoverText("")}
                    >
                        <FaRegHeart className='fa'/>
                        {hoverText === "Add To Wishlist" && <div className="tooltip">{hoverText}</div>}
                    </div>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText("Add To Compare")}
                        onMouseLeave={() => setHoverText("")}
                    >
                        <FaShuffle className='fa'/>
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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
                    </div>
                </div>
            </div> 
        </div>









            {/* Second-card */}


        <div className='card-div'>
                    <div className="product-design">
                        
                    <div className="badges"><span>Hot</span></div>

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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
                    </div>
                </div>
            </div> 
        </div>


        
            {/* third-card */}

        <div className='card-div'>
                    <div className="product-card4">
                        
                    <div className="tip1">

                    <div className='tip'>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText3("Quick View")}
                        onMouseLeave={() => setHoverText3("")}
                    >
                        <IoEyeOutline className='fa'/>
                        {hoverText3 === "Quick View" && <div className="tooltip">{hoverText3}</div>}
                    </div>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText3("Add To Wishlist")}
                        onMouseLeave={() => setHoverText3("")}
                    >
                        <FaRegHeart className='fa'/>
                        {hoverText3 === "Add To Wishlist" && <div className="tooltip">{hoverText3}</div>}
                    </div>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText3("Add To Compare")}
                        onMouseLeave={() => setHoverText3("")}
                    >
                        <FaShuffle className='fa'/>
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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
                    </div>
                </div>
            </div> 
        </div>








         
        {/* fourth-card */}

        <div className='card-div'>
                    <div className="product-design1">
                        
                    <div className="badges1"><span>-37%</span></div>

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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
                    </div>
                </div>
            </div> 
        </div>





            {/* fifth-card */}


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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
                    </div>
                </div>
            </div> 
        </div>

        







                {/* six-card */}

        <div className='card-div'>
                    <div className="product-card6">
                        
                    <div className="tip1">

                    <div className='tip'>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText6("Quick View")}
                        onMouseLeave={() => setHoverText6("")}
                    >
                        <IoEyeOutline className='fa'/>
                        {hoverText6 === "Quick View" && <div className="tooltip">{hoverText6}</div>}
                    </div>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText6("Add To Wishlist")}
                        onMouseLeave={() => setHoverText6("")}
                    >
                        <FaRegHeart className='fa'/>
                        {hoverText6 === "Add To Wishlist" && <div className="tooltip">{hoverText6}</div>}
                    </div>

                    <div
                        className="icon"
                        onMouseEnter={() => setHoverText4("Add To Compare")}
                        onMouseLeave={() => setHoverText4("")}
                    >
                        <FaShuffle className='fa'/>
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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
                    </div>
                </div>
            </div> 
        </div>



             {/* seven-card */}

        <div className='card-div'>
                    <div className="product-design7">
                        
                    <div className="badges1"><span>-37%</span></div>

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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
                    </div>
                </div>
            </div> 
        </div>


        
           {/* Eight-card */}


           <div className='card-div'>
                    <div className="product-design">
                        
                    <div className="badges"><span>Hot</span></div>

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
                        <button className='cart'> <IoCartOutline size={14}/> Add</button>
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

    </>
    )
}

export default Home