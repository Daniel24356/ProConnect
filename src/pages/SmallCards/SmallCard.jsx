import './SmallCard.css'
import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import Rating from '../Rating/Rating';
import img1 from '../../assets/promotion/nestback.jpg';
import img2 from '../../assets/promotion/nestofront.jpg';

const SmallCard = () => {

    const [isHoveredSmallCard1, setIsHoveredSmallCard1] = useState(false);
    const [isHoveredSmallCard2, setIsHoveredSmallCard2] = useState(false);
    const [isHoveredSmallCard3, setIsHoveredSmallCard3] = useState(false);
    const [isHoveredSmallCard4, setIsHoveredSmallCard4] = useState(false);
    const [isHoveredSmallCard5, setIsHoveredSmallCard5] = useState(false);
    const [isHoveredSmallCard6, setIsHoveredSmallCard6] = useState(false);
    const [isHoveredSmallCard7, setIsHoveredSmallCard7] = useState(false);
    const [isHoveredSmallCard8, setIsHoveredSmallCard8] = useState(false);

    const [picSmallCard1, setPicSmallCard1] = useState(false);
    const [picSmallCard2, setPicSmallCard2] = useState(false);
    const [picSmallCard3, setPicSmallCard3] = useState(false);
    const [picSmallCard4, setPicSmallCard4] = useState(false);
    const [picSmallCard5, setPicSmallCard5] = useState(false);
    const [picSmallCard6, setPicSmallCard6] = useState(false);
    const [picSmallCard7, setPicSmallCard7] = useState(false);
    const [picSmallCard8, setPicSmallCard8] = useState(false);


    const [hoverText7, setHoverText7] = useState("");
    const [hoverCardText2, setHoverCardText2] = useState("");
    const [hoverCardText3, setHoverCardText3] = useState("");
    const [hoverCardText4, setHoverCardText4] = useState("");
    const [hoverCardText5, setHoverCardText5] = useState("");
    const [hoverCardText6, setHoverCardText6] = useState("");
    const [hoverCardText9, setHoverCardText9] = useState("");
    const [hoverCardText8, setHoverCardText8] = useState("");

  return (
    <>
          <section className='quickview-productSection'>
              <h5 className='Small-section-title'>You may also like</h5>
        
                              {/* seven-card */}
                  <section className='SmallCard-wrapper'>
                                
                  <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard1(true)} onMouseOut={() => setIsHoveredSmallCard1(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard1(true)} onMouseOut={() => setPicSmallCard1(false)}>
                      <div className="small-badges1"><span>Hot</span></div>
                      {isHoveredSmallCard1 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText2("Quick View")}
                                onMouseLeave={() => setHoverCardText2("")}
                              >
                                <IoEyeOutline className='fa1' />
                                {hoverCardText2 === "Quick View" && <div className="tooltip1">{hoverCardText2}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText2("Add To Wishlist")}
                                onMouseLeave={() => setHoverCardText2("")}
                              >
                                <FaRegHeart className='fa1' />
                                {hoverCardText2 === "Add To Wishlist" && <div className="tooltip1">{hoverCardText2}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText2("Add To Compare")}
                                onMouseLeave={() => setHoverCardText2("")}
                              >
                                <FaShuffle className='fa1' />
                                {hoverCardText2 === "Add To Compare" && <div className="tooltip1">{hoverCardText2}</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <img src={img1} alt="" style={{ display: picSmallCard1 ? 'flex' : 'none', animationName: picSmallCard1 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard1 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "44.444448%" }}></div>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <IoCartOutline style={{ fontSize: "40px" }} /> Add</button>
                        </div>
                      </div>
                    </div>
                    </div>




                            {/* seven-card */}
                              
                            <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard2(true)} onMouseOut={() => setIsHoveredSmallCard2(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard2(true)} onMouseOut={() => setPicSmallCard2(false)}>
                      <div className="badges1"><span>-37%</span></div>
                      {isHoveredSmallCard2 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
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

                      <img src={img1} alt="" style={{ display: picSmallCard2 ? 'flex' : 'none', animationName: picSmallCard2 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard2 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "55.555558%" }}></div>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <IoCartOutline style={{ fontSize: "40px" }} /> Add</button>
                        </div>
                      </div>
                    </div>
                    </div>


                               {/* seven-card */}
                              
                               <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard3(true)} onMouseOut={() => setIsHoveredSmallCard3(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard3(true)} onMouseOut={() => setPicSmallCard3(false)}>
                      <div className="badges1"></div>
                      {isHoveredSmallCard3 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText3("Quick View")}
                                onMouseLeave={() => setHoverCardText3("")}
                              >
                                <IoEyeOutline className='fa1' />
                                {hoverCardText3 === "Quick View" && <div className="tooltip1">{hoverCardText3}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText3("Add To Wishlist")}
                                onMouseLeave={() => setHoverCardText3("")}
                              >
                                <FaRegHeart className='fa1' />
                                {hoverCardText3 === "Add To Wishlist" && <div className="tooltip1">{hoverCardText3}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText3("Add To Compare")}
                                onMouseLeave={() => setHoverCardText3("")}
                              >
                                <FaShuffle className='fa1' />
                                {hoverCardText3 === "Add To Compare" && <div className="tooltip1">{hoverCardText3}</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <img src={img1} alt="" style={{ display: picSmallCard3 ? 'flex' : 'none', animationName: picSmallCard3 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard3 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "44.444448%" }}></div>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <IoCartOutline style={{ fontSize: "40px" }} /> Add</button>
                        </div>
                      </div>
                    </div>
                    </div>






                            {/* seven-card */}
                              
                            <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard4(true)} onMouseOut={() => setIsHoveredSmallCard4(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard4(true)} onMouseOut={() => setPicSmallCard4(false)}>
                      <div className="badges1"><span>-80%</span></div>
                      {isHoveredSmallCard4 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText4("Quick View")}
                                onMouseLeave={() => setHoverCardText4("")}
                              >
                                <IoEyeOutline className='fa1' />
                                {hoverCardText4 === "Quick View" && <div className="tooltip1">{hoverCardText4}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText4("Add To Wishlist")}
                                onMouseLeave={() => setHoverCardText4("")}
                              >
                                <FaRegHeart className='fa1' />
                                {hoverCardText4 === "Add To Wishlist" && <div className="tooltip1">{hoverCardText4}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText4("Add To Compare")}
                                onMouseLeave={() => setHoverCardText4("")}
                              >
                                <FaShuffle className='fa1' />
                                {hoverCardText4 === "Add To Compare" && <div className="tooltip1">{hoverCardText4}</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <img src={img1} alt="" style={{ display: picSmallCard4 ? 'flex' : 'none', animationName: picSmallCard4 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard4 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "65%" }}></div>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <IoCartOutline style={{ fontSize: "40px" }} /> Add</button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </section>
    </section>





                         {/* RELATIONED CARD */}


    <section className='quickview-productSection'>
              <h5 className='Small-section-title'>Related products</h5>
        
                              {/* seven-card */}
                  <section className='SmallCard-wrapper'>
                                
                  <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard5(true)} onMouseOut={() => setIsHoveredSmallCard5(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard5(true)} onMouseOut={() => setPicSmallCard5(false)}>
                      <div className="small-badges1"><span>Hot</span></div>
                      {isHoveredSmallCard5 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText5("Quick View")}
                                onMouseLeave={() => setHoverCardText5("")}
                              >
                                <IoEyeOutline className='fa1' />
                                {hoverCardText5 === "Quick View" && <div className="tooltip1">{hoverCardText5}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText5("Add To Wishlist")}
                                onMouseLeave={() => setHoverCardText5("")}
                              >
                                <FaRegHeart className='fa1' />
                                {hoverCardText5 === "Add To Wishlist" && <div className="tooltip1">{hoverCardText5}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText5("Add To Compare")}
                                onMouseLeave={() => setHoverCardText5("")}
                              >
                                <FaShuffle className='fa1' />
                                {hoverCardText5 === "Add To Compare" && <div className="tooltip1">{hoverCardText5}</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <img src={img1} alt="" style={{ display: picSmallCard5 ? 'flex' : 'none', animationName: picSmallCard5 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard5 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "60%" }}></div>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <IoCartOutline style={{ fontSize: "40px" }} /> Add</button>
                        </div>
                      </div>
                    </div>
                    </div>






                            {/* seven-card */}
                              
                            <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard6(true)} onMouseOut={() => setIsHoveredSmallCard6(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard6(true)} onMouseOut={() => setPicSmallCard6(false)}>
                      <div className="badges1"><span>-37%</span></div>
                      {isHoveredSmallCard6 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText6("Quick View")}
                                onMouseLeave={() => setHoverCardText6("")}
                              >
                                <IoEyeOutline className='fa1' />
                                {hoverCardText6 === "Quick View" && <div className="tooltip1">{hoverCardText6}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText6("Add To Wishlist")}
                                onMouseLeave={() => setHoverCardText6("")}
                              >
                                <FaRegHeart className='fa1' />
                                {hoverCardText6 === "Add To Wishlist" && <div className="tooltip1">{hoverCardText6}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText6("Add To Compare")}
                                onMouseLeave={() => setHoverCardText6("")}
                              >
                                <FaShuffle className='fa1' />
                                {hoverCardText6 === "Add To Compare" && <div className="tooltip1">{hoverCardText6}</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <img src={img1} alt="" style={{ display: picSmallCard6 ? 'flex' : 'none', animationName: picSmallCard6 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard6 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "77.77778%" }}></div>
                            </div>
                            <span className="">(9)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <IoCartOutline style={{ fontSize: "40px" }} /> Add</button>
                        </div>
                      </div>
                    </div>
                    </div>


                               {/* seven-card */}
                              
                               <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard7(true)} onMouseOut={() => setIsHoveredSmallCard7(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard7(true)} onMouseOut={() => setPicSmallCard7(false)}>
                      <div className="badges1"></div>
                      {isHoveredSmallCard7 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText9("Quick View")}
                                onMouseLeave={() => setHoverCardText9("")}
                              >
                                <IoEyeOutline className='fa1' />
                                {hoverCardText9 === "Quick View" && <div className="tooltip1">{hoverCardText9}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText9("Add To Wishlist")}
                                onMouseLeave={() => setHoverCardText9("")}
                              >
                                <FaRegHeart className='fa1' />
                                {hoverCardText9 === "Add To Wishlist" && <div className="tooltip1">{hoverCardText9}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText9("Add To Compare")}
                                onMouseLeave={() => setHoverCardText9("")}
                              >
                                <FaShuffle className='fa1' />
                                {hoverCardText9 === "Add To Compare" && <div className="tooltip1">{hoverCardText9}</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <img src={img1} alt="" style={{ display: picSmallCard7 ? 'flex' : 'none', animationName: picSmallCard7 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard7 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "52%" }}></div>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <IoCartOutline style={{ fontSize: "40px" }} /> Add</button>
                        </div>
                      </div>
                    </div>
                    </div>




                            {/* seven-card */}
                              
                            <div className='smallcard-div' onMouseOver={() => setIsHoveredSmallCard8(true)} onMouseOut={() => setIsHoveredSmallCard8(false)}>
                    <div className="Small-product" onMouseOver={() => setPicSmallCard8(true)} onMouseOut={() => setPicSmallCard8(false)}>
                      <div className="green-badge"><span>NEW</span></div>
                      {isHoveredSmallCard8 && (
                        <>
                          <div className="small3">
                            <div className='small2'>
                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText8("Quick View")}
                                onMouseLeave={() => setHoverCardText8("")}
                              >
                                <IoEyeOutline className='fa1' />
                                {hoverCardText8 === "Quick View" && <div className="tooltip1">{hoverCardText8}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText8("Add To Wishlist")}
                                onMouseLeave={() => setHoverCardText8("")}
                              >
                                <FaRegHeart className='fa1' />
                                {hoverCardText8 === "Add To Wishlist" && <div className="tooltip1">{hoverCardText8}</div>}
                              </div>

                              <div
                                className="icon1"
                                onMouseEnter={() => setHoverCardText8("Add To Compare")}
                                onMouseLeave={() => setHoverCardText8("")}
                              >
                                <FaShuffle className='fa1' />
                                {hoverCardText8 === "Add To Compare" && <div className="tooltip1">{hoverCardText8}</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <img src={img1} alt="" style={{ display: picSmallCard8 ? 'flex' : 'none', animationName: picSmallCard8 ? 'fadeAndTransform,fadeIn' : '' }} />
                      <img src={img2} alt="" style={{ display: picSmallCard8 ? 'none' : 'flex' }} />

                      <div className='small-details'>
                        <div className="small-span">Pet Food</div>
                        <div className="info1">
                          <span className="product-header1">
                            <h2 className='small-text'>Seeds of Change Organic Quinoe</h2>
                          </span>
                          <div className="content-info11">
                            <div className='rating11'>
                            <div className='product-rating121' style={{ width: "44%" }}></div>
                            </div>
                            <span className="">(10)</span>
                          </div>
                          <div className="sold">
                            <span>Sold By <a href="#" className='a'>Yound Shop</a></span>
                          </div>
                        </div>
                        <div className="price">
                          <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p></span>
                          <button className='cart'> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>Add</button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </section>
    </section>
    </>
  )
}

export default SmallCard