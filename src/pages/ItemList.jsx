import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import * as I from "../style/styledItemlList";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 실제 API 호출 부분 (예: /api/items)
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("상품 목록 불러오기 실패:", err));
  }, []);

  return (
    <>
      <HeaderSection />
      <I.Container>
        <I.FilterRow>
          <I.FilterButton>종료 임박</I.FilterButton>
          <I.FilterButton>신상품 순</I.FilterButton>
          <I.FilterButton>거래 인기순</I.FilterButton>
        </I.FilterRow>
        <I.CheckboxRow>
          <label>
            <input type="checkbox" /> 종료 제외
          </label>
        </I.CheckboxRow>

        <I.ItemGrid>
          {items.map((item) => (
            <I.ItemCard key={item.id}>
              <I.ItemImage>
                <I.BookmarkIcon>🔖</I.BookmarkIcon>
              </I.ItemImage>
              <I.ItemInfo>
                <I.Category>{item.category}</I.Category>
                <I.Name>{item.name}</I.Name>
                <I.Price>
                  입찰 시작 가격 : <strong>{item.price}</strong>
                </I.Price>
                <I.Meta>
                  게시일 : {item.date} | 관심 {item.interest}
                </I.Meta>
              </I.ItemInfo>
            </I.ItemCard>
          ))}
        </I.ItemGrid>
      </I.Container>
      <FooterSection />
    </>
  );
};

export default ItemList;
