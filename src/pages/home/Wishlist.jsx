import './Wishlist.css'
import Header from './header'
// import product1 from '../../assets/product1.jpg'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
// import product2 from '../../assets/product2.jpg'
// import product4 from '../../assets/product4.jpg'
import { useWishlist } from '../../context/WishlistContext';
// import products from '../../Data/products.json'
import Swal from 'sweetalert2';
const Wishlist = () => {
    const [rating, setRating] = useState({}); // Store the rating

    const handleRating = (rate, productId) => {
      setRating((prevRatings) => ({
        ...prevRatings,
        [productId]: rate, // Set the rating for the specific product by its ID
      }));
    };
    

    const { wishlist, removeFromWishlist } = useWishlist();
    const count = wishlist.length;
  return (
      <>
        <Header/> 
        <section className='wishlist'>
           <h1 className="my">My Wishlist</h1>
           <p className="products">There are  <span className="five">{count}</span>products in this list</p>

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
               {wishlist.map((item) => (
                 <tr className="each" key={item.id}>
                 <td className='img-td'> <img src={item.image} alt="" className='product-image'/></td>
                 <td className="describe">
                   <a href="" className="link">{item.name}</a>
                   <div>
                   {[...Array(5)].map((_, index) => (
                           <span
                             key={index}
                             className={index < (rating[item.id] || 0) ? "star filled" : "star"}
                             onClick={() => handleRating(index + 1, item.id)} // Set rating on click
                           >
                             ★
                           </span>
                         ))}
                   </div>        
                 </td>
                 <td className="price-new">{item.price}</td>
                 <td><span className="stock">In Stock</span></td>
                 <td><button className="todo">Add to cart</button></td>
                 <td><a
    href=""
    className="trash"
    onClick={(e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to remove this product from your wishlist?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3BB77E',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          removeFromWishlist(item.id);
          Swal.fire(
            'Deleted!',
            'The product has been removed from your wishlist.',
            'success'
          );
        }
      });
    }}
  >
    <FaRegTrashAlt />
  </a></td>
               </tr>
               ))}
              </tbody>
           </table>
        </section>
     </>
  )
}

export default Wishlist