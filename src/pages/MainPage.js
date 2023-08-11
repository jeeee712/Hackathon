import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./component/Footer";
import "./MainPage.css"; // Replace with your CSS file
import Navigation from "./component/Navigation";

function MainPage() {
  return (
    <div>
      <Navigation />
      <header className="bg-dark py-5" style={{ height: "70vh" }}>
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default MainPage;
