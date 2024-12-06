import Header from './header'
import './home.css'
import { FiSend } from "react-icons/fi";

const Home = () => {
    return (
        <>
        <Header/>
        <section className='home-hero'>
            <div className='ama-txt'>
            <h1>Dont Miss Amazing</h1>
            <h1>Grocery Deals</h1>
            </div>
            <h3>Save up to 50% off On your first Order</h3>
            <div className='input-btn'>
                <FiSend className='send-icon'/>
                <input type="email" placeholder='Your email address' />
                <button>Subsribe</button>
            </div>
            <div>
                <button></button>
                <button></button>
            </div>
        </section>

        {/* <section>
            <div>
                <h3>Featured Categories</h3>
                <div>
                    <p>All</p>
                    <p>Milk&Diaries</p>
                    <p>Coffee</p>
                    <p>Pet Foods</p>
                    <p>Meats</p>
                    <p>Vegetables</p>
                    <p>Fruits</p>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Coke & MC</h3>
                </div>
            </div>
            <div>
                <div>
                    <h1>Everyday Fresh &</h1>
                    <h1>Clean with Our</h1>
                    <h1>Products</h1>
                </div>
                <button>Shop Now</button>
            </div>
            <div>
                <div>
                    <h1>Everyday Fresh &</h1>
                    <h1>Clean with Our</h1>
                    <h1>Products</h1>
                </div>
                <button>Shop Now</button>
            </div>
            <div>
                <div>
                    <h1>Everyday Fresh &</h1>
                    <h1>Clean with Our</h1>
                    <h1>Products</h1>
                </div>
                <button>Shop Now</button>
            </div>
        </section> */}
        </>
    )
}

export default Home