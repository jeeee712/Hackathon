import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CurrentPage.css";
import axios from "axios";
import Cookies from "js-cookie";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import { setPageTitle } from "./component/setPageTitle";

function CurrentPage({ api }) {
  useEffect(() => {
    setPageTitle("마이페이지");
  }, []);

  // api 전달 받음
  const navigate = useNavigate();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // GET 요청 보내기
  const token = Cookies.get("token");
  axios.defaults.headers.common["Authorization"] = `${"token " + token}`;

  axios
    .get(
      "https://port-0-begimeal-ac2nll45iv0u.sel3.cloudtype.app/users/current"
    )
    .then((response) => {
      const data = response.data;
      setName(data.user.username);
      setEmail(data.user.email);
      // 요청에 대한 처리 (data 변수에 응답 데이터가 들어옴)
    })
    .catch((error) => {
      // 에러 처리
      console.error("Error fetching data:", error);
    });

  const handleDelete = async () => {
    try {
      Cookies.remove("token");
      const response = await axios.delete(
        "https://port-0-begimeal-ac2nll45iv0u.sel3.cloudtype.app/users/current"
      );
      const data = response.data;
      if (data.user) {
        navigate("/");
      }
    } catch (error) {
      setMessage("중복된 회원이 있습니다.");
    }
  };

  return (
    <div>
      <Navigation />
      <div className="current-container">
        <h2>회원 정보 조회</h2>
        <div>
          <label>이름</label>
          <input
            type="text"
            className="current-input"
            value={username}
            readOnly
          />
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            className="current-input"
            value={email}
            readOnly
          />
        </div>
        <div className="current-button-container">
          <Link to="/">
            <button>취소</button>
          </Link>
          <Link to="/CurrentUpdatePage">
            <button>수정</button>
          </Link>
          {/* 회원 탈퇴 컴포넌트  */}
          <Link to="/">
            <button onClick={handleDelete}>탈퇴</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CurrentPage;
