import React from "react";
import { Button, Card } from "react-bootstrap";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Boards from "./component/Boards";
import "./DetailPage.css";

function DetailPage() {
  return (
    <div className="DetailPage">
      <Navigation />

      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <Card.Img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">Shop item template</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$45.00</span>
                <span>$40.00</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="number"
                  value="1"
                  style={{ maxWidth: "3rem" }}
                />
                <Button variant="outline-dark" className="flex-shrink-0">
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related items section */}
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">
            <Boards />
          </h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Add related product cards */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DetailPage;
