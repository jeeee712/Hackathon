import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import "./RegisterPage.css";

function RegisterPage({ api }) {
  // api 전달 받음
  const navigate = useNavigate();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      if (password.length < 8) {
        setMessage("비밀번호는 8자리 이상이어야 합니다.");
        return;
      }
      const response = await api.post(
        "users/register", // 실제 백엔드 API URL
        { username, email, phone_number, password }
      );
      const data = response.data;
      if (data.user) {
        navigate("/LoginPage");
      }
    } catch (error) {
      setMessage("중복된 회원이 있습니다. 다른 정보로 가입해 주세요.");
    }
  };

  return (
    <div>
      <Navigation />
      <div className="signup-container">
        <h2>회원가입</h2>
        <div>
          <label>이름</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>휴대폰번호</label>
          <input
            type="tel"
            value={phone_number}
            onChange={(e) => setPhone(e.target.value)}
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
        <button onClick={handleSignUp}>회원가입</button>
        <p>{message}</p>
        <p>
          이미 회원이신가요? <Link to="/LoginPage">로그인</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
