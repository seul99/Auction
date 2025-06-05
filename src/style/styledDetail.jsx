//styledDetail.jsx 파일
import styled from "styled-components";

// 전체 페이지 컨테이너
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Noto Sans KR", sans-serif;
`;

// 상품 정보 상단 영역
export const TopSection = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
`;

// 이미지 박스
export const ImageBox = styled.div`
  width: 500px;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 상품 정보 텍스트 섹션
export const InfoBox = styled.div`
  flex: 1;
  line-height: 2;
`;

// 제목
export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

// 현재 가격 표시
export const Price = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// 조회수 및 날짜
export const MetaInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

// 기타 설명 리스트
export const DetailList = styled.ul`
  margin: 10px 25px;
  padding-left: 16px;
  color: #333;
  li {
    margin-bottom: 5px;
  }
`;

// 버튼 영역
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

// 버튼 스타일
export const Button = styled.button`
  padding: 10px 50px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.buy {
    background-color: #d32f2f;
    color: white;
  }

  &.soldout {
    background-color: #388e3c;
    color: white;
  }

  &.bookmark {
    background-color: #ccc;
    color: black;
  }
`;

// 상세 설명 섹션
export const DetailSection = styled.div`
  margin-top: 40px;
`;

// 상세 설명 제목
export const SectionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

// 상세 설명 텍스트
export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
`;
