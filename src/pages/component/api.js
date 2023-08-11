// api.js 파일 생성

import axios from "axios";

const api = axios.create({
  baseURL: "https://port-0-begimeal-ac2nll45iv0u.sel3.cloudtype.app/", // DRF 백엔드 주소
  timeout: 5000, // 타임아웃 설정
});

export default api;
