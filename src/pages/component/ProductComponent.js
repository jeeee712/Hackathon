import React from "react";
import { Link } from "react-router-dom";

function ProductComponent({ name, img, description, price, year, link }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <p className="product-price">{price}</p>
            출시년도: {year}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link
              className="btn btn-outline-dark mt-auto"
              to={`/DetailPage/${encodeURIComponent(name)}`}
            >
              보러 가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
