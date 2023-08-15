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
            Copyright &copy; 베지밀 2023 + 팀원 이름
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
