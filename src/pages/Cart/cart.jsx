  import CountdownCard from '../CountCard/CountCard'
import Footer from '../home/Footer'
import './cart.css'
import fruit from '../../assets/seedbag2.jpg';

  const Cart = () => {
    return(
        <>
        <div className='cart-div'>
        <div className='cart-box'>
        <h1>Your Cart</h1>
        <p>There are <span>4</span> products in your cart</p>
        </div> 
       <section>
        <div className='cart-all'>
        <div className='cart-bord'>
         <div className='cart-head'>
            <div><p>Product</p></div>
            <div className='cart-headinner'>
                <p>Unit Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <p>Remove</p>
            </div>
         </div>
         <div>
            <div className='cart-prod'>
                <div className='cart-inner'>
                <div className='prod-border'>
                    <img src={fruit} alt="" />
                </div>
                 <div className='prod-new'>
                    <p className='prod-name'>Seeds of Change Organic Quinoe</p>
                    <p className='prod-sold'>Sold by: <span>GoPro</span></p>
                    <p className='prod-weight'>(Weight: 4KG, Boxes: 5 Boxes)</p>
                 </div>
                </div>
                <h1 className='unit-price'>$1,692.00</h1>
                <div className='num-prod'>
                    6
                    <div>
                        {/* icons */}
                        {/* icons */}
                    </div>
                </div>
                <h1 className='sub-total'>$10,152.00</h1>
                {/* icons */}
            </div>
         </div>
        </div>

        <div className='pr-check'>
       <div className='tax-check'>
        <div>
            <p className='tax-first'>Tax</p>
            <p className='tax-second'>$0.00</p>
        </div>
        <div>
            <p className='tax-first'>Total</p>
        </div>
        <div >
            <p className='tax-third'>(Shipping fees not included)</p>
            <p className='tax-seconds'>$13,888.00</p>
        </div>
       </div>
       <button>
        Proceed To Checkout
        {/* icons */}
        </button>
        </div>
        </div>

        <button className='cont-shop'>
            {/* icons */}
            Continue Shopping
       </button>
            <div className='app-coupon'>
                <h1>Apply Coupon</h1>
                <p>Using A Promo Code?</p>
                <div className='coupon-div'>
                    <div>
                    <input type="text" placeholder="Enter Your Coupon" />
                    </div>
                   
                    <button>
                        {/* icons */}
                        Apply
                        </button>
                </div>
            </div>
       </section>
       </div>
       <Footer/>
        </>
    )
  }

  export default Cart