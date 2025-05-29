// styledProductManagement.jsx
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  color: #333;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const Tab = styled.div`
  padding: 14px 0;
  font-weight: 400;
  color: #bbb;
  cursor: pointer;
  font-size: 15px;
  position: relative;

  &.active {
    color: #000;
    font-weight: 500;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
  }
  &:hover {
    color: #000;
  }
`;

export const Filters = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  thead {
    text-align: left;
    border-bottom: 1px solid #aaa;
    font-weight: 500;
  }

  th,
  td {
    padding: 18px 10px;
    vertical-align: middle;
  }

  td select {
    padding: 6px 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const ProductImage = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ccc;
  border-radius: 4px;
`;

export const ProductLink = styled.a`
  color: #0076ff;
  text-decoration: none;
  display: inline-block;
  margin-top: 4px;
  font-weight: 400;
`;

export const Pagination = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const PageNumber = styled.span`
  display: inline-block;
  margin: 0 6px;
  font-size: 15px;
  cursor: pointer;
  color: #999;

  &.active {
    color: #000;
    font-weight: 500;
  }
`;
