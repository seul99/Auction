import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Tabs,
  Tab,
  Filters,
  Input,
  Select,
  Table,
  ProductImage,
  ProductLink,
  Pagination,
  PageNumber,
} from "../style/styledProductManagement";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

const ProductManagement = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8080/api/product/management", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const goentry = () => navigate("/productentry");
  const goCheck = () => navigate("/productmanagement");

  return (
    <Container>
      <HeaderSection />

      <Tabs>
        <Tab onClick={goentry}>상품 등록</Tab>
        <Tab onClick={goCheck} className="active">
          상품 관리
        </Tab>
      </Tabs>

      <Filters>
        <Input
          type="text"
          name="keyword"
          placeholder="상품명을 입력해주세요."
        />
        <Select>
          <option>전체</option>
          <option>판매 중</option>
          <option>판매 완료</option>
        </Select>
      </Filters>

      <Table>
        <thead>
          <tr>
            <th>사진</th>
            <th>판매상태</th>
            <th>상품명</th>
            <th>가격</th>
            <th>찜</th>
            <th>게시일</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>
                <ProductImage
                  src={product.productImage || "/images/default.png"}
                />
              </td>
              <td>
                <Select>
                  <option>판매 중</option>
                  <option>판매 완료</option>
                </Select>
              </td>
              <td>
                <ProductLink
                  onClick={() =>
                    navigate(`/productdetail/${product.productId}`)
                  }
                >
                  {product.productName}
                </ProductLink>
              </td>
              <td>{product.productPrice?.toLocaleString()}원</td>
              <td>{product.likeCount || 0}</td>
              <td>{product.createAt?.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <PageNumber className="active">1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
      </Pagination>

      <FooterSection />
    </Container>
  );
};

export default ProductManagement;
