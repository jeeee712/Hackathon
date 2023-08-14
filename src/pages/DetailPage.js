import React from "react";
import { Button, Card } from "react-bootstrap";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Boards from "./component/Boards";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { deviceData } from "./component/device"; // deviceData를 임포트
import { useParams } from "react-router-dom"; // useParams 추가
import "./DetailPage.css";

function getProductData(productName) {
  // deviceData에서 productName과 일치하는 제품을 찾아 반환하는 로직
  for (const category in deviceData) {
    const product = deviceData[category].find(
      (item) => item.name === productName
    );
    if (product) {
      return product;
    }
  }
  return null;
}

function DetailPage() {
  const { productName } = useParams(); // productName을 useParams로 추출

  // 제품 정보 데이터를 가져올 함수 또는 상태 관리 로직이 필요할 수 있습니다.
  const product = getProductData(productName); // getProductData는 해당 제품 정보를 가져오는 함수로 가정

  if (!product) {
    return <div>제품 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="DetailPage">
      <Navigation />
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <Card.Img
                className="card-img-top mb-5 mb-md-0"
                src={product.img}
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1"></div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through"></span>
                <span>{product.price}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex justify-content-center">
                <Link to={product.link}>
                  <Button variant="outline-dark" className="flex-shrink-0">
                    <i className="bi-cart-fill me-1"></i>
                    구매하기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">
            {Cookies.get("token") ? (
              <div>
                <Boards />
              </div>
            ) : (
              <div>전자기기에 대한 후기는 로그인 후 확인하실 수 있습니다.</div>
            )}
          </h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* 관련 제품 카드 추가 */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DetailPage;
