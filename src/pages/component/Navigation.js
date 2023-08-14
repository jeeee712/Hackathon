import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LoginButton from "./LoginButton";
import "../MainPage.css";
import Cookies from "js-cookie";

function Navigation() {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoriesToggle = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          데일렉트로닉
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/MainPage"
                >
                  홈
                </Link>
              </li>

              <li className="nav-item dropdown">
                <div
                  className={`nav-link dropdown-toggle ${
                    showCategories ? "show" : ""
                  }`}
                  onClick={handleCategoriesToggle}
                >
                  전자기기
                </div>
                <ul
                  className={`dropdown-menu ${showCategories ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/category/tv">
                      TV
                    </Link>
                    <Link className="dropdown-item" to="/category/notebook">
                      노트북
                    </Link>
                    <Link className="dropdown-item" to="/category/tablet">
                      태블릿
                    </Link>
                    <Link className="dropdown-item" to="/category/phone">
                      휴대폰
                    </Link>
                    <Link className="dropdown-item" to="/category/vacuum">
                      청소기
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {Cookies.get("token") ? (
                  <div>
                    <Link className="nav-link" to="/CurrentPage">
                      마이페이지
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </li>
            </ul>
            <LoginButton handleLogout={() => {}} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
