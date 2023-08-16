import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../MainPage.css"; // Replace with your CSS file

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="py-1 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; 2023 LIKELION 삼육대학교 베지밀 🥜 양정민 안홍영
            진윤재 오지이 김민진 최성일
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
