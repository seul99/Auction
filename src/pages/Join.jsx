import React, { useState } from "react";
import * as J from "../style/styledJoin";
import { useNavigate } from "react-router-dom";

const Join = () => {
  //본인인증
  const [isVerified, setIsVerified] = useState(false);

  // api연결
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bank, setBank] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleJoin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          password,
          nickname,
          address,
          phoneNumber,
          bank,
          accountNo,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("회원가입 실패");
      }

      alert("회원가입 성공! 로그인 해주세요.");
      navigate("/login");
    } catch (err) {
      setError("입력 정보를 다시 확인해주세요.");
      console.error(err);
    }
  };

  //로그인 완료하기
  const navigate = useNavigate();
  // const handleVerity = () => {
  //   if (isVerified) return;
  //   setIsVerified(true);
  //   localStorage.setItem("token", "true");
  //   navigate("/");
  // };

  return (
    <div
      style={{ background: "#f5f5f5", minHeight: "100vh", padding: "40px 0" }}
    >
      <J.JoinWrapper>
        <h1>회원가입</h1>

        <J.JoinBox>
          <div className="input-row">
            <label>닉네임 *</label>
            <br />
            <div className="with-button">
              <input
                type="text"
                placeholder="사용할 닉네임을 입력해주세요"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <button>중복확인</button>
            </div>
          </div>

          <div className="input-row">
            <label>아이디 *</label>
            <br />
            <div className="with-button">
              <input
                type="text"
                placeholder="예) 영문자, 숫자 조합"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <button>중복확인</button>
            </div>
          </div>

          <div className="input-row">
            <label>비밀번호 *</label>
            <br />
            <input
              type="password"
              placeholder="예) 영문자, 숫자, 특수문자 조합 8~16자"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>주소</label>
            <br />
            <input
              type="text"
              placeholder="배송받을 주소를 입력하세요"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>관심 카테고리</label>
            <br />
            <select>
              <option>선택하세요</option>
              <option>디지털 기기</option>
              <option>가구/인테리어어</option>
              <option>유아동 물품</option>
              <option>여성의류</option>
              <option>여성잡화</option>
              <option>남성패션/잡화</option>
              <option>생활가전</option>
              <option>취미/게임/음반</option>
              <option>뷰티/미용</option>
            </select>
          </div>

          <div className="input-row">
            <label>이메일</label>
            <br />
            <input
              type="email"
              placeholder="예) madang@dongduk.ac.kr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>전화번호</label>
            <br />
            <input
              type="tel"
              placeholder="010-000-000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* <div className="input-row">
            <label>결제 유형 등록</label>
            <select>
              <option>선택하세요</option>
              <br />
              <option>카드</option>
              <option>계좌이체</option>
            </select>
          </div> */}
          <div className="input-row">
            <label>계좌번호 입력</label>
            <br />
            <select value={bank} onChange={(e) => setBank(e.target.value)}>
              <option>은행선택</option>
              <br />
              <option>신한은행</option>
              <option>국민은행</option>
              <option>농협은행</option>
              <option>신협은행</option>
              <option>카카오뱅크</option>
              <option>IBK기업은행</option>
              <option>우리은행</option>
            </select>{" "}
            <br />
            <input
              type="text"
              placeholder="정산받을 계좌번호 입력"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
            ></input>
          </div>
        </J.JoinBox>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <J.AgreeBox>
          <label>
            <input type="checkbox" /> 모두 동의합니다
          </label>
        </J.AgreeBox>
        <J.JoinEnd onClick={handleJoin}>회원가입 하기</J.JoinEnd>
        <J.JoinHome onClick={() => navigate("/")}>메인으로 돌아가기</J.JoinHome>
      </J.JoinWrapper>
    </div>
  );
};

export default Join;
