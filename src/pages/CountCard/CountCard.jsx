import { useState, useEffect } from "react";
import "./CountCard.css";
import Rating from '../../pages/Rating/Rating';
import { IoCartOutline } from "react-icons/io5";

const CountdownCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 106,
    hours: 2,
    minutes: 6,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };

        clearInterval(timer); // Stop the timer when all values reach 0
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);
    
      return (
    //     <div className="deals-card">
    //   {/* Card Image with Timer */}
    //   <div className="card-image">
    //     <img
    //       src="https://via.placeholder.com/280x150"
    //       alt="Product"
    //       className="product-image"
    //     />
    //     <div className="timer-container">
    //       <div className="timer-box">
    //         <span></span>
    //         <p>Days</p>
    //       </div>
    //       <div className="timer-box">
    //         <span></span>
    //         <p>Hours</p>
    //       </div>
    //       <div className="timer-box">
    //         <span></span>
    //         <p>Mins</p>
    //       </div>
    //       <div className="timer-box">
    //         <span></span>
    //         <p></p>
    //       </div>
    //     </div>
    //     <div className="discount">
    //       <span>29</span>
    //     </div>
    //   </div>
    // </div>


    <>
         <div className='count-div'>
                    <div className="count-design">

                    <div className="count-tip3">
                      <span className="counter-div">
                        <span>{timeLeft.days}</span>
                        <p>Days</p>
                      </span>

                      <span className="counter-div">
                        <span>{timeLeft.hours}</span>
                        <p>Hours</p>
                      </span>

                      <span className="counter-div">
                        <span>{timeLeft.minutes}</span>
                        <p>Mins</p>
                      </span>


                      <span className="counter-div">
                        <span>{timeLeft.seconds}</span>
                        <p>Secs</p>
                      </span>
                    </div>
                <div className='count-details1'>
                    <div className="count-lightspan1">Pet Food</div>

                    <div className="info1">
                        <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                        <div className="count-content-info1">
                        <div className='rating1'>
                            <Rating totalStars={5}></Rating>
                        </div>
                        <span className="">(10)</span>
                        </div>
                        <div className="sold">
                            <span>Sold By <a href="#" className='a'>GoPro</a></span>
                        </div>
                    </div>
                    <div className="count-price">
                        <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                        </span>
                        <button className='count-cart'> <IoCartOutline className="CartOut"/> Add</button>
                    </div>
                </div>
            </div> 



                          <div className="count-design1">

              <div className="count-tip3">
                <span className="counter-div">
                  <span>{timeLeft.days}</span>
                  <p>Days</p>
                </span>

                <span className="counter-div">
                  <span>{timeLeft.hours}</span>
                  <p>Hours</p>
                </span>

                <span className="counter-div">
                  <span>{timeLeft.minutes}</span>
                  <p>Mins</p>
                </span>


                <span className="counter-div">
                  <span>{timeLeft.seconds}</span>
                  <p>Secs</p>
                </span>
              </div>
              <div className='count-details1'>
              <div className="count-lightspan1">Pet Food</div>

              <div className="info1">
                  <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                  <div className="count-content-info1">
                  <div className='rating1'>
                      <Rating totalStars={5}></Rating>
                  </div>
                  <span className="">(10)</span>
                  </div>
                  <div className="sold">
                      <span>Sold By <a href="#" className='a'>GoPro</a></span>
                  </div>
              </div>
              <div className="count-price">
                  <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                  </span>
                  <button className='count-cart'> <IoCartOutline className="CartOut"/> Add</button>
              </div>
              </div>
              </div> 



              <div className="count-design2">

              <div className="count-tip3">
                <span className="counter-div">
                  <span>{timeLeft.days}</span>
                  <p>Days</p>
                </span>

                <span className="counter-div">
                  <span>{timeLeft.hours}</span>
                  <p>Hours</p>
                </span>

                <span className="counter-div">
                  <span>{timeLeft.minutes}</span>
                  <p>Mins</p>
                </span>


                <span className="counter-div">
                  <span>{timeLeft.seconds}</span>
                  <p>Secs</p>
                </span>
              </div>
              <div className='count-details1'>
              <div className="count-lightspan1">Pet Food</div>

              <div className="info1">
                  <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                  <div className="count-content-info1">
                  <div className='rating1'>
                      <Rating totalStars={5}></Rating>
                  </div>
                  <span className="">(10)</span>
                  </div>
                  <div className="sold">
                      <span>Sold By <a href="#" className='a'>GoPro</a></span>
                  </div>
              </div>
              <div className="count-price">
                  <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                  </span>
                  <button className='count-cart'> <IoCartOutline className="CartOut"/> Add</button>
              </div>
              </div>
              </div> 



              <div className="count-design3">

              <div className="count-tip3">
                <span className="counter-div">
                  <span>{timeLeft.days}</span>
                  <p>Days</p>
                </span>

                <span className="counter-div">
                  <span>{timeLeft.hours}</span>
                  <p>Hours</p>
                </span>

                <span className="counter-div">
                  <span>{timeLeft.minutes}</span>
                  <p>Mins</p>
                </span>


                <span className="counter-div">
                  <span>{timeLeft.seconds}</span>
                  <p>Secs</p>
                </span>
              </div>
              <div className='count-details1'>
              <div className="count-lightspan1">Pet Food</div>

              <div className="info1">
                  <span className="product-header1"><h2 className='text-truncate1'>Seeds of Change Organic Quinoe</h2></span>
                  <div className="count-content-info1">
                  <div className='rating1'>
                      <Rating totalStars={5}></Rating>
                  </div>
                  <span className="">(10)</span>
                  </div>
                  <div className="sold">
                      <span>Sold By <a href="#" className='a'>GoPro</a></span>
                  </div>
              </div>
              <div className="count-price">
                  <span className='span1'>$1,845.00 <p className='old-price'>$1,845.00</p>

                  </span>
                  <button className='count-cart'> <IoCartOutline className="CartOut"/> Add</button>
              </div>
              </div>
              </div> 



        </div>

    </>
  )
};

export default CountdownCard;


