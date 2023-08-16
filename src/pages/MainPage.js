import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./component/Footer";
import "./MainPage.css"; // Replace with your CSS file
import Navigation from "./component/Navigation";

function MainPage() {
  return (
    <div>
      <Navigation />
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">
              IT를 활용한 전자기기 물류창고를 만들다, IT TERMINAL
            </h1>
            <p
              className="lead fw-normal text-white-50 mb-0"
              style={{ paddingTop: "50px", paddingBottom: "0px" }}
            >
              본 웹사이트는 일명 '전자기기 정보 정리 커뮤니티'입니다. <br />
              현재 전자기기의 빠른 흐름으로 인하여 디지털 격차가 발생하고
              있습니다. <br />
              이를 해소하고자 세대(출시년도)별로 정리된 전자기기의 정보들을
              전달합니다. <br />
              또, 전자기기 카테고리를 제공함과 동시에 바로 구매가 가능하도록
              구매 링크와 연결합니다.
              <br />
              각 기기 상세정보 페이지의 하단에는 후기를 작성할 수 있는 공간이
              마련되어 있습니다.
              <br />
              그럼, 저희는 오늘도 전자기기와 여러분들을 I:T(잇)기 위해
              노력하겠습니다. <br />
              감사합니다.
            </p>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default MainPage;
