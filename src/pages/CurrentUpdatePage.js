import React, { useState } from "react";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import Cookies from "js-cookie";
import "./CurrentPage.css";
import axios from "axios";

function CurrentUpdatePage({ api }) {
  // api 전달 받음
  const navigate = useNavigate();

  const [beforeUsername, setBeforeUsername] = useState("");
  const [beforeEmail, setBeforeEmail] = useState("");
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        "https://port-0-begimeal-ac2nll45iv0u.sel3.cloudtype.app/users/current",
        { username, email }
      );
      const data = response.data;
      if (data.user.token) {
        navigate("/CurrentPage");
      } else {
        setMessage("중복된 회원이 있습니다.");
      }
    } catch (error) {
      setMessage("중복된 회원이 있습니다.");
    }
  };

  // GET 요청 보내기
  const token = Cookies.get("token");
  axios.defaults.headers.common["Authorization"] = `${"token " + token}`;

  axios
    .get(
      "https://port-0-begimeal-ac2nll45iv0u.sel3.cloudtype.app/users/current"
    )
    .then((response) => {
      const data = response.data;
      setBeforeUsername(data.user.username);
      setBeforeEmail(data.user.email);
    })
    .catch((error) => {
      setMessage("중복된 회원이 있습니다.");
    });

  return (
    <div className="signup-container">
      <h2>회원 정보 수정</h2>
      <div>
        <label>이름</label>
        <input
          type="text"
          placeholder={beforeUsername}
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>이메일</label>
        <input
          type="email"
          placeholder={beforeEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Link to="/CurrentPage">
        <button>뒤로가기</button>
      </Link>
      <Link to="/CurrentPage">
        <button onClick={handleUpdate}>수정하기</button>
      </Link>
      {/* 회원 탈퇴 컴포넌트  */}
      <p>{message}</p>
    </div>
  );
}

export default CurrentUpdatePage;
