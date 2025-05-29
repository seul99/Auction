import styled from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CheckboxRow = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  color: #444;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
`;

export const ItemCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;

export const ItemImage = styled.div`
  width: 100%;
  padding-top: 100%;
  background-color: #ccc;
  position: relative;
  border-radius: 16px;
`;

export const BookmarkIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 20px;
  color: #444;
`;

export const ItemInfo = styled.div`
  padding: 14px 10px;
`;

export const Category = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #111;
  margin-bottom: 4px;
`;

export const Name = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 6px;
`;

export const Price = styled.div`
  font-size: 13px;
  color: #222;
  margin-bottom: 8px;

  strong {
    font-weight: bold;
  }
`;

export const Meta = styled.div`
  font-size: 12px;
  color: #888;
  line-height: 1.4;
`;
