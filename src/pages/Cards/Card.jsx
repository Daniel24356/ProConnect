import { useState } from 'react'
import Rating from '../Rating/Rating';
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
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
import '../home/home.css'



const Card = () => {

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
  const [hoverText9, setHoverText9] = useState("");

  return (
    <>
      <div className='card-div' onMouseOver={() => setIsHoveredCard8(true)}
        onMouseOut={() => setIsHoveredCard8(false)}>
        <div className="product-card" onMouseOver={() => setPicCard8(true)} onMouseOut={() => setPicCard8(false)}>
          <div className="badges1"></div>{isHoveredCard8 &&
            <>
              <div className="tip3">

                <div className='tip2'>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText("Quick View")}
                    onMouseLeave={() => setHoverText("")}
                  >
                    <IoEyeOutline className='fa' />
                    {hoverText === "Quick View" && <div className="tooltip">{hoverText}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText("Add To Wishlist")}
                    onMouseLeave={() => setHoverText("")}
                  >
                    <FaRegHeart className='fa' />
                    {hoverText === "Add To Wishlist" && <div className="tooltip">{hoverText}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText("Add To Compare")}
                    onMouseLeave={() => setHoverText("")}
                  >
                    <FaShuffle className='fa' />
                    {hoverText === "Add To Compare" && <div className="tooltip">{hoverText}</div>}
                  </div>

                </div>
              </div>
            </>}
          <img src={img1A} alt="" style={{ display: picCard8 ? 'flex' : 'none', animationName: picCard8 ? 'fadeAndTransform' : '' }} />
          <img src={img1B} alt="" style={{ display: picCard8 ? 'none' : 'flex' }} />

          <div className='details1'>
            <div className="lightspan1">Cake $ Milk</div>

            <div className="info1">
              <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' style={{ width: "77.77778%" }}></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>Sold By <a href="#" className='a'>Global Official</a></span>
              </div>
            </div>
            <div className="prices">
              <span>$1,845.00</span>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>











      {/* Second-card */}


      <div className='card-div' onMouseOver={() => setIsHoveredCard7(true)}
        onMouseOut={() => setIsHoveredCard7(false)}>
        <div className="product-design" onMouseOver={() => setPicCard7(true)} onMouseOut={() => setPicCard7(false)}>

          <div className="badges"><span>Hot</span></div>{isHoveredCard7 &&
            <>
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
            </>}
          <img src={img2B} alt="" style={{ display: picCard7 ? 'flex' : 'none', animationName: picCard7 ? 'fadeAndTransform' : '' }} />
          <img src={img2A} alt="" style={{ display: picCard7 ? 'none' : 'flex' }} />

          <div className='details1'>
            <div className="lightspan1">Pet Food</div>

            <div className="info1">
              <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' style={{ width: "60%" }}></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>Sold By <a href="#" className='a'>GoPro</a></span>
              </div>
            </div>
            <div className="price-cart">
              <div className='span1'>
                <p className='old-price'>$1,845.00</p>
                <p className='new-price'>$1,845.00</p>
              </div>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>



      {/* third-card */}

      <div className='card-div' onMouseOver={() => setIsHoveredCard6(true)}
        onMouseOut={() => setIsHoveredCard6(false)}>
        <div className="product-card4" onMouseOver={() => setPicCard6(true)} onMouseOut={() => setPicCard6(false)}>
          <div className="badges1"></div>{isHoveredCard6 &&
            <>
              <div className="tip3">

                <div className='tip2'>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText3("Quick View")}
                    onMouseLeave={() => setHoverText3("")}
                  >
                    <IoEyeOutline className='fa' />
                    {hoverText3 === "Quick View" && <div className="tooltip">{hoverText3}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText3("Add To Wishlist")}
                    onMouseLeave={() => setHoverText3("")}
                  >
                    <FaRegHeart className='fa' />
                    {hoverText3 === "Add To Wishlist" && <div className="tooltip">{hoverText3}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText3("Add To Compare")}
                    onMouseLeave={() => setHoverText3("")}
                  >
                    <FaShuffle className='fa' />
                    {hoverText3 === "Add To Compare" && <div className="tooltip">{hoverText3}</div>}
                  </div>

                </div>
              </div>
            </>}
          <img src={img3B} alt="" style={{ display: picCard6 ? 'flex' : 'none', animationName: picCard6 ? 'fadeAndTransform' : '' }} />
          <img src={img3A} alt="" style={{ display: picCard6 ? 'none' : 'flex' }} />
          <div className='details1'>
            <div className="lightspan1">Cake $ Milk</div>

            <div className="info1">
              <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' style={{ width: "30%" }}></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>Sold By <a href="#" className='a'>Global Official</a></span>
              </div>
            </div>
            <div className="prices">
              <span>$1,845.00</span>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>









      {/* fourth-card */}

      <div className='card-div' onMouseOver={() => setIsHoveredCard5(true)}
        onMouseOut={() => setIsHoveredCard5(false)}>
        <div className="product-design1" onMouseOver={() => setPicCard5(true)} onMouseOut={() => setPicCard5(false)}>

          <div className="badges1"><span>-37%</span></div>{isHoveredCard5 &&
            <>
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
            </>}
          <img src={img4B} alt="" style={{ display: picCard5 ? 'flex' : 'none', animationName: picCard5 ? 'fadeAndTransform' : '' }} />
          <img src={img4A} alt="" style={{ display: picCard5 ? 'none' : 'flex' }} />
          <div className='details1'>
            <div className="lightspan1">Pet Food</div>

            <div className="info1">
              <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' ></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
              </div>
            </div>
            <div className="price-cart">
              <div className='span1'>
                <p className='old-price'>$1,845.00</p>
                <p className='new-price'>$1,845.00</p>
              </div>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>





      {/* fifth-card */}


      <div className='card-div' onMouseOver={() => setIsHoveredCard4(true)} onMouseOut={() => setIsHoveredCard4(false)}>
        <div className="product-card5" onMouseOver={() => setPicCard4(true)} onMouseOut={() => setPicCard4(false)}>
          <div className="badges"><span>Hot</span></div>
          {isHoveredCard4 && (
            <>
              <div className="tip3">
                <div className="tip2">
                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText5("Quick View")}
                    onMouseLeave={() => setHoverText5("")}
                  >
                    <IoEyeOutline className="fa1" />
                    {hoverText5 === "Quick View" && <div className="tooltip1">{hoverText5}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText5("Add To Wishlist")}
                    onMouseLeave={() => setHoverText5("")}
                  >
                    <FaRegHeart className="fa1" />
                    {hoverText5 === "Add To Wishlist" && <div className="tooltip1">{hoverText5}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText5("Add To Compare")}
                    onMouseLeave={() => setHoverText5("")}
                  >
                    <FaShuffle className="fa1" />
                    {hoverText5 === "Add To Compare" && <div className="tooltip1">{hoverText5}</div>}
                  </div>
                </div>
              </div>
            </>
          )}
          <img
            src={img5B}
            alt=""
            style={{ display: picCard4 ? "flex" : "none", animationName: picCard4 ? "fadeAndTransform" : "" }}
          />
          <img src={img5A} alt="" style={{ display: picCard4 ? "none" : "flex" }} />

          <div className="details1">
            <div className="lightspan1">Pet Food</div>

            <div className="info1">
              <span className="product-header1">
                <h2 className="text-truncate1">Seeds of Change Organic Quinoa</h2>
              </span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' style={{ width: "52%" }}></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>
                  Sold By <a href="#" className="a">GoPro</a>
                </span>
              </div>
            </div>

            <div className="price-cart">
              <div className='span1'>
                <p className='old-price'>$1,845.00</p>
                <p className='new-price'>$1,845.00</p>
              </div>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>










      {/* six-card */}

      <div className='card-div' onMouseOver={() => setIsHoveredCard3(true)}
        onMouseOut={() => setIsHoveredCard3(false)}>
        <div className="product-card6" onMouseOver={() => setPicCard3(true)} onMouseOut={() => setPicCard3(false)}>
          <div className="badges1"></div>{isHoveredCard3 &&
            <>
              <div className="tip3">
                <div className='tip2'>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText6("Quick View")}
                    onMouseLeave={() => setHoverText6("")}
                  >
                    <IoEyeOutline className='fa1' />
                    {hoverText6 === "Quick View" && <div className="tooltip1">{hoverText6}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText6("Add To Wishlist")}
                    onMouseLeave={() => setHoverText6("")}
                  >
                    <FaRegHeart className='fa1' />
                    {hoverText6 === "Add To Wishlist" && <div className="tooltip1">{hoverText6}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText4("Add To Compare")}
                    onMouseLeave={() => setHoverText4("")}
                  >
                    <FaShuffle className='fa1' />
                    {hoverText4 === "Add To Compare" && <div className="tooltip1">{hoverText4}</div>}
                  </div>

                </div>
              </div>
            </>}
          <img src={img6A} alt="" style={{ display: picCard3 ? 'flex' : 'none', animationName: picCard3 ? 'fadeAndTransform' : '' }} />
          <img src={img6B} alt="" style={{ display: picCard3 ? 'none' : 'flex' }} />


          <div className='details1'>
            <div className="lightspan1">Cake $ Milk</div>

            <div className="info1">
              <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' style={{ width: "77.77778%" }}></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>Sold By <a href="#" className='a'>Global Official</a></span>
              </div>
            </div>
            <div className="prices">
              <span>$1,845.00</span>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>




      {/* seven-card */}


      <div className='card-div' onMouseOver={() => setIsHoveredCard1(true)} onMouseOut={() => setIsHoveredCard1(false)}>
        <div className="product-design7" onMouseOver={() => setPic(true)} onMouseOut={() => setPic(false)}>
          <div className="badges1"><span>-37%</span></div>
          {isHoveredCard1 && (
            <>
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
            </>
          )}

          <img src={img1} alt="" style={{ display: pic ? 'flex' : 'none', animationName: pic ? 'fadeAndTransform,fadeIn' : '' }} />
          <img src={img2} alt="" style={{ display: pic ? 'none' : 'flex' }} />

          <div className='details1'>
            <div className="lightspan1">Pet Food</div>
            <div className="info1">
              <span className="product-header1">
                <h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2>
              </span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' style={{ width: "50%" }}></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
              </div>
            </div>
            <div className="price-cart">
              <div className='span1'>
                <p className='old-price'>$1,845.00</p>
                <p className='new-price'>$1,845.00</p>
              </div>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>









      {/* Eight-card */}


      <div className='card-div' onMouseOver={() => setIsHoveredCard2(true)} onMouseOut={() => setIsHoveredCard2(false)}>
        <div className="product-design8" onMouseOver={() => setPicCard2(true)} onMouseOut={() => setPicCard2(false)}>
          <div className="badges1"></div>
          {isHoveredCard2 && (
            <>
              <div className="tip3">
                <div className='tip2'>
                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText9("Quick View")}
                    onMouseLeave={() => setHoverText9("")}
                  >
                    <IoEyeOutline className='fa1' />
                    {hoverText9 === "Quick View" && <div className="tooltip1">{hoverText9}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText9("Add To Wishlist")}
                    onMouseLeave={() => setHoverText9("")}
                  >
                    <FaRegHeart className='fa1' />
                    {hoverText9 === "Add To Wishlist" && <div className="tooltip1">{hoverText9}</div>}
                  </div>

                  <div
                    className="icon1"
                    onMouseEnter={() => setHoverText9("Add To Compare")}
                    onMouseLeave={() => setHoverText9("")}
                  >
                    <FaShuffle className='fa1' />
                    {hoverText9 === "Add To Compare" && <div className="tooltip1">{hoverText9}</div>}
                  </div>
                </div>
              </div>
            </>
          )}

          <img src={img8A} alt="" style={{ display: picCard2 ? 'flex' : 'none', animationName: picCard2 ? 'fadeAndTransform,fadeIn' : '' }} />
          <img src={img8B} alt="" style={{ display: picCard2 ? 'none' : 'flex' }} />

          <div className='details1'>
            <div className="lightspan1">Pet Food</div>
            <div className="info1">
              <span className="product-header1">
                <h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2>
              </span>
              <div className="content-info11">
                <div className='rating11'>
                  <div className='product-rating121' style={{ width: "44.44444%" }}></div>
                </div>
                <span className="">(10)</span>
              </div>
              <div className="sold">
                <span>Sold By <a href="#" className='a'>Young Shop</a></span>
              </div>
            </div>
            <div className="price-cart">
              <div className='span1'>
                <p className='old-price'>$1,845.00</p>
                <p className='new-price'>$1,845.00</p>
              </div>
              <button className='cart'> <IoCartOutline style={{ fontSize: "16px" }} /> Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
