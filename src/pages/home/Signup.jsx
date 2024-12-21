import './Signup.css'
import facebook from '../../assets/facebook.svg'
import googlepic from '../../assets/google.svg'
import apple from '../../assets/apple.svg'
const Signup = () => {
  return (
    <>
      <section className="login-section">
          <div className="login-div">
              <form action="" className='formshi'>
                 <div className="left-form">
                 <div className="right-login">
                 <h1 className="my">Create an Account</h1>
                 <p className="create">Already have an account? <a href="" className="one">Login</a></p>
                 <input type="text" className="name" placeholder='Username *'/>
                 <input type="text" className="name" placeholder='Email *'/>
                 <input type="text" className="name" placeholder='Password *'/>
                 <input type="text" className="name" placeholder='Confirm Password *'/>

                 <div className="custom-radio-group">
  <label className="custom-radio-container">
    <input type="radio" name="custom-radio" value="option1" />
    <span className="custom-radio-checkmark"></span>
    Manufacturer
  </label>
  <label className="custom-radio-container">
    <input type="radio" name="custom-radio" value="option2" />
    <span className="custom-radio-checkmark"></span>
    Retailer
  </label>
  <label className="custom-radio-container">
    <input type="radio" name="custom-radio" value="option3" />
    <span className="custom-radio-checkmark"></span>
    Consumer
  </label>
</div>
             <div className="idk-div">
             <div className="checkbox-wrapper-46">
  <input type="checkbox" id="cbx-46" className="inp-cbx" />
  <label htmlFor="cbx-46" className="cbx"
    ><span>
      <svg viewBox="0 0 12 10" height="10px" width="12px">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span><span>I agree to terms & policy</span>
  </label>

  
</div>

<a href="" className="one">Learn More</a>
             </div>
<button className="login-btn">Register</button>


              </div>
              <a href="" className="forgot">Forgot Password?</a>
                 </div>

                 <div className="socials-signup">
                     <a href="" className="face"><img src={facebook} alt="" className='facebook-link'/> <span className="texts">Continue with Facebook</span></a>

                     <a href="" className="face-2"><img src={googlepic} alt="" className='facebook-link'/> <span className="text-2">Continue with Google</span></a>

                     <a href="" className="face-3"><img src={apple} alt="" className='facebook-link'/> <span className="texts">Continue with Apple</span></a>
                 </div>
              </form>

              
          </div>
      </section>
    </>
  )
}

export default Signup