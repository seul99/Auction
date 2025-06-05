//Detail.jsx파일
import React, { useState } from "react";
import * as D from "../style/styledDetail";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

const Detail = () => {
  return (
    <D.Container>
      <HeaderSection />
      <D.TopSection>
        <D.ImageBox>
          <img
            src={`${process.env.PUBLIC_URL}/images/labtop.jpg`}
            alt="상품 이미지"
          />
        </D.ImageBox>

        <D.InfoBox>
          <D.Title>애플 맥북프로 m4 16인치</D.Title>
          <D.Price>판매가: 1,100,000원</D.Price>
          <D.MetaInfo>조회수 33 | 7일 전</D.MetaInfo>

          <D.DetailList>
            <li>상품 상태: 사용감 없음</li>
            <li>배송비: 일반 4,000원, GS반값 택배 이용 가능</li>
            <li>직거래 지역: 경기도 수원시 장안구</li>
          </D.DetailList>

          <D.ButtonGroup>
            <D.Button className="bookmark">찜</D.Button>
            <D.Button className="soldout">판매중</D.Button>
            <D.Button className="buy">구매하기</D.Button>
          </D.ButtonGroup>
        </D.InfoBox>
      </D.TopSection>

      <D.DetailSection>
        <D.SectionTitle>상품 상세 정보</D.SectionTitle>
        <D.Description>
          맥북 사용이 너무 어려워서 산지 한달만에 박스에 그대로 보관했습니다.
          <br />
          입찰가는 1,000,000원부터 시작하겠습니다.
        </D.Description>
      </D.DetailSection>
      <FooterSection />
    </D.Container>
  );
};

export default Detail;
