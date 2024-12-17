import './Login.css'
import login from '../../assets/login.png'
const Login = () => {
  return (
    <>
      <section className="login-section">
          <div className="login-div">
              <img src={login} alt="" className="login-pic" />

              <form action="" className='formshi'>
              <div className="right-login">
                 <h1 className="my">Login</h1>
                 <p className="create">Dont have an account? <a href="" className="one">Create here</a></p>
                 <input type="text" className="name" placeholder='Username or Email *'/>
                 <input type="text" className="name" placeholder='Password *'/>
                 <div className="checkbox-wrapper-46">
  <input type="checkbox" id="cbx-46" className="inp-cbx" />
  <label htmlFor="cbx-46" className="cbx"
    ><span>
      <svg viewBox="0 0 12 10" height="10px" width="12px">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span><span>Remember Me</span>
  </label>
</div>
<button className="login-btn">Login</button>


              </div>
              <a href="" className="forgot">Forgot Password?</a>
              </form>

              
          </div>
      </section>
    </>
  )
}

export default Login