  import zerd from "../../assets/zerds.png"
  import './header.css'
  import { RiArrowDropDownLine } from "react-icons/ri";
  import { IoSearchOutline } from "react-icons/io5";
  import { GrCycle } from "react-icons/gr";
  import { FaRegHeart } from "react-icons/fa";
  import { IoCartOutline } from "react-icons/io5";
  import { FaRegUser } from "react-icons/fa";
  import { FiHeadphones } from "react-icons/fi";
  import { FaFireAlt } from "react-icons/fa";
  import { AiOutlineAppstore } from "react-icons/ai";


  const Header = () => {
     return (
        <>
        <div>
            <div>
                <p>About Us</p>
                <p>Order Tracking</p>
            </div>
        </div>
        <nav>
            <div>
                <img className="zerd-img" src={zerd} alt="" />
            </div>
            <div className="head-inner">
            <div className="search-div">
                <div className="cat-div">
                    <p className="cat-txt">All Categories</p>
                    <RiArrowDropDownLine className="drop-icon"/>
                </div>
                <div className="s-inner">
                <input className="search-head" type="search" placeholder="Search for items..." />
               <IoSearchOutline className="search-icon"/>
                </div>
            </div>
            <div className="thr-head">
                <div className="com">
                    <GrCycle className="s-icons"/>
                    <p>Compare</p>
                    <div className="three">3</div>
                </div>
                <div className="wish">
                   <FaRegHeart className="s-icons"/>
                    <p>Wishlist</p>
                    <div className="six">6</div>
                </div>
                <div className="carts">
                  <IoCartOutline className="s-icons"/>
                    <p>Cart</p>
                    <div className="two">2</div>
                </div>
                <div>
                   <FaRegUser className="s-icons"/>
                    <p>Account</p>
                </div>
            </div>
            </div>
            
        </nav>

         <div className="brow-div">
            <div className="brow-new">
            <div className="browse-cat">
                <AiOutlineAppstore className="s-icon"/>
                <p>Browse All Categories </p>
                <RiArrowDropDownLine className="drop-icons"/>
            </div>
            <div className="brow-sec">
                {/* <div>
                   <FaFireAlt className="fire-icon"/>
                     <p>Deals</p>
                </div> */}
                <div>
                    <p>Home</p>
                   <RiArrowDropDownLine  className="drop-icon"/>
                </div>
                <div>
                    <p>About</p>
                </div>
                <div>
                    <p>Shop</p>
                   <RiArrowDropDownLine className="drop-icon"/>
                </div>
                <div>
                    <p>Vendors</p>
                   <RiArrowDropDownLine className="drop-icon"/>
                </div>
              
                <div>
                    <p>Blog</p>
                  <RiArrowDropDownLine className="drop-icon"/>
                </div>
                <div>
                    <p>Pages</p>
                   <RiArrowDropDownLine className="drop-icon"/>
                </div>
                <div>
                    <p>contact</p>
                </div>
            </div>
            </div>
            <div className="p-brow">
                <FiHeadphones className="phone-icon"/>
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