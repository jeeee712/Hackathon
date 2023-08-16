# IT-TERMINL 웹사이트 주요 기능 구현 방법

## 로그인, 로그아웃 시 API 토큰 활용법

사용자가 로그인 정보(아이디, 비밀번호)를 입력하고 "로그인" 버튼을 클릭합니다.
프론트엔드에서 입력된 정보를 백엔드로 전달합니다.
백엔드에서 로그인 정보를 검증하고, 유효한 경우 JWT(JSON Web Token) 등의 토큰을 발급합니다.
프론트엔드에서 토큰을 받아 저장하고, 이를 이용하여 API 요청 시 헤더에 포함하여 보냅니다.
로그아웃 시 토큰을 삭제하거나 만료시킵니다.

```js
 const handleLogin = async () => {
    try {
      const response = await api.post("users/login", { email, password });
      const data = response.data;
      if (data.user.token) {
        const jwtToken = data.user.token;
        Cookies.set("token", jwtToken);
        setIsLoggedIn(true); // 로그인 상태 변경
        navigate("/"); // 홈 페이지로 이동
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("이메일 혹은 비밀번호를 확인해 주세요.");
    }
  };

  const handleLogout = () => {
    Cookies.remove("token"); // 토큰 삭제
    setIsLoggedIn(false); // 로그인 상태 변경
  };

return (
   { /* 생략 */}
   <button onClick={handleLogout}>Logout</button>
  { /* 생략 */}
    <button onClick={handleLogin}>Login</button>
    { /* 생략 */}
)
```

## 게시판 api 활용법

토큰을 이용하여 인증된 상태에서 API 요청을 보냅니다.
백엔드에서 해당 요청을 처리하고 게시물 목록 등의 데이터를 반환합니다.
프론트엔드에서 받은 데이터를 화면에 표시하거나 활용합니다.

```js
const fetchPosts = () => {
  api
    .get("boards/brd/")
    .then((response) => {
      setPosts(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
};

const handleSubmit = (event) => {
  event.preventDefault();

  const newPost = {
    title: title,
    body: body,
    created_at: new Date().toISOString(),
    modified_at: new Date().toISOString(),
  };

  api
    .post("boards/brd/", newPost)
    .then((response) => {
      fetchPosts();
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });

  // 폼 초기화
  setTitle("");
  setBody("");
};

if (loading) {
  return <p>Loading…</p>;
}
```

## device.js 파일을 이용하여 한 파일로 렌더링하는 방법

device.js 파일을 생성하고, 라우팅 정보와 컴포넌트를 매핑합니다.
해당 파일에서 라우터를 설정하고, URL 경로에 따라 다른 컴포넌트를 렌더링하도록 합니다.
라우터를 등록하는 파일에서 device.js 파일을 사용하여 다양한 페이지를 동적으로 렌더링합니다.

```js
// categoryName을 사용하여 해당 카테고리 데이터를 가져올 수 있습니다.
const categoryData = deviceData[categoryName]; // 수정: category -> categoryName

if (!categoryData) {
  return <div>해당 카테고리의 데이터를 찾을 수 없습니다.</div>;
}
```
