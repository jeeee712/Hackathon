import React from "react";
import { Link } from "react-router-dom";
import "../MainPage.css";

const LoginButton = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <form className="d-flex">
        {isLoggedIn ? (
          <div>
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div>
            <Link to="/LoginPage">로그인</Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginButton;
