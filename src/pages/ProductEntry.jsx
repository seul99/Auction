import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Tabs,
  Tab,
  FormGroup,
  Label,
  Input,
  Textarea,
  ImageUpload,
  DescSmall,
  RadioGroup,
  PriceWrap,
  SubmitButton,
} from "../style/styledProductEntry";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

const ProductEntry = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productStatus", productStatus);
    formData.append("createAt", today);
    formData.append("productImage", productImage);

    try {
      const res = await fetch(
        "http://localhost:8080/api/product/createProduct",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("상품 등록 실패");

      alert("상품이 등록되었습니다.");
      navigate("/productmanagement");
    } catch (err) {
      console.error(err);
      alert("등록 중 오류 발생");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Container>
        <HeaderSection />

        <Tabs>
          <Tab className="active">상품 등록</Tab>
          <Tab onClick={() => navigate("/productmanagement")}>상품 관리</Tab>
        </Tabs>

        <FormGroup style={{ textAlign: "center" }}>
          <Label style={{ marginBottom: "12px" }}>상품 이미지 (0/1)</Label>
          <ImageUpload onClick={() => document.getElementById("file").click()}>
            <div>
              📷
              <br />
              이미지 등록
            </div>
            <input
              type="file"
              id="file"
              name="images"
              onChange={handleImageChange}
              hidden
            />
          </ImageUpload>
          <DescSmall>
            상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보입니다.
          </DescSmall>
        </FormGroup>

        <FormGroup>
          <Label>상품명</Label>
          <Input
            type="text"
            placeholder="상품명을 입력해 주세요."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>카테고리</Label>
          <select
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option>카테고리 선택</option>
            <option>의류</option>
            <option>전자기기</option>
            <option>잡화</option>
          </select>
        </FormGroup>

        <FormGroup>
          <Label>상품 상태</Label>
          <RadioGroup>
            {["NEW", "EXCELLENT", "GOOD", "FAIR", "BAD"].map((val, idx) => (
              <Label key={idx}>
                <input
                  type="radio"
                  name="condition"
                  value={val}
                  checked={productStatus === val}
                  onChange={(e) => setProductStatus(e.target.value)}
                />
                {val === "NEW"
                  ? "새 상품 (미사용)"
                  : val === "EXCELLENT"
                  ? "사용감 없음"
                  : val === "GOOD"
                  ? "사용감 적음"
                  : val === "FAIR"
                  ? "사용감 많음"
                  : "고장/파손 상품"}
              </Label>
            ))}
          </RadioGroup>
        </FormGroup>

        <FormGroup>
          <Label>설명</Label>
          <Textarea
            placeholder="브랜드명, 모델명, 구매 시기, 하자 유무 등 상품 설명을 자세히 적어주세요."
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>희망 가격</Label>
          <PriceWrap>
            <Input
              type="number"
              placeholder="가격을 입력해주세요."
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <span>원</span>
          </PriceWrap>
        </FormGroup>

        <FormGroup>
          <Label>현재 일자</Label>
          <Input type="date" value={today} readOnly />
        </FormGroup>

        <FormGroup style={{ textAlign: "center" }}>
          <SubmitButton type="submit">등록하기</SubmitButton>
        </FormGroup>
      </Container>
      <FooterSection />
    </form>
  );
};

export default ProductEntry;
