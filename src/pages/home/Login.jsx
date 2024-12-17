import './Login.css'
import Header from './header'
import login from '../../assets/login.png'
const Login = () => {
  return (
    <>
       <Header/>
      <section className="login-section">
          <div className="login-div">
              <img src={login} alt="" className="login-pic" />

              <div className="right-login">
                  
              </div>
          </div>
      </section>
    </>
  )
}

export default Login