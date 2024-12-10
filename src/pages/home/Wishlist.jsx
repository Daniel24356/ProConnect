import './Wishlist.css'
import Header from './header'
const Wishlist = () => {
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
           </table>
        </section>
     </>
  )
}

export default Wishlist