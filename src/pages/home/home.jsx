import Header from './header'
import './home.css'
import { FiSend } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import fruit from '../../assets/fruits.svg'

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

        <section className="categories">
           <div className="uppercategory">
           <h1 className='each'>Shop by Categories</h1>
           <a href="" className="all">All Categories <BsChevronRight/></a>
           </div>

           <div className="scrolling-div">
            <div className="each-div">
                <a href="" className="eachdiv"><img src={fruit} alt="" className='fruit'/></a>
                <a href="" className="description">Vegetables <br></br> & tubers</a>
            </div>
           </div>
        </section>
        </>
    )
}

export default Home