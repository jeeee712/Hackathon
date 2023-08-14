import React from "react";
import { useParams } from "react-router-dom";
import { deviceData } from "./component/device"; // 수정: 경로 변경
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import ProductComponent from "./component/ProductComponent"; // 예시 ProductComponent 컴포넌트
import "./DevicePage.css";

function DevicePage() {
  const { categoryName } = useParams(); // 수정: 변수명 변경

  // categoryName을 사용하여 해당 카테고리 데이터를 가져올 수 있습니다.
  const categoryData = deviceData[categoryName]; // 수정: category -> categoryName

  if (!categoryData) {
    return <div>해당 카테고리의 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Navigation />
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">{categoryName}</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              {categoryName}의 세대별 기기 정보 모음입니다.
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {categoryData.map((product, index) => (
              <div key={index}>
                <ProductComponent
                  key={index}
                  name={product.name}
                  img={product.img}
                  description={product.description}
                  price={product.price}
                  year={product.year}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DevicePage;
