import React, { useState } from "react";
import * as P from "../style/styledProfileEdit";
import MypageMenu from "../components/Mypage/MypageMenu";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

const ProfileEdit = ({ userId }) => {
  const [nickname, setNickname] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:8080/api/user/profileEdit/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ nickname, profileImageUrl, phoneNumber, bio }),
    });

    alert("프로필이 수정되었습니다!");
  };

  return (
    <P.Container>
      <HeaderSection />

      <P.Wrapper>
        <MypageMenu />

        <P.Content>
          <P.Title>프로필 관리</P.Title>

          <P.ProfileTop>
            <P.ProfileImage
              src={profileImageUrl || "/images/default-profile.png"}
            />
            <P.NameAndButtons>
              <div>{nickname || "닉네임"}</div>
              <P.ButtonGroup>
                <P.Button>이미지 변경</P.Button>
                <P.Button>삭제</P.Button>
              </P.ButtonGroup>
            </P.NameAndButtons>
          </P.ProfileTop>

          <P.FieldGroup>
            <P.FieldTitle>프로필 이름</P.FieldTitle>
            <P.FieldContent>
              <span>{nickname}</span>
              <P.EditButton
                onClick={() => setNickname(prompt("닉네임 입력", nickname))}
              >
                변경
              </P.EditButton>
            </P.FieldContent>
          </P.FieldGroup>

          <P.FieldGroup>
            <P.FieldTitle>소개</P.FieldTitle>
            <P.FieldContent>
              <span>{bio || "나를 소개하세요"}</span>
              <P.EditButton
                onClick={() => setBio(prompt("자기소개 입력", bio))}
              >
                변경
              </P.EditButton>
            </P.FieldContent>
          </P.FieldGroup>
        </P.Content>
      </P.Wrapper>

      <FooterSection />
    </P.Container>
  );
};

export default ProfileEdit;
