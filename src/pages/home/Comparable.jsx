import './Comparable.css'
import Header from './header'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product4.jpg'
const Comparable = () => {
  return (
     <>
        <Header/>
        <section className="overall">
        <h1 className="my">Products Compare</h1>
        <p className="products">There are  <span className="five">3 </span>products to compare</p>

        <div className="main-div">
            <table className="main-table">
                <tr className="first">
                    <td className="preview">Preview</td>
                    <td><img src={product1} alt="" className="peanut"/></td>
                    <td><img src={product2} alt="" className="peanut"/></td>
                    <td className='peanutnew'><img src={product3} alt="" className="peanut"/></td>
                </tr>

                <tr className="first">
                    <td className="preview">Name</td>
                    <td><a href="" className="text">J.Crew Mercantile Women&apos; Short</a></td>
                    <td><a href="" className="text">Amazon Essentials Women&apos;s Tanks</a></td>
                    <td className='peanutnew'><a href="" className="text">Amazon Brand - Daily Ritual Wom</a></td>
                </tr>

                <tr className="first">
                    <td className="preview">Price</td>
                    <td><p className="newprice">$12.00</p></td>
                    <td><a href="" className="text">Amazon Essentials Women&apos;s Tanks</a></td>
                    <td className='peanutnew'><a href="" className="text">Amazon Brand - Daily Ritual Wom</a></td>
                </tr>
            </table>
        </div>
        </section>
     </>
  )
}

export default Comparable