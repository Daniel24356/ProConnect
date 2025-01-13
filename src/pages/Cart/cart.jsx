  import CountdownCard from '../CountCard/CountCard'
import Footer from '../home/Footer'
import './cart.css'
import fruit from '../../assets/seedbag2.jpg';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { useState } from 'react';
import { useCart } from 'react-use-cart';

  const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();

         if(isEmpty) return <h1>Your Cart is Empty</h1>

    const[count, setCount]=useState(0);
    const handleCountIncrement=()=>{
        setCount(count + 1)
    }

    const handleCountDecrement=()=>{
        if(count > 0){
            setCount(count - 1)
        }
        
    }

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
            {items.map((item,index) => {
                return <>
                 <div key={index} className='cart-prod'>
                <div className='cart-inner'>
                <div className='prod-border'>
                    <img src={fruit} alt="" />
                </div>
                 <div className='prod-new'>
                    <p className='prod-name'>{item.title}</p>
                    <p className='prod-sold'>Sold by: <span>{item.retailerName}</span></p>
                    <p className='prod-weight'>(Weight: 4KG, Boxes:{item.quantity} Boxes)</p>
                 </div>
                </div>
                <h1 className='unit-price'>{item.price.currentPrice}</h1>
                <div className='num-prod'>
                    <p> {item.quantity}</p>
                    <div className='arrow-icons'>
                       <IoIosArrowUp onClick={() => updateItemQuantity(item.id, item.quantity -1)} className='arr-grav'/>
                        <IoIosArrowDown  onClick={() => updateItemQuantity(item.id, item.quantity +1)} className='arr-grav'/>
                    </div>
                </div>
                <h1 className='sub-total'>{cartTotal}</h1>
               <MdOutlineDelete  onClick={() => removeItem(item.id)} className='dte-icons'/>
            </div>
                </>
            })}
           
         </div>
        </div>

        <div className='prod-sall'>
            <div className='prod-small'>
            <div className='prod-border'>
                <img src={fruit} alt="" />
            </div>
            <div className='seed-me'>
                <p  className='seeds-change'>Seeds of Change Organic Quinoe</p>
                <p className='sold-change'>Sold by: GoPro</p>
                <p className='weight-kg'>(Weight: 4KG, Boxes:5 Boxes)</p>
            </div>
            </div>
            <div className='pr-unit'>
                <div className='unit-div'>
                    <p>Unit Price</p>
                    <p>$1,692.00</p>
                </div>
                <div className='unit-div'>
                    <p>Quantity</p>
                    <div className='num-prod'>
                    <p> {count}</p>
                    <div className='arrow-icons'>
                       <IoIosArrowUp onClick={handleCountIncrement} className='arr-grav'/>
                        <IoIosArrowDown onClick={handleCountDecrement} className='arr-grav'/>
                    </div>
                </div>
                </div>
                <div className='unit-div'>
                    <p>Subtotal</p>
                    <p>$1,692.00</p>
                </div>
                <div className='unit-div'>
                    <p>Remove</p>
                    <MdOutlineDelete className='dte-icons'/>
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
        <FaArrowRightFromBracket/>
        </button>
        </div>
        </div>

        <button className='cont-shop'>
           <FaArrowLeftLong/>
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
                       <FaRegEnvelopeOpen/>
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