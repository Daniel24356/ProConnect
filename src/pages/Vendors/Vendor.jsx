import './Vendor.css'
import Header from '../home/header';
import { LuSearch } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';
import Footer from '../home/Footer';


const StoresPage = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const stores = [
    {
      name: 'GoPro',
      since: '2024',
      products: 6,
      rating: 60,
      address: '521 Pat Crest, Dameonhaven, Michigan, IT',
      phone: '+17749778923',
      image: 'https://nest.botble.com/storage/stores/1-800x800.png',
      link: 'https://nest.botble.com/en/stores/gopro',
    },
    {
      name: 'Global Office',
      since: '2024',
      products: 7,
      rating: 69,
      address: '4691 Armando Ridge, West Shanie, Tennessee, PF',
      phone: '+16019576088',
      image: 'https://nest.botble.com/storage/stores/2-800x800.png',
      link: 'https://nest.botble.com/en/stores/global-office',
    },
    {
      name: 'Young Shop',
      since: '2024',
      products: 4,
      rating: 39,
      address: '747 Collins Cliff Apt. 083, Lake Sandraport, South Carolina, IR',
      phone: '+18728060766',
      image: 'https://nest.botble.com/storage/stores/3-800x800.png',
      link: 'https://nest.botble.com/en/stores/young-shop',
    },
    {
      name: 'Global Store',
      since: '2024',
      products: 7,
      rating: 68,
      address: '354 Baby Trafficway, East Polly, Florida, VI',
      phone: '+18722080218',
      image: 'https://nest.botble.com/storage/stores/4-800x800.png',
      link: 'https://nest.botble.com/en/stores/global-store',
    },
  ];

  const filteredStores = stores.filter((store) => 
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <Header />
    <div className="page-content pt-501">
      <div className="container101">
        <div className="archive-header-2 text-center">
          <h1 className="display-2 mb-50">Stores</h1>
          <div className="vendor-grid">
            <div className="col-lg-5 mx-auto">
              <div className="sidebar-widget-2 widget_search mb-50">
                <div className="search-form form-group">
                  <form action="https://nest.botble.com/stores" method="GET">
                    <input
                      className="form-control"
                      name="q"
                      required
                      type="text"
                      placeholder="Search vendor..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">
                    <LuSearch className='submit-icon'/>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-50">
          <div className="col-12 col-lg-8 ">
            <div className="shop-product-filter">
              <div className="total-product">
                <p>
                  We have <strong className="text-brand">{filteredStores.length}</strong> vendors now
                </p>
              </div>
            </div>


            <div className='elct232'>
            <div className='victory'>
          {filteredStores.map((store, index) => (
            <div className="col-lg-3 col-md-6 col-12 col-sm-6" key={index}>
              <div className="vendor-wrap mb-40">
                <div className="vendor-img-action-wrap">
                  <div className="vendor-img">
                    <a href={store.link}>
                      <img className="default-img" src={store.image} alt={store.name} />
                    </a>
                  </div>
                </div>
                <div className="vendor-content-wrap">
                  <div className="d-flex justify-content-between align-items-end mb-301">
                    <div className="overflow-hidden">
                      <div className="product-category">
                        <span className="text-muted">Since {store.since}</span>
                      </div>
                      <h4 className="mb-5 text-truncate">
                        <a href={store.link}>{store.name}</a>
                      </h4>
                      <p className='p'>({store.products} products)</p>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                        <div className="product-rating page_speed_425753587"></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> ({store.rating})</span>
                      </div>
                    </div>
                  </div>
                  <div className="vendor-info mb-301">
                    <ul className="font-sm mb-20">
                      <li>
                        <span className="d-inline-block">
                          <img
                            src="https://nest.botble.com/themes/nest/imgs/theme/icons/icon-location.svg"
                            alt="Address"
                          />
                          <strong className="d-inline-block ms-1 me-1">Address:</strong> {store.address}
                        </span>
                      </li>
                      <li>
                        <img
                          src="https://nest.botble.com/themes/nest/imgs/theme/icons/icon-contact.svg"
                          alt="Phone"
                        />
                        <strong className="d-inline-block ms-1 me-1">Call Us:</strong>
                        <span className="d-inline-block" dir="ltr">
                          {store.phone}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a href={store.link} className=" btn-xs">
                    Visit Store<FaArrowRight  className="fi-rs-arrow-small-right i"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
          </div>


         
        </div>
      
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default StoresPage;
