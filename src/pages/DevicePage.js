import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./DevicePage.css"; // Replace with your CSS file
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";

function DevicePage() {
  return (
    <div>
      <Navigation />

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>

      {/* Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCard
              imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              productName="Fancy Product"
              price="$40.00 - $80.00"
            />
            <ProductCard
              imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              productName="Fancy Product"
              price="$40.00 - $80.00"
            />
            {/* Add more ProductCard components here */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ProductCard({ imgSrc, productName, price }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={imgSrc} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{productName}</h5>
            {price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link className="btn btn-outline-dark mt-auto" to="/options">
              View options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
