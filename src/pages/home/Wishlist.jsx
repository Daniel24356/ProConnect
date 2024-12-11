import './Wishlist.css'
import Header from './header'
import product1 from '../../assets/product1.jpg'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
const Wishlist = () => {
    const [rating, setRating] = useState(0); // Store the rating

    const handleRating = (rate) => {
      setRating(rate); // Update the rating state
    };
  return (
      <>
        <Header/> 
        <section className='wishlist'>
           <h1 className="my">My Wishlist</h1>
           <p className="products">There are  <span className="five">5 </span>products in this list</p>

           <table className="main-table">
              <thead>
                <tr className="mainheading">
                    <th scope='col' colSpan={2}>Products</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Stock Status</th>
                    <th scope='col'>Action</th>
                    <th scope='col'>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr className="each">
                  <td> <img src={product1} alt="" className='product-image'/></td>
                  <td className="describe">
                    <a href="" className="link">Field Roast Chao Cheese Creamy Original</a>
                    <div>
                    {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={index < rating ? "star filled" : "star"}
                              onClick={() => handleRating(index + 1)} // Set rating on click
                            >
                              ★
                            </span>
                          ))}
                    </div>        
                  </td>
                  <td className="price">$2.51</td>
                  <td><span className="stock">In Stock</span></td>
                  <td><a href="" className="todo">Add to cart</a></td>
                  <td><a href="" className="trash"><FaRegTrashAlt /></a></td>
                </tr>
              </tbody>
           </table>
        </section>
     </>
  )
}

export default Wishlist