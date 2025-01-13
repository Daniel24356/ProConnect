import './Comparable.css'
import Header from './header'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { useComparable } from '../../context/ComparableContext'
import Swal from 'sweetalert2';
const Comparable = () => {
    
    const [rating, setRating] = useState({}); // Store the rating

    const handleRating = (rate) => {
      setRating(rate); // Update the rating state
    };


    const {comparable, removeFromComparable} = useComparable();
    // const count = comparable.length;
  return (
     <>
        <Header/>
        <section className="overall">
        <h1 className="my">Products Compare</h1>
        <p className="productsq">There are  <span className="five">{comparable.length}</span>products to compare</p>

        <div className="main-div">
            <table className="main-table">
                <tr className="first">
                    <td className="preview">Preview</td>
                    {comparable.map((product, index) => (
                                    <td key={index}><img src={product.image} alt={product.name} className="peanut" /></td>
                                ))}
                </tr>

                <tr className="first">
                    <td className="preview">Name</td>
                    {/* <td><a href="" className="text">J.Crew Mercantile Women&apos; Short</a></td>
                    <td><a href="" className="text">Amazon Essentials Women&apos;s Tanks</a></td> */}
                    {/* <td className='peanutnew'><a href="" className="text">Amazon Brand - Daily Ritual Wom</a></td> */}
                    {comparable.map((product, index) => (
                                    <td key={index}><a href="#" className="text">{product.name}</a></td>
                                ))}
                </tr>

                <tr className="first">
                    <td className="preview">Price</td>
                    {/* <td><p className="newprice">$12.00</p></td>
                    <td><p className="newprice">$14.00</p></td>
                    <td className='peanutnew'><p className="newprice">$15.00</p></td> */}
                    {comparable.map((product, index) => (
                                    <td key={index}><p className="newprice">${product.price}</p></td>
                                ))}
                </tr>

                <tr className="first">
                    <td className="preview">Rating</td>
                   {comparable.map((product) => (
                        <td key={product.id}><di>
                        {[...Array(5)].map((_, index) => (
                                <span
                                  key={index}
                                  className={index < rating[product.id] ? "star filled" : "star"}
                                  onClick={() => handleRating(index + 1, product.id)} // Set rating on click
                                >
                                  ★
                                </span>
                              ))}
                        </di>   </td>
                   ))}
                    {/* <td><div>
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
                    </div></td> */}
                </tr>

                <tr className="first">
                    <td className="preview">Stock Status</td>
                    {/* <td><span className="stock">In Stock</span></td>
                    <td><span className="stock">In Stock</span></td>
                    <td className='peanutnew'><span className="stocks">Out Stock</span></td> */}
                     {comparable.map((product, index) => (
                                    <td key={index}><span className={product.inStock ? "stock" : "stocks"}>{product.inStock ? "In Stock" : "Out of Stock"}</span></td>
                                ))}
                </tr>

                {/* <tr className="first">
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
                </tr> */}

                <tr className="first">
                    <td className="preview">Buy Now</td>
                    {/* <td><a href="" className="todo">Add to cart</a></td>
                    <td><a href="" className="todo">Add to cart</a></td>
                    <td className='peanutnew'><a href="" className="todos">Contact Us</a></td> */}
                      {comparable.map((product, index) => (
                                    <td key={index}><a href={product.buyLink} className="todo">{product.inStock ? "Add to cart" : "Contact Us"}</a></td>
                                ))}
                </tr>

                <tr className='second'>
                    <td className="preview"></td>
                    {/* <td className='typeshi'><a href="" className="trash"><FaRegTrashAlt /> Remove</a></td>
                    <td className='typeshi'><button className="trash"><FaRegTrashAlt /> Remove</button></td> */}
                    {/* <td className='typeshi-new'><a href="" className="trash"><FaRegTrashAlt /> Remove</a></td> */}
                    {comparable.map((product, index) => (
                                    <td key={index} className='typeshi'>
                                        <button className="trash" onClick={(e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to remove this product from your comparison?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3BB77E',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          removeFromComparable(product.id);
          Swal.fire(
            'Deleted!',
            'The product has been removed from your comparison.',
            'success'
          );
        }
      });
    }}><FaRegTrashAlt /> Remove</button>
                                    </td>
                                ))}
                </tr>
            </table>
        </div>
        </section>
     </>
  )
}

export default Comparable