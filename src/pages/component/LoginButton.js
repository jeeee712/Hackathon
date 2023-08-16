import React from "react";
import { Link } from "react-router-dom";
import "../MainPage.css";
import Cookies from "js-cookie";

const LoginButton = () => {
  const handleLogout = () => {
    // 쿠키 삭제
    Cookies.remove("token");
    // 페이지 새로고침
    window.location.reload();
  };

  return (
    <div>
      <form>
        {Cookies.get("token") ? (
          <div>
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div>
            <Link to="/LoginPage">
              <button className="btn btn-outline-dark" type="submit">
                로그인
              </button>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginButton;
