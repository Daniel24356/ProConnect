   import './checkout.css'
//    import zerd from '../../assets/zerds.png'
//    import demo from '../../assets/icon-1.png'
//    import fruit from '../../assets/seedbag2.jpg';

   const Checkout = () => {
      return (
        <>
        <div className='checkout-box'>
            <section>
                <div className='zerd-d'>
                {/* <img className='zerd-c' src={zerd} alt="" /> */}
                </div>
               
              <p className='shipp-txt'>Shipping information</p>
              <p className='alr-txt'>Already have an account? <span>Login</span></p>
           
            <div className="inputGroup">
                <input type="text" required="" autoComplete="off"/>
                <label htmlFor="name">Full Name</label>
            </div>

            <div className='email-ph'>
            <div className="inputGroups">
                <input type="text" required="" autoComplete="off"/>
                <label htmlFor="name">Email</label>
            </div>
            <div className="inputGroupss">
                <input type="text" required="" autoComplete="off"/>
                <label htmlFor="name">Phone</label>
            </div>
            </div>

            <div>
            <div className="inputGroup">
                <input type="text" required="" autoComplete="off"/>
                <label htmlFor="name">Country</label>
            </div>
            </div>

            <div className='email-ph'>
            <div className="inputGroupsss">
                <input type="text" required="" autoComplete="off"/>
                <label htmlFor="name">State</label>
            </div>
            <div className="inputGroupsss">
                <input type="text" required="" autoComplete="off"/>
                <label htmlFor="name">City</label>
            </div>
            </div>

            <div className="inputGroup">
                <input type="text" required="" autoComplete="off"/>
                <label htmlFor="name">Address</label>
            </div>

            <div className='reg-check'>
                <input type="checkbox" />
                <p>Register an account with above information?</p>
            </div>
            
            <div className='bill-div'>
                <h1>Billing information</h1>
                <div>
                    <input type="checkbox" />
                    <p>Same as shipping information</p>
                </div>
            </div>

            <div className='payment-box'>
                <h1>Payment method</h1>
                <div className='payment-div'>
                    <div>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                    <div>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                    <div>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                    <div>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                    <div>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                    <div>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                    <div>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                    <div className=''>
                        <input type="radio" />
                        <p>Cash on delivery (COD)</p>
                    </div>
                </div>
            </div>

            <div className='order-div'>
                <p>Order notes</p>
                <div>
                <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
                </div>
            </div>
            <div className='reg-check'>
                <input type="checkbox" />
                <p>Requires company invoice (Please fill in your company information to receive the invoice)?</p>
            </div>
            <div className='cart-cbtn'>
                <p>Back to cart</p>
                <button>Checkout</button>
            </div>
            </section>

            <section className='prod-box'>
              <p className='prod-txt'>Product(s)</p>
              <div className='prod-div'>
                <div className='demo-div'>
                {/* <img className='demo-img' src={demo} alt="" /> */}
                <p>Go Pro</p>
                </div>
                <div className='star-divs'>
                <img src="" alt="" />
                <p>(60 Reviews)</p>
                </div>                               
              </div>
              <div className='mid-prod'>
                <div className='prod-img'>
                    {/* <img src={fruit} alt="" /> */}
                </div>
                <div>
                    <div>
                    <p className='seed-txt'>Seeds of Change Organic</p>
                    <p className='seed-txt'>Quinoe</p>
                    <p  className='weig-txt'>(Weight: 4KG, Boxes: 5 Boxes)</p>
                    </div>
                    <div className='nums-div'>
                        {/* icons */}
                        6
                        {/* icons */}
                    </div>
                </div>
                <p>$1,692.00</p>
              </div>
              <p className='ship-txt'>Shipping method:</p>
              <div className='met-all'>
              <div className='met-div'>
                <div>
                    <input type="radio" />
                    <p>Free delivery - <b>Free shipping</b> </p>
                </div>
                <div>
                    <input type="radio" />
                    <p>Free delivery - <b>Free shipping</b> </p>
                </div>
                <div>
                    <input type="radio" />
                    <p>Free delivery - Free shipping</p>
                </div>
              </div>
              </div>
              <div className='subs-total'>
               <div>
                <p className='subs-txt'>Subtotal:</p>
                <p className='total-txt'>$1,692.00</p>
               </div>
               <div >
                <p className='subs-txt'>Tax</p>
                <p className='total-txt'>$0.00</p>
               </div>
               <div>
                <p className='subs-txt'>Shipping fee:</p>
                <p className='total-txt'>$0.00</p>
               </div>
               <div>
                <p className='total-txt'>Total:</p>
                <p className='total-new'>$1,692.00</p>
               </div>
              </div>
            </section>
        </div>
        </>
      )
   }

   export default Checkout