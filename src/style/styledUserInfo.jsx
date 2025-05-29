import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;
  background: #fff;
  min-height: calc(100vh - 160px); /* header + footer 제외 */
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Section = styled.div`
  margin-bottom: 40px;
  border-top: 1px solid #ddd;
  padding-top: 30px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FieldLabel = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

export const FieldValue = styled.div`
  font-size: 15px;
  font-weight: 500;
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

export const DangerLink = styled.div`
  text-align: right;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 20px;

  &:hover {
    color: #000;
  }
`;
