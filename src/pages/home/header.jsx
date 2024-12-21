  import zerd from "../../assets/zerds.png"
  import './header.css'
  import { RiArrowDropDownLine } from "react-icons/ri";
  import { IoSearchOutline } from "react-icons/io5";
  import { GrCycle } from "react-icons/gr";
  import { FaRegHeart } from "react-icons/fa";
  import { IoCartOutline } from "react-icons/io5";
  import { FaRegUser } from "react-icons/fa";
  import { FiHeadphones } from "react-icons/fi";
  import { AiOutlineAppstore } from "react-icons/ai";
import Nflag from "../../assets/icons8-nigeria-flag-48.png"
import './header.css';
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import icon1 from "../../assets/icon-1.png"
import icon2 from "../../assets/icon-2.png"
import icon3 from "../../assets/icon-3.png"
import icon4 from "../../assets/icon-4.png"
import icon5 from "../../assets/icon-5.png"
import icon6 from "../../assets/icon-6.png"
import icon7 from "../../assets/icon-7.png"
import icon8 from "../../assets/icon-8.png"
import icon9 from "../../assets/icon-9.png"
import icon10 from "../../assets/icon-10.png"
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollHeight = window.scrollY;
        if (scrollHeight > 200) { // Adjust this value as needed
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
      
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

     return (
        <>
            <div className="top-div">
                <div className="order-track">
                    <p className="ab-txt">About Us</p>
                    <p className="trck-txt">Order Tracking</p>
                </div>
                
                <div className="trend-bx">
                    <IoIosNotificationsOutline className="not-icon" />
                    <p> 
                    <span className="t-txt">Trendy 25</span> 
                    <span className="silver-txt">silver jewelry, save up 35% off today</span> 
                    <span className="shop-txt">Shop now</span>
                    </p>
                </div>

                <div className="top-need">
                    <p className="need-txt">Need help?</p>
                    <p className="call-txt">Call Us: <span className="n-txt">1900-888</span></p>
                    <div className="eng-div">
                        <img className="nig-flag" src={Nflag} alt="" />
                        <p>English</p>
                        {/* icons */}
                    </div>
                    <div className="usd-div">
                        <p> USD</p>
                        {/* icons */}
                    </div>
                </div>
            </div>
            <nav className={`header ${isFixed ? "fixed" : ""}`}>
                <div className="menu-logo">
                    <div className="menu">
                        <IoMenuSharp className="menu-icon"/>
                    </div>
                <div>
                    <img className="zerd-img" src={zerd} alt="" />
                </div>
                </div>
                <div className="head-inner">
                    <div className="search-div">
                        <div className="cat-div">
                            <p className="cat-txt">All Categories</p>
                            <RiArrowDropDownLine className="drop-icon" />
                        </div>
                        <div className="s-inner">
                            <input className="search-head" type="search" placeholder="Search for items..." />
                            <IoSearchOutline className="search-icon" />
                        </div>
                    </div>
                    <div className="thr-head">
                        <div className="com">
                            <GrCycle className="s-icons" />
                            <Link to="/comparable">Compare</Link>
                            <div className="three">3</div>
                        </div>
                        <div className="wish">
                            <FaRegHeart className="s-icons" />
                            <Link to="/wishlist">Wishlist</Link>
                            <div className="six">6</div>
                        </div>
                        <div className="carts">
                            <IoCartOutline className="s-icons" />
                            <Link to="/cart">Cart</Link>
                            <div className="two">2</div>
                        </div>
                        <div className="acc">
                            <FaRegUser className="s-icons" />
                            <p>Account</p>
                        </div>
                    </div>
                </div>

            </nav>

            <div className="brow-div">
                <div className="brow-new">
                    <div className="click-cont">
                    <div className="browse-cat" onClick={toggleDropdown}>
                        <AiOutlineAppstore className="s-icon" />
                        <p>Browse All Categories </p>
                        <RiArrowDropDownLine className="drop-icons" />
                    </div>
                    {isDropdownOpen && (
                        <div className="brow-cate">
                           <div className="cate-cont">
                            <div className="milk-cont">
                                <img src={icon1} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon2} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon3} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon4} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon5} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                           </div>

                           <div className="cate-cont">
                            <div className="milk-cont">
                                <img src={icon6} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon7} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon8} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon9} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                            <div className="milk-cont">
                                <img src={icon10} alt="" />
                                <div className="milk-div">
                                    <p>Milks and</p>
                                    <p>Dairies</p>
                                </div>
                            </div>
                           </div>
                        </div>
                    )}
                    </div>
                    <div className="brow-sec">
                        <div>
                            <div className="br-inner">
                                <p className="home-sp">Home</p>
                                {/* <RiArrowDropDownLine className="drop-icon" /> */}
                            </div>
                        </div>

                        <div className="shop">
                            <div className="shop-inner">
                                <p>Shop</p>
                                <RiArrowDropDownLine className="drop-icon" />
                            </div>
                            <div className="shop-side">
                                <p>Shop Grid - Full Width</p>
                                <p>Shop Grid - Left Sidebar</p>
                                <p>Shop Grid - Right Sidebar</p>
                                <p>Products Of Category</p>
                            </div>
                        </div>

                        <div className="shop">
                            <div className="shop-inner">
                                <p>Vendors</p>
                                <RiArrowDropDownLine className="drop-icon" />
                            </div>
                            <div className="shop-sides">
                                <p>Stores - Grid</p>
                                <p>Stores - List</p>
                                <p>Stores - Detail</p>
                            </div>
                        </div>

                        <div className="shop">
                            <div className="shop-inner">
                                <p>Product</p>
                                <RiArrowDropDownLine className="drop-icon" />
                            </div>
                            <div className="shop-sides">
                                <p>Product Right Sidebar</p>
                                <p>Product Left Sidebar</p>
                                <p>Product Full Width</p>
                            </div>
                        </div>

                        <div className="shop">
                            <div className="shop-inner">
                                <p>Blog</p>
                                <RiArrowDropDownLine className="drop-icon" />
                            </div>
                            <div className="shop-side">
                                <p>Blog Grid</p>
                                <p>Blog List</p>
                                <p>Blog Big</p>
                                <p>Blog Wide</p>
                            </div>
                        </div>
                        <div>
                            <p>FAQ</p>
                        </div>
                        <div>
                            <p>contact</p>
                        </div>
                    </div>
                </div>
                <div className="p-brow">
                    <FiHeadphones className="phone-icon" />
                    <div>
                        <h2>1900-888</h2>
                        <p>24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header