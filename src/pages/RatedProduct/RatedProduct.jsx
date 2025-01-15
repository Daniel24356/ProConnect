import './RatedProduct.css'

function RatedProduct() {


  const products = [
    {
      id: 1,
      name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      url: "https://nest.botble.com/en/products/angies-boomchickapop-sweet-salty-kettle-corn",
      image: "https://nest.botble.com/storage/products/17-400x400.jpg",
      rating: 70,
      reviews: 10,
      price: "$2,387.00",
    },
    {
      id: 2,
      name: "Seeds of Change Organic Quinoe",
      url: "https://nest.botble.com/en/products/seeds-of-change-organic-quinoe",
      image: "https://nest.botble.com/storage/products/1-400x400.jpg",
      rating: 50,
      reviews: 10,
      price: "$1,692.00",
    },
    {
      id: 3,
      name: "All Natural Italian-Style Chicken Meatballs",
      url: "https://nest.botble.com/en/products/all-natural-italian-style-chicken-meatballs",
      image: "https://nest.botble.com/storage/products/18-400x400.jpg",
      rating: 60,
      reviews: 9,
      price: "$2,071.00",
    },
    {
      id: 4,
      name: "Foster Farms Takeout Crispy Classic Buffalo Wings (Digital)",
      url: "https://nest.botble.com/en/products/foster-farms-takeout-crispy-classic-buffalo-wings-digital",
      image: "https://nest.botble.com/storage/products/16-400x400.jpg",
      rating: 66,
      reviews: 10,
      price: "$1,271.20",
      oldPrice: "$1,589.00",
    },
  ];


  const Trending = [
    {
      id: 1,
      name: "Gorton’s Beer Battered Fish Fillets",
      url: "https://nest.botble.com/en/products/gortons-beer-battered-fish-fillets",
      image: "https://nest.botble.com/storage/products/9-400x400.jpg",
      rating: 60,
      reviews: 10,
      price: "$1,845.00",
    },
    {
      id: 2,
      name: "Pepperidge Farm Farmhouse Hearty White Bread",
      url: "https://nest.botble.com/en/products/pepperidge-farm-farmhouse-hearty-white-bread",
      image: "https://nest.botble.com/storage/products/13-400x400.jpg",
      rating: 68,
      reviews: 10,
      price: "$1,592.00",
    },
    {
      id: 3,
      name: "Foster Farms Takeout Crispy Classic (Digital)",
      url: "https://nest.botble.com/en/products/foster-farms-takeout-crispy-classic-digital",
      image: "https://nest.botble.com/storage/products/4-400x400.jpg",
      rating: 62,
      reviews: 10,
      price: "$1,574.00",
      oldPrice: "$1,767.00",
    },
    {
      id: 4,
      name: "All Natural Italian-Style Chicken Meatballs",
      url: "https://nest.botble.com/en/products/all-natural-italian-style-chicken-meatballs",
      image: "https://nest.botble.com/storage/products/2-400x400.jpg",
      rating: 70,
      reviews: 10,
      price: "$347.00",
      oldPrice: "$910.00",
    },
  ];


  const items1 = [
    {
      id: 1,
      name: "Seeds of Change Organic Quinoe",
      url: "https://nest.botble.com/en/products/seeds-of-change-organic-quinoe",
      image: "https://nest.botble.com/storage/products/1-400x400.jpg",
      rating: 50,
      reviews: 10,
      price: "$1,692.00",
      oldPrice: null,
    },
    {
      id: 2,
      name: "All Natural Italian-Style Chicken Meatballs",
      url: "https://nest.botble.com/en/products/all-natural-italian-style-chicken-meatballs",
      image: "https://nest.botble.com/storage/products/2-400x400.jpg",
      rating: 70,
      reviews: 10,
      price: "$347.00",
      oldPrice: "$910.00",
    },
    {
      id: 3,
      name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      url: "https://nest.botble.com/en/products/angies-boomchickapop-sweet-salty-kettle-corn",
      image: "https://nest.botble.com/storage/products/3-400x400.jpg",
      rating: 66,
      reviews: 10,
      price: "$2,364.00",
      oldPrice: "$2,472.00",
    },
    {
      id: 4,
      name: "Foster Farms Takeout Crispy Classic (Digital)",
      url: "https://nest.botble.com/en/products/foster-farms-takeout-crispy-classic-digital",
      image: "https://nest.botble.com/storage/products/4-400x400.jpg",
      rating: 62,
      reviews: 10,
      price: "$1,574.00",
      oldPrice: "$1,767.00",
    },
  ];

  const topRatedItems = [
    {
      id: 1,
      name: "Canada Dry Ginger Ale – 2 L Bottle",
      url: "https://nest.botble.com/en/products/canada-dry-ginger-ale-2-l-bottle",
      image: "https://nest.botble.com/storage/products/7-400x400.jpg",
      rating: 77.77778,
      reviews: 9,
      price: "$814.00",
      oldPrice: "$1,913.00",
    },
    {
      id: 2,
      name: "All Natural Italian-Style Chicken Meatballs",
      url: "https://nest.botble.com/en/products/all-natural-italian-style-chicken-meatballs",
      image: "https://nest.botble.com/storage/products/2-400x400.jpg",
      rating: 70,
      reviews: 10,
      price: "$347.00",
      oldPrice: "$910.00",
    },
    {
      id: 3,
      name: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee (Digital)",
      url: "https://nest.botble.com/en/products/naturally-flavored-cinnamon-vanilla-light-roast-coffee-digital",
      image: "https://nest.botble.com/storage/products/12-400x400.jpg",
      rating: 70,
      reviews: 10,
      price: "$674.25",
      oldPrice: "$899.00",
    },
    {
      id: 4,
      name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      url: "https://nest.botble.com/en/products/angies-boomchickapop-sweet-salty-kettle-corn",
      image: "https://nest.botble.com/storage/products/17-400x400.jpg",
      rating: 70,
      reviews: 10,
      price: "$2,387.00",
      oldPrice: null,
    },
  ];


  return (
    <div>
      <section className='section-padding23 mb-30'>
        <div className="container111">
          <div className="row1122">
            <div className='col-xl-3 col-lg-6 col-md-6 mb-md-0'>
              <h4 className='section-title style-1 mb-30 animated __web-inspector-hide-shortcut__'>
                Top Selling
              </h4>

                    <div className="product-list-small animated animated">
            {products.map((product) => (
              <article
                className="row1122 align-items-center hover-up"
                key={product.id}
              >
                <figure className="col-md-4a mb-0">
                  <a href={product.url}>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </a>
                </figure>
                <div className="col-md-8a mb-0">
                  <p className="text-truncate2 font-heading h6">
                    <a href={product.url} title={product.name}>
                      {product.name}
                    </a>
                  </p>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: `${product.rating}%` }}
                      ></div>
                    </div>
                    <span className="font-small ml-5 text-muted">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="product-price">
                    <span>{product.price}</span>
                    {product.oldPrice && (
                      <span className="old-price">{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>



                <div className="col-xl-3 col-lg-6 col-md-6 mb-md-0">
          <h4 className="section-title style-1 mb-30 animated animated">
            Trending Products
          </h4>
          <div className="product-list-small animated animated">
            {Trending.map((item) => (
              <article className="row1122 align-items-center hover-up" key={item.id}>
                <figure className="col-md-4a mb-0">
                  <a href={item.url}>
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </a>
                </figure>
                <div className="col-md-8a mb-0">
                  <p className="text-truncate2 font-heading h6">
                    <a href={item.url} title={item.name}>
                      {item.name}
                    </a>
                  </p>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: `${item.rating}%` }}
                      ></div>
                    </div>
                    <span className="font-small ml-5 text-muted">
                      ({item.reviews})
                    </span>
                  </div>
                  <div className="product-price">
                    <span>{item.price}</span>
                    {item.oldPrice && (
                      <span className="old-price">{item.oldPrice}</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        
        <div className="col-xl-3 col-lg-6 col-md-6 mb-md-0">
      <h4 className="section-title style-1 mb-30 animated animated">
        Recently Added
      </h4>
      <div className="product-list-small animated animated">
        {items1.map((items1) => (
          <article className="row1122 align-items-center hover-up" key={items1.id}>
            <figure className="col-md-4a mb-0">
              <a href={items1.url}>
                <img
                  src={items1.image}
                  alt={items1.name}
                  loading="lazy"
                />
              </a>
            </figure>
            <div className="col-md-8a mb-0">
              <p className="text-truncate2 font-heading h6">
                <a href={items1.url} title={items1.name}>
                  {items1.name}
                </a>
              </p>
              <div className="product-rate-cover">
                <div className="product-rate d-inline-block">
                  <div
                    className="product-rating"
                    style={{ width: `${items1.rating}%` }}
                  ></div>
                </div>
                <span className="font-small ml-5 text-muted">
                  ({items1.reviews})
                </span>
              </div>
              <div className="product-price">
                <span>{items1.price}</span>
                {items1.oldPrice && (
                  <span className="old-price">{items1.oldPrice}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>


    <div className="col-xl-3 col-lg-6 col-md-6 mb-md-0">
      <h4 className="section-title style-1 mb-30 animated animated">Top Rated</h4>
      <div className="product-list-small animated animated">
        {topRatedItems.map((item) => (
          <article className="row1122 align-items-center hover-up" key={item.id}>
            <figure className="col-md-4a mb-0">
              <a href={item.url}>
                <img src={item.image} alt={item.name} loading="lazy" />
              </a>
            </figure>
            <div className="col-md-8a mb-0">
              <p className="text-truncate2 font-heading h6">
                <a href={item.url} title={item.name}>
                  {item.name}
                </a>
              </p>
              <div className="product-rate-cover">
                <div className="product-rate d-inline-block">
                  <div
                    className="product-rating"
                    style={{ width: `${item.rating}%` }}
                  ></div>
                </div>
                <span className="font-small ml-5 text-muted">
                  ({item.reviews})
                </span>
              </div>
              <div className="product-price">
                <span>{item.price}</span>
                {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>


        </div>
        </div>
      </section>
    </div>
  )
}

export default RatedProduct