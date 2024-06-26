import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const course = useLoaderData();

  const { brand, description, image_url, price, title } = course;

  return (
    <div >

      <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={image_url} alt="Movie"/></figure>
          <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <h3 className="text-xl font-semibold">{brand}</h3>
              <p className="text-lg font-light">{description}</p>
              <h3 className="text-2xl font-semibold">{price} $$</h3>
   
          </div>
        </div>
    </div>
  );
};

export default ProductDetails;