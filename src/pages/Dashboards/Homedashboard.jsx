import './Homedashboard.css'
import Header from "../home/header"
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { TbCreditCardRefund } from "react-icons/tb";
import { GoBook } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import profile from "../../assets/profile.jpg"
import { IoCameraOutline } from "react-icons/io5";
import { GoCheckCircle } from "react-icons/go";
const Homedashboard = () => {
  return (
    <>
      <Header/>
      <div className="main-dashboard-div">
         <div className="left-dashboard-div">
            <Link className='important-link'><IoHomeOutline/> Overview</Link>
            <Link className='less-link'><MdOutlineShoppingCart/> Orders</Link>
            <Link className='less-link'><FaRegStar/> Reviews</Link>
            <Link className='less-link'><BsDownload/> Downloads</Link>
            <Link className='less-link'><TbCreditCardRefund/> Order Return Requests</Link>
            <Link className='less-link'><GoBook/> Addresses</Link>
            <Link className='less-link'><IoSettingsOutline/> Account Settings</Link>
            <Link className='less-link'><BsShop/> Become a vendor</Link>
            <Link className='less-link'><FiLogOut/> Log Out</Link>
         </div>

         <div className="right-dashboard-div">
            <div className="top-right-div">
                <div className="the-profile-div">
                    <img src={profile} alt="" className='pic'/>
                    <button className="camera"><IoCameraOutline/></button>
                </div>

                <div className="greetings-div">
                    <p className="hello">Hello, User</p>
                    <p className="details">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                </div>
            </div>

            <div className="no-orders">
               <p className="orders"><GoCheckCircle/> No orders has been made yet.</p>

               <Link className='browse'>Browse Products</Link>
            </div>
         </div>
      </div>
    </>
  )
}

export default Homedashboard