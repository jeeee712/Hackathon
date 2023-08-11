import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../MainPage.css"; // Replace with your CSS file

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
