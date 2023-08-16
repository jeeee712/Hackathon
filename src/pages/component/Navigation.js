import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LoginButton from "./LoginButton";
import "../MainPage.css";
import Cookies from "js-cookie";

function Navigation() {
  const [showCategories, setShowCategories] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const buttonClassName = isActive ? "toggleOn" : "";

  const handleCategoriesToggle = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <img src="/img/logo1.png" alt="로고" style={{ height: "40px" }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
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
      <div>
        <div className={`${buttonClassName} switch`}>
          <div className="toggle-wrapper">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              style={{
                padding: "15px 0px",
                borderBottom: "1px solid #000000",
              }}
            >
              홈
            </Link>
            <div
              className={`nav-link dropdown-toggle ${
                showCategories ? "show" : ""
              }`}
              onClick={handleCategoriesToggle}
              style={{
                padding: "15px 0px",
                borderBottom: "1px solid #000000",
                marginBottom: "15px",
              }}
            >
              전자기기
            </div>
            <ul
              className={`dropdown-menu ${showCategories ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
              style={{ position: "relative", marginBottom: "15px" }}
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
            <LoginButton handleLogout={() => {}} />
            {Cookies.get("token") ? (
              <div>
                <Link
                  className="nav-link"
                  to="/CurrentPage"
                  style={{
                    marginTop: "15px",
                    padding: "15px 0px",
                    borderTop: "1px solid #000000",
                  }}
                >
                  마이페이지
                </Link>
              </div>
            ) : (
              <div style={{ marginTop: "15px" }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
