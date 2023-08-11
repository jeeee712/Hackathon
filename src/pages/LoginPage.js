import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import LoginButton from "./component/LoginButton";

function LoginPage({ api }) {
  // api 전달 받음
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await api.post("users/login", { email, password });
      const data = response.data;
      console.log(data.user);
      if (data.user) {
        setIsLoggedIn(true);
        navigate("/MainPage?isLoggedIn=true");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("이메일 혹은 비밀번호를 확인해 주세요.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMessage("");
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <LoginButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
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
          <button onClick={handleLogin}>Login</button>
          <p>{message}</p>
          <p>
            계정이 없으신가요? <Link to="/RegisterPage">회원가입</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
