import Header from './header'
import './home.css'
import { FiSend } from "react-icons/fi";
import cabbage from "../../assets/cabbage.png"
import strawberry from "../../assets/strawberry.png"
import grain from "../../assets/grain.png"
import berry from "../../assets/berry.png"
import pineapple from "../../assets/pineapple.png"
import greenberry from "../../assets/green-berry.png"
import orange from "../../assets/orange.png"
import plant from "../../assets/plant.png"
import apple from "../../assets/apple.png"
import peach from "../../assets/peach.png"
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { slides } from "../../Data/hero.json"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // Auto-switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className='carou'>
        {slides.map((item, idx) => {
          return <section
            key={idx}
            className={`home-hero ${idx === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundRepeat: "none",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >

            <div className='ama-txt'>
              <h1>{item.text1}</h1>
              <h1>{item.text2}</h1>
            </div>
            <h3>{item.text3}</h3>

            <div className='input-btn'>
              <FiSend className='send-icon' />
              <input type="email" placeholder='Enter Your Email' />
              <button>Subsribe</button>
            </div>
            <div>
              <button className='right-btn' onClick={handleNext}>
                <FaChevronLeft className='arrow-dir' />
              </button>
              <button className='left-btn'>
                <FaAngleRight className='arrow-dir' onClick={handlePrevious} />
              </button>
            </div>
          </section>
        })}

        <div className="indicators">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`indicator ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>

      <section className='top-cate'>
        <div className='tp-cat'>
          <h1>Top Categories</h1>
          <div className='arrow-cnt'>
            <div className='arw-div'>
              <FaArrowLeftLong className='arrw-long'/>
            </div>
            <div className='arw-div'>
             <FaArrowRightLong className='arrw-long'/>
            </div>
          </div>
        </div>

        <div className='fruit-div'>
          <div className='fruits-indiv'>
            <img className='cabbage-img' src={cabbage} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivs'>
            <img className='cabbage-img' src={strawberry} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivss'>
            <img className='cabbage-img' src={grain} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsss'>
            <img className='cabbage-img' src={berry} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivssss'>
            <img className='cabbage-img' src={pineapple} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsssss'>
            <img className='cabbage-img' src={greenberry} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivssssss'>
            <img className='cabbage-img' src={orange} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsssssss'>
            <img className='cabbage-img' src={plant} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivssssss'>
            <img className='cabbage-img' src={apple} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
          <div className='fruits-indivsssssssss'>
            <img className='cabbage-img' src={peach} alt="" />
            <p className='fruit-name'>Milks and...</p>
            <p className='fruit-items'>6 items</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home