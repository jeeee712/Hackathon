import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import LoginButton from "./component/LoginButton";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Cookies from "js-cookie";
import { setPageTitle } from "./component/setPageTitle";

function LoginPage({ api }) {
  // api 전달 받음
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setPageTitle("로그인");
  }, []);

  const handleLogin = async () => {
    try {
      const response = await api.post("users/login", { email, password });
      const data = response.data;
      if (data.user.token) {
        // setIsLoggedIn(true);
        const jwtToken = data.user.token;
        console.log(jwtToken);
        Cookies.set("token", jwtToken);
        navigate("/");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("이메일 혹은 비밀번호를 확인해 주세요.");
    }
  };

  return (
    <div>
      <Navigation />
      <div className="login-container">
        {isLoggedIn ? (
          <div>
            <p>이미 로그인된 상태입니다.</p>
            <LoginButton />
          </div>
        ) : (
          <div>
            <h2>로그인</h2>
            <div>
              <label>이메일</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>로그인</button>
            <p>{message}</p>
            <p>
              계정이 없으신가요? <Link to="/RegisterPage">회원가입</Link>
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
