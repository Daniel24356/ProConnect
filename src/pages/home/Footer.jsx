import './home.css'
import zerd from '../../assets/promotion/zerds.png';
import apple from '../../assets/promotion/apple.jpg';
import google from '../../assets/promotion/google.jpg';
import visa from '../../assets/promotion/visa.png';
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const Footer = () => {

    return(
        <>
          <section className="contact">
                  <div className="topcontact">
                    <div className="leftdiv">
                      <a href="" className="logo"><img src={zerd} alt="" width={"180px"} /></a>
                      <p className="awesome">Awesome grocery store website template</p>
                      <div className="info-div">
                        <CiLocationOn className='location' />
                        <p className="address-info"><span className="idk">Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                      </div>

                      <div className="info-div">
                        <TfiHeadphoneAlt className='location' />
                        <p className="address-info"><span className="idk">Call Us: </span>(+91) - 540-025-124553</p>
                      </div>

                      <div className="info-div">
                        <FaRegPaperPlane className='location' />
                        <p className="address-info"><span className="idk">Email: </span>sale@Nest.com</p>
                      </div>

                      <div className="info-div">
                        <FaRegClock className='location' />
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
export default Footer