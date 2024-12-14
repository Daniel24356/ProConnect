import './Comparable.css'
import Header from './header'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product4.jpg'
import { useState } from 'react'
const Comparable = () => {
    
    const [rating, setRating] = useState(0); // Store the rating

    const handleRating = (rate) => {
      setRating(rate); // Update the rating state
    };

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
                    <td><p className="newprice">$14.00</p></td>
                    <td className='peanutnew'><p className="newprice">$15.00</p></td>
                </tr>

                <tr className="first">
                    <td className="preview">Rating</td>
                    <td><div>
                    {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={index < rating ? "star filled" : "star"}
                              onClick={() => handleRating(index + 1)} // Set rating on click
                            >
                              ★
                            </span>
                          ))}
                    </div>   </td>
                    <td><div>
                    {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={index < rating ? "star filled" : "star"}
                              onClick={() => handleRating(index + 1)} // Set rating on click
                            >
                              ★
                            </span>
                          ))}
                    </div></td>
                    <td className='peanutnew'><div>
                    {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={index < rating ? "star filled" : "star"}
                              onClick={() => handleRating(index + 1)} // Set rating on click
                            >
                              ★
                            </span>
                          ))}
                    </div></td>
                </tr>

                <tr className="first">
                    <td className="preview">Stock Status</td>
                    <td><span className="stock">In Stock</span></td>
                    <td><span className="stock">In Stock</span></td>
                    <td className='peanutnew'><span className="stocks">Out Stock</span></td>
                </tr>

                <tr className="first">
                    <td className="preview">Description</td>
                    <td><p className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p></td>
                    <td><p className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p></td>
                    <td className='peanutnew'><p className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p></td>
                </tr>

                <tr className="first">
                    <td className="preview">Weight</td>
                    <td><p className="gram">320 gram</p></td>
                    <td><p className="gram">370 gram</p></td>
                    <td className='peanutnew'><p className="gram">380 gram</p></td>
                </tr>

                <tr className="first">
                    <td className="preview">Dimensions</td>
                    <td><p className="gram">N/A</p></td>
                    <td><p className="gram">N/A</p></td>
                    <td className='peanutnew'><p className="gram">N/A</p></td>
                </tr>
            </table>
        </div>
        </section>
     </>
  )
}

export default Comparable