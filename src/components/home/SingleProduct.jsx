import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ course }) => {
  const { id, title, brand, price, description, image_url } = course;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-52 w-52 rounded-xl" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;