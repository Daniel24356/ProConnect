import './home.css'
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronRight } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Navigation, Autoplay } from 'swiper/modules';
// import carrot from '../../assets/promotion/carrot.jpg';
// import pepper from '../../assets/promotion/pepper.jpg';
// import mango from '../../assets/promotion/mango.jpg';
// import banana from '../../assets/promotion/banana.jpg';
// import watermelon from '../../assets/promotion/watermelon.jpg';
// import kiwi from '../../assets/promotion/kiwi.jpg';
// import raw from '../../assets/promotion/raw.jpg';
// import sachet from '../../assets/promotion/sachet.jpg';
// import corn from '../../assets/promotion/corn.jpg';
// import pomegranate from '../../assets/promotion/pomegranate.jpg';
// import pear from '../../assets/promotion/pear.jpg';
// import orange from '../../assets/promotion/orange.jpg';
// import products from '../../Data/products.json'

const Category = () => {
  return (
    <>
         <section className="categories">
            <div className="upper">
              <div className="uppercategory">
                <h1 className='eachs'>Shop by Categories</h1>
                <a href="" className="alls">All Categories <BsChevronRight /> </a>
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
                        <a href="" className="eachdiv"><img src={fruit} alt="Fruit" className='fruit' /></a>
                        <a href="" className="description">Vegetables <br /> & tubers</a>
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

              <SwiperSlide>
                      <div className="each-div">
                        <a href="" className="eachdiv"><img src={baking} alt="Baking" className='fruit' /></a>
                        <a href="" className="description">Baking Material</a>
                      </div>
             </SwiperSlide>
            </Swiper>

          </section>

    </>
  )
}

export default Category