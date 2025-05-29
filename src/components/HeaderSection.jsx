import React, { useState, useEffect } from "react";
import * as M from "../style/styledMain";
import { useNavigate } from "react-router-dom";
import SerchTap from "../pages/SerchTap";

const HeaderSection = () => {
  //로그인 상태관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // 로그인 버튼
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  //로그아웃
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // 마이페이지 이동
  const goToMypage = () => {
    navigate("/mypage");
  };

  // 홈 이동

  const goToHome = () => {
    navigate("/");
  };

  //고객센터 이동
  const goToCustomerCenter = () => {
    navigate("/customercenter");
  };

  //상품목록 이동
  const goList = () => {
    navigate("/itemlist");
  };
  //판매하기 이동
  const gosell = () => {
    navigate("/gosell");
  };

  //검색화면창 이동
  const [open, setOpen] = useState(false);
  const goSerch = () => {
    // navigate("/serchtap");
    setOpen(true);
  };

  // 상품등록하기 이동
  const goProductEntry = () => {
    navigate("/productentry");
  };
  return (
    <M.Header>
      <M.Logo>경매마당</M.Logo>
      <M.Nav>
        <M.NavIconItem onClick={goToHome}>
          <img
            src={`${process.env.PUBLIC_URL}/images/home.svg`}
            alt="home"
            width="30px"
          />
        </M.NavIconItem>
        <M.NavItem onClick={goList}>상품목록</M.NavItem>
        <M.NavItem onClick={goProductEntry}>판매하기</M.NavItem>
        <M.NavItem onClick={goToMypage}>마이페이지</M.NavItem>
        <M.NavItem onClick={goToCustomerCenter}>고객센터</M.NavItem>
      </M.Nav>
      <M.BtnWrap>
        <M.SerchBtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/search.svg`}
            alt="search"
            width="30px"
            onClick={goSerch}
          />
        </M.SerchBtn>
        {open && <SerchTap onClose={() => setOpen(false)} />}

        {isLoggedIn ? (
          <M.loginBtn onClick={logout}>로그아웃</M.loginBtn>
        ) : (
          <M.loginBtn onClick={goToLogin}>로그인</M.loginBtn>
        )}
      </M.BtnWrap>
    </M.Header>
  );
};
export default HeaderSection;
