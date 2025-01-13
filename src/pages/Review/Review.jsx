
import "./Review.css"; // Add CSS for styling

const reviews = [
  {
    id: 1,
    avatar: "https://nest.botble.com/storage/customers/6-150x150.jpg",
    name: "Augustus Moore",
    date: "3 months ago",
    rating: 20,
    text: "We have received brilliant service support and will be expanding the features with the developer. Nice product!",
    images: [
      "https://nest.botble.com/storage/products/12-150x150.jpg",
      "https://nest.botble.com/storage/products/16-150x150.jpg",
    ],
  },
  // {
  //   id: 2,
  //   avatar: "https://nest.botble.com/storage/customers/7-150x150.jpg",
  //   name: "Bailey Orn DVM",
  //   date: "3 months ago",
  //   rating: 100,
  //   text: "Solution is too robust for our purpose so we didn't use it at the end. But I appreciate customer support during initial configuration.",
  //   images: [
  //     "https://nest.botble.com/storage/products/15-150x150.jpg",
  //     "https://nest.botble.com/storage/products/18-150x150.jpg",
  //   ],
  // },
  // {
  //   id: 3,
  //   avatar: "https://nest.botble.com/storage/customers/2-150x150.jpg",
  //   name: "Dr. Euna VonRueden Sr.",
  //   date: "3 months ago",
  //   rating: 20,
  //   text: "For me the best eCommerce script on Envato at this moment: modern, clean code, a lot of great features. The customer support is great too: I always get an answer within hours!",
  //   images: [
  //     "https://nest.botble.com/storage/products/10-1-150x150.jpg",
  //     "https://nest.botble.com/storage/products/19-1-150x150.jpg",
  //   ],
  // },
  // {
  //   id: 4,
  //   avatar: "https://nest.botble.com/storage/customers/5-150x150.jpg",
  //   name: "Mr. Johan Davis",
  //   date: "3 months ago",
  //   purchased: true,
  //   rating: 60,
  //   text: "Great system, great support, good job Botble. I'm looking forward to more great functional plugins.",
  //   images: [
  //     "https://nest.botble.com/storage/products/5-150x150.jpg",
  //     "https://nest.botble.com/storage/products/22-150x150.jpg",
  //     "https://nest.botble.com/storage/products/24-1-150x150.jpg",
  //   ],
  // },
];

const Reviews = () => {
  return (
    <div className="position-relative review-list-container">
      <h4 className="mb">10 review(s) for "Seeds of Change Organic Quinoe"</h4>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className=" mb-32 review-item">
            <div className="col-auto">
              <img
                className="rounded-circle"
                src={review.avatar}
                alt={review.name}
                width="60"
              />
            </div>
            <div className="col">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-2 review-item__header">
                <div className="fw-medium">{review.name}</div>
                <time className="text-muted small">{review.date}</time>
                  <div className="small text-muted">✅ Purchased {review.date}</div>
              </div>

              <div className="mb-2 review-item__rating">
                <div
                  className="bb-product-rating"
                  style={{ "--bb-rating-size": "80px" }}
                >
                  <span
                    style={{
                      width: `${review.rating}%`,
                      display: "block",
                    }}
                  ></span>
                </div>
              </div>

              <div className="review-item__body">{review.text}</div>

              <div className="review-item__images mt-3">
                <div className="row g-1 review-images">
                  {review.images.map((image, index) => (
                    <a
                      key={index}
                      href={image.replace("-150x150", "")}
                      className="col-3 col-md-2 col-xl-1 position-relative"
                    >
                      <img src={image} alt={review.text} className="img-thumbnail" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
