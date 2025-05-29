import React, { useEffect, useState } from "react";
import * as M from "../style/styledMyPage";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import MypageMenu from "../components/Mypage/MypageMenu";
import ProfileCard from "../components/Mypage/ProfileCard";
import StatusBoard from "../components/Mypage/StatusBoard";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/user/mypage", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("마이페이지 불러오기 실패");
        return res.json();
      })
      .then((data) => {
        console.log("마이페이지 응답:", data);
        setUserInfo(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // if (!userInfo) return <p>로딩 중...</p>; ////

  return (
    <M.Container>
      <M.Header>
        <HeaderSection />
      </M.Header>

      <M.MyPageSection>
        <MypageMenu />
        <M.MyPageContent>
          <ProfileCard />
          <StatusBoard title="구매 내역" data={[2, 1, 0, 1]} />
          <StatusBoard title="판매 내역" data={[2, 1, 0, 1]} />
          <StatusBoard title="관심 내역" data={[10, 1, 0, 1]} />
        </M.MyPageContent>
      </M.MyPageSection>

      <M.Footer>
        <FooterSection />
      </M.Footer>
    </M.Container>
  );
};

export default MyPage;
