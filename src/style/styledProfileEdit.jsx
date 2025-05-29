import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid #fff;
`;

// 전체 영역: MypageMenu + Content
export const Wrapper = styled.div`
  display: flex;
  gap: 80px;
  background: #fff;
  min-height: calc(100vh - 160px); /* header+footer 제외 높이 */
`;

// Content만 스타일링
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid #fff;
`;

// 프로필 관리 안쪽 스타일
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #eee;
  object-fit: cover;
`;

export const NameAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 6px 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #333;
    color: white;
  }
`;

export const FieldGroup = styled.div`
  margin-top: 30px;
  padding: 20px 0;
  border-top: 1px solid #ddd;
`;

export const FieldTitle = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const FieldContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled(Button)``;
