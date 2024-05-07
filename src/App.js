import './App.css';
import React, { useEffect, useState } from 'react';
// import AddUsers from './components/Users/AddUsers';
// import UserList from './components/Users/UserList';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 화면이 리렌더링 될 때 LocalStorage를 확인해서
  // 현재 Login-flag가 존재하는지 검사
  console.log('로그인 검사 수행');
  // 기존에 로그인 한 사람인지 확인하는 코드는
  // 리렌더링 될 때마다 실행하면 안된다.(한번만 확인하면 됨)
  useEffect(() => {
    console.log('useEffect 실행 - 최초 단 한번만 실행됨');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  // 서버로 로그인을 요청하는 함수, (나중에는 fetch를 통한 백엔드와의 연계가 필요하다.)
  const loginHandler = (email, password) => {
    // 로그인을 했다는 증거로 상태값 변경 및 브라우저에 로그인 값을 1로 표현해서 저장
    // 이전 프로젝트에서는 로그인 유지를 session을 사용함 -> 이제는 사용이 불가능
    localStorage.setItem('login-flag', '1'); // LocalStorage: 브라우저에서 제공하는 저장소
    setIsLoggedIn(true);
  };

  const logoutHandler = ({ isAuthenticated, onLogout }) => {
    localStorage.removeItem('login-flag');
    setIsLoggedIn(false);
  };
  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </div>
  );
};

export default App;
