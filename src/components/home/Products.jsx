/* eslint-disable no-undef */

import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
    console.log(data)
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Courses</h1>

      <div className="flex gap-2 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((course) => (
            <SingleProduct key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;