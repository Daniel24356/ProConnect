import './QuickView.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
// import { CiSearch } from "react-icons/ci";
import Header from '../home/header';
import BackImage from "../../assets/promotion/seedbag1-removebg-preview.png"; // Default back image
import FrontImage from "../../assets/promotion/seedbag2-removebg-preview.png";
import { useState } from 'react';
import Rating from '../Rating/Rating';
import { CiHeart, CiShuffle } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import icon1 from "../../assets/product-categories/icon-1.png"
import icon2 from "../../assets/product-categories/icon-2.png"
import icon3 from "../../assets/product-categories/icon-3.png"
import icon4 from "../../assets/product-categories/icon-4.png"
import icon5 from "../../assets/product-categories/icon-5.png"
import icon6 from "../../assets/product-categories/icon-6.png"
import icon7 from "../../assets/product-categories/icon-7.png"
import icon8 from "../../assets/product-categories/icon-8.png"
import icon9 from "../../assets/product-categories/icon-9.png"
import icon10 from "../../assets/product-categories/icon-10.png"
import { FaArrowRightLong } from "react-icons/fa6";
import SmallCards from '../SmallCards/SmallCard';
import Review from '../Review/Review'; 
import Faq from '../FAQ/Faq';


const QuickView = () => {


  const images = [
    { href: "https://nest.botble.com/storage/products/8-1.jpg", src: "https://nest.botble.com/storage/products/8-1-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/12.jpg", src: "https://nest.botble.com/storage/products/12-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/16-5.jpg", src: "https://nest.botble.com/storage/products/16-5-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/18-1.jpg", src: "https://nest.botble.com/storage/products/18-1-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/20-1.jpg", src: "https://nest.botble.com/storage/products/20-1-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/5.jpg", src: "https://nest.botble.com/storage/products/5-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/16-6.jpg", src: "https://nest.botble.com/storage/products/16-6-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/19-1.jpg", src: "https://nest.botble.com/storage/products/19-1-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/10-1.jpg", src: "https://nest.botble.com/storage/products/10-1-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    { href: "https://nest.botble.com/storage/products/22-1.jpg", src: "https://nest.botble.com/storage/products/22-1-150x150.jpg", alt: "Seeds of Change Organic Quinoe" },
    
    // Add other images as needed
  ];




  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);


  const [activeTab, setActiveTab] = useState("description");

    const tabs = [
    {
      id: "description",
      label: "Description",
      content: (
        <div>
          <p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains’ signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p><p>- Casual unisex fit</p><p>- 64% polyester, 36% polyurethane</p><p>- Water column pressure: 4000 mm</p><p>- Model is 187cm tall and wearing a size S / M</p><p>- Unisex fit</p><p>- Drawstring hood with built-in cap</p><p>- Front placket with snap buttons</p><p>- Ventilation under armpit</p><p>- Adjustable cuffs</p><p>- Double welted front pockets</p><p>- Adjustable elastic string at hempen</p><p>- Ultrasonically welded seams</p><p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>
        </div>
      ),
    },
    {
      id: "specification",
      label: "Specification",
      content: (
        <div className='col-xl-10'>
          <table><tbody><tr><td>Height</td><td> 61.15 cm </td></tr><tr><td>Width</td><td> 79.95 cm </td></tr><tr><td>Weight</td><td> 39.6 cm </td></tr><tr><td>Power</td><td> 26.92 cm </td></tr><tr><td>Speed</td><td> 78.16 cm </td></tr></tbody></table>
        </div>
      ),
    },
    {
      id: "reviews",
      label: "Reviews (10)",
      content: (
        <div>
      <div className="row g-3">
      <div className="col-12 col-md-4">
        <div className="product-review-number">
          <h3 className="product-review-number-title">Customer reviews</h3>
          <div className="product-review-summary">
            <div className="product-review-summary-value">
              <span>2.50</span>
            </div>
            <div className="product-review-summary-rating">
              <div className="bb-product-rating ">
                <span></span>
              </div>
              <p>(10 Reviews)</p>
            </div>
          </div>
          <div className="product-review-progress">
            {['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'].map((star, index) => {
              const progressValues = [10, 10, 30, 20, 30]; // Corresponding progress values
              return (
                <div className="product-review-progress-bar" key={index}>
                  <span className="product-review-progress-bar-title">{star}</span>
                  <div className="progress product-review-progress-bar-value">
                    <div
                      role="progressbar"
                      aria-valuenow={progressValues[index]}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar page_speed_1892896772"
                      style={{ width: `${progressValues[index]}%` }}
                    ></div>
                  </div>
                  <span className="product-review-progress-bar-percent">{progressValues[index]}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="col-12 col-md-8">
        <h4 className='addreview'>Add your review</h4>
        <p className='paragraph'>
          Your email address will not be published. Required fields are marked *
          <span className="required"></span>
        </p>
        <p id="denger">
          Please <a href="#">login</a> to write review!
        </p>

        <form
          method="POST"
          action="#"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
        >
          <input
            className='inputtag'
            name="_token"
            type="hidden"
            value="2ZZBdCyLAINBFZa81cyw8yWQ7A79mGIHpDsHBkvv"
          />
          <input name="product_id" type="hidden" value="1" />

          <div className="d-flex align-items-center mb-3">
            <label className="form-label mb-0 required" htmlFor="rating">
              Your rating:
            </label>
            <div className="form-rating-stars ms-2">
              <Rating></Rating>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="comment" className="form-label required">
              Review:
            </label>
            <textarea
              className="form-control"
              name="comment"
              required
              rows="8"
              placeholder="Write your review"
              disabled
            ></textarea>
          </div>

          <div className="image-upload__viewer d-flex">
            <div className="image-viewer__list position-relative">
              <div className="image-upload__uploader-container">
                <div className="d-table">
                  <div className="image-upload__uploader">
                    <svg
                      className=" svg-icon-ti-ti-photo"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 8h.01"></path>
                      <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
                      <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
                      <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
                    </svg>
                    <div className="image-upload__text">Upload photos</div>
                    <input
                      className="image-upload__file-input"
                      name="images[]"
                      data-max-files="6"
                      data-max-size="2048"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      multiple
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div role="alert" className="image-upload-info alert alert-info p-2">
            <div className="small d-flex align-items-center gap-1">
              <svg
                className=" svg-icon-ti-ti-info-circle"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
              You can upload up to 6 photos, each photo maximum size is 2 MB.
            </div>
          </div>

          <button type="submit" className=" btn-primary disabled" disabled>
            Submit
          </button>
        </form>
      </div>







      <div className="review-images-container">
      <h4 className="Asap">Images from customer (26)</h4>
      <div className="row g-1 review-images">
        {images.map((image, index) => (
          <a
            key={index}
            href={image.href}
            className="col-3 col-md-2 col-xl-1 position-relative page_speed_127096843"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="img-thumbnail"
            />
            {/* {image.more && (
              <>
                <div className="remit"></div>
                <div className="remit1">
                  <span className=" bg-dark">+14 more</span>
                </div>
              </>
            )} */}
          </a>
        ))}
      </div>
    </div>
    <Review></Review>








    </div>
        </div>
      ),
    },
    {
      id: "Vendor",
      label: "Vendor",
      content: (
        <div>
          <div className="tab-pane fade active show" id="tab-vendor"><div className="vendor-logo d-flex mb-30"><img src="https://nest.botble.com/storage/stores/1.png" alt="GoPro"/><div className="vendor-name ml-15"><p className="font-heading h6"><a href="https://nest.botble.com/en/stores/gopro">GoPro</a></p><div className="product-rate-cover text-end"><div className="product-rate d-inline-block"><div className="product-rating page_speed_1384345447"></div></div><span className="font-small ml-5 text-muted"> (60 reviews)</span></div></div></div><ul className="contact-infor mb-50"><li><img src="https://nest.botble.com/themes/nest/imgs/theme/icons/icon-location.svg" alt="Address"/><strong>Address: </strong><span>521 Pat Crest, Dameonhaven, Michigan, IT</span></li><li><img src="https://nest.botble.com/themes/nest/imgs/theme/icons/icon-contact.svg" alt="Contact Seller"/><strong>Contact Seller: </strong><span>+17749778923</span></li></ul><div className='Sequi '> Sequi sit ipsam illo maxime repellat. Adipisci illum odit illo assumenda consequatur eligendi. Quisquam debitis voluptas qui dolore qui modi. </div></div>
        </div>
      ),
    },
    {
      id: "Questions and Answers",
      label: "Questions and Answers",
      content: (
        <div>
            <Faq></Faq>
        </div>
      ),
    },
  ];

  
 




  const [selectedImage, setSelectedImage] = useState("back");
  const [slideDirection, setSlideDirection] = useState("");

  const handleThumbnailClick = (image) => {
    const direction = image === "back" ? "slide-in-left" : "slide-in-right";
    setSlideDirection(direction); // Add direction for animation
    setTimeout(() => {
      setSelectedImage(image);
      setSlideDirection(""); // Reset animation after it completes
    }, 400); 
  };

  return (
    <div>
      <Header />
      <section className='QuickView'>
        <div className='Viewdiv'>
          <div className="Viewcards1">
            <figure className='Viewfigure'>
              {/* <CiSearch className='zoom-icon' style={{ width: "40px", height: "40px", color:"#7E7E7E" }}/> */}
              <img
                src={selectedImage === "front" ? FrontImage : BackImage}
                alt="Main Product"
                className={`main-image ${slideDirection}`}
              />
            </figure>

            <div className="thumbnail-container">
              <div
                className={`thumbnail-wrapper ${
                  selectedImage === "back" ? "selected" : ""
                }`}
                onClick={() => handleThumbnailClick("back")}
              >
                <img
                  src={BackImage}
                  alt="Back of Product"
                  className="thumbnail-image"
                />
              </div>

              <div
                className={`thumbnail-wrapper ${
                  selectedImage === "front" ? "selected" : ""
                }`}
                onClick={() => handleThumbnailClick("front")}
              >
                <img
                  src={FrontImage}
                  alt="Front of Product"
                  className="thumbnail-image"
                />
              </div>
            </div>
            <div className="share">
              <p><GoShareAndroid /> Share this</p>
              <span>
              <FaSquareFacebook style={{ width: "40px", height: "40px", color:"#3b5999"}}/>
              <FaSquareXTwitter style={{ width: "40px", height: "40px", }}/>
              <FaSquareWhatsapp style={{ width: "40px", height: "40px", color:"#3BB77E" }}/>
              </span>
              <p><MdOutlineEmail />
              Email to a friend
              </p>
            </div>
          </div>

          <div className="Viewcards2">
            <div className="detailinfo">
              <h2>Seeds of Change Organic Quinoe</h2>
            </div>
            <div className="detail-info-info">
              <div className='rating11'>
                <div className="product-rating page_speed_1355015666"style={{ width: "62%"}}></div>
              </div>
              <span className="">(10 reviews)</span>
            </div>

            <div className="detail-info-price">
              <span className='current-price'>$1,692.00</span>

              <div className="oldprice-container">
                <span className="save-price font-md color3 ml-15 ">
                  <span className="percentage-off">-37% Off</span></span>
                  <span className="old-price-product1 font-md ml-15 ">$2,331.00</span>
                </div>
              
            </div>

            <div className='short-disc'>
                  <h2 className='peak'>
                    <span className='disc-detail'>Sold By: </span>
                    <a href="#"><strong>GoPro</strong></a>
                  </h2>
                  <p>
                      Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.
                  </p>
                  <p>
                  <img className='page-speed' src="/src/assets/promotion/clock.png#" alt="" />
                    1 Year AL Jaze
                    era Brand Warranty
                  </p>
                  <p>
                  <img className='page-speed' src="/src/assets/promotion/paper-plane.png" alt="" />
                    30 Day Return Policy
                  </p>
                  <p>
                  <img className='page-speed' src="/src/assets/promotion/credit-card.png" alt="" />
                    Cash on Delivery available
                  </p>
            </div>


            <div className='container'>
      <div className='section'>
        <label>Weight</label>
        <div className='valueBox'>
          4KG
          <div className='corner'>
          </div>
        </div>
      </div>

      <div className='section'>
        <label>Boxes</label>
        <div className='valueBox'>
          5 Boxes
          <div className='corner'></div>
        </div>
      </div>

      <div  className='section'>
        <label>Availability: <span className='available'>19 products available</span></label>
      </div>

      <div className='quantitySection'>
        <div className='quantitySelector'>
          <span>{quantity}</span>
          <span className='span3'><button onClick={increaseQuantity} className='quantityButton'><FaChevronUp /></button>
          <button onClick={decreaseQuantity} className='quantityButton'><FaChevronDown /></button></span>
        </div>
      </div>

      <div className='actions'>
        <button className='addToCart'>
          <span className='cartIcon'><IoCartOutline style={{ fontSize: "18px", color:"white"}} /></span>
          Add to cart
        </button>
        <button className='buyNow'>Buy Now</button>
        <button className='iconButton1'>
          <CiHeart/>
        </button>
      </div>

      <div className='shuffle'>
        <CiShuffle/>
      </div>

      <div className='details'>
        <p className='categories123'>
        <p>SKU: SG-184-A1</p>
          Categories: {' '}
          <a href="#">Milks and Dairies</a>, {' '}
          <a href="#">Wines & Drinks</a>, {' '}
          <a href="#">Bread and Juice</a>, {' '}
          <a href="#">Cake & Milk</a><br />
      
          Tags: {' '}
          <a href="#">Wallet</a>, {' '}
          <a href="#">Clothes</a>, {' '}
          <a href="#">Hand bag</a>, {' '}<br />

          Brands: {' '}
          <a href="#">Babian</a>, {' '}
        </p>
        
      </div>
    </div>
            
          </div>
          <div className="Viewcards3">
            <div className="widget-Category">
              <h5 className='section-title'>Categories</h5>
              <ul>
                <li>
                  <span><img src={icon1} alt="Milks and Dairies" />
                  Milks and Dairies </span>
                    <span className="count">6</span>
                </li>
                <li>
                <span><img src={icon2} alt="Clothing & beauty" />
                Clothing & beauty </span> 
                <span className="count">9</span>
                </li>
                <li>
                <span><img src={icon3} alt="Pet Toy" />
                Pet Toy </span>
                <span className="count">7</span>
                </li>
                <li>
                  <span><img src={icon4} alt="Baking material" />
                  Baking material </span> 
                  <span className="count">6</span>
                </li>
                <li>
                  <span><img src={icon5} alt=" Fresh Fruit " />
                  Fresh Fruit </span>  
                  <span className="count">8</span>
                </li>
                <li>
                  <span><img src={icon6} alt="Handbag" />
                  Handbag  </span>
                  <span className="count">9</span>
                </li>
                <li>
                  <span><img src={icon7} alt=" Fresh Seafood" />
                  Fresh Seafood </span>  
                  <span className="count">6</span>
                </li>
                <li>
                  <span><img src={icon8} alt="Fast food" />
                  Fast food </span>  
                  <span className="count">6</span>
                </li>
                <li>
                  <span> <img src={icon9} alt=" Vegetables" />
                  Vegetables </span>   
                  <span className="count">3</span>
                </li>
                <li>
                  <span><img src={icon10} alt="Electronics" />
                  Bread and Juice</span>  
                  <span className="count">9</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>




      <section className='tab-style2'>
            
        <div className="product-infos">


     
          




        <ul className="nav-tabs">




        <div>
      {/* Tab Buttons */}
      <div className="nav-tab1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="ck-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>

          
        </ul></div>

          

        <div className="new-product">
          <div className='sidebar-widget'>
          <h5 className='section-title'>New products</h5>
         <section className='new-span'>
         <div className="single-post clearfix">
            <div className="image"><img src="https://nest.botble.com/storage/products/1-400x400.jpg" alt="Seeds of Change Organic Quinoe"/></div>
            <div className="content"><h5><a href="https://nest.botble.com/products/seeds-of-change-organic-quinoe">Seeds of Change Organic Quinoe</a></h5>
            <p className="price-content mb-0 mt-5">$1,692.00</p><div className="product-rate d-inline-block">
            <div className="product-rating page_speed_1531688978"></div></div></div></div>

            <div className="single-post clearfix">
            <div className="image"><img src="https://nest.botble.com/storage/products/1-400x400.jpg" alt="Seeds of Change Organic Quinoe"/></div>
            <div className="content"><h5><a href="https://nest.botble.com/products/seeds-of-change-organic-quinoe">Seeds of Change Organic Quinoe</a></h5>
            <p className="price-content mb-0 mt-5">$1,692.00</p><div className="product-rate d-inline-block">
            <div className="product-rating page_speed_1531688978"></div></div></div></div>
            
            <div className="single-post clearfix">
            <div className="image"><img src="https://nest.botble.com/storage/products/1-400x400.jpg" alt="Seeds of Change Organic Quinoe"/></div>
            <div className="content"><h5><a href="https://nest.botble.com/products/seeds-of-change-organic-quinoe">Seeds of Change Organic Quinoe</a></h5>
            <p className="price-content mb-0 mt-5">$1,692.00</p><div className="product-rate d-inline-block">
            <div className="product-rating page_speed_1531688978"></div></div></div></div>

         </section>

          </div>


          <div className='banner-img'>
                <img src="https://nest.botble.com/storage/promotion/6.png" alt="Save 17% on Oganic Juice"/>
                <div className="banner-text"><span>Oganic</span>
                <h4>Save 17% <br/>on Oganic <br/>Juice</h4>
                <a href="#" className="btn1 btn-xs"> Shop now <FaArrowRightLong className='i'/></a></div>
          </div>
        </div>
      </section>

     <SmallCards></SmallCards>
    </div>
    
  );  
};

export default QuickView;


