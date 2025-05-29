import React, { useState, useEffect } from "react";
import * as U from "../style/styledUserInfo";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import MypageMenu from "../components/Mypage/MypageMenu";

const UserInfoEdit = ({ userId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // api연결
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/user/userInformation/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );

        if (!res.ok) throw new Error("정보 불러오기 실패");

        const data = await res.json();
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        // 비밀번호는 보통 불러오지 않음 (보안상)
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserInfo();
  }, [userId, token]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/userInformation/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ email, password, phoneNumber }),
        }
      );

      if (!response.ok) throw new Error("정보 수정 실패");

      setMessage("로그인 정보가 성공적으로 수정되었습니다!");
    } catch (err) {
      console.error(err);
      setMessage("수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <U.Container>
      <HeaderSection />

      <U.Wrapper>
        <MypageMenu />

        <U.Content>
          <U.Title>로그인 정보</U.Title>

          <U.Section>
            <U.SectionTitle>내 계정</U.SectionTitle>

            <U.Field>
              <div>
                <U.FieldLabel>이메일 주소</U.FieldLabel>
                <U.FieldValue>{email}</U.FieldValue>
              </div>
              <U.Button
                onClick={() => setEmail(prompt("새 이메일 입력", email))}
              >
                변경
              </U.Button>
            </U.Field>

            <U.Field>
              <div>
                <U.FieldLabel>비밀번호</U.FieldLabel>
                <U.FieldValue>{"*".repeat(18)}</U.FieldValue>
              </div>
              <U.Button onClick={() => setPassword(prompt("새 비밀번호 입력"))}>
                변경
              </U.Button>
            </U.Field>
          </U.Section>

          <U.Section>
            <U.SectionTitle>개인정보</U.SectionTitle>

            <U.Field>
              <div>
                <U.FieldLabel>휴대폰 번호</U.FieldLabel>
                <U.FieldValue>{phoneNumber}</U.FieldValue>
              </div>
              <U.Button
                onClick={() =>
                  setPhoneNumber(prompt("휴대폰 번호 입력", phoneNumber))
                }
              >
                변경
              </U.Button>
            </U.Field>
          </U.Section>

          {message && <p>{message}</p>}

          <U.DangerLink>회원탈퇴</U.DangerLink>
        </U.Content>
      </U.Wrapper>

      <FooterSection />
    </U.Container>
  );
};

export default UserInfoEdit;
