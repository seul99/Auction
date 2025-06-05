import React, { useState } from "react";
import * as L from "../style/styledLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/api/user/login", {
        userId: userId,
        password: password,
      })
      .then((res) => {
        console.log("로그인 성공:", res.data);

        localStorage.setItem("token", res.data.token);
        // 로그인 성공 시 메인으로 이동
        // navigate("/");

        window.location.href = "/";
      })
      .catch((err) => {
        console.error("로그인 실패:", err);
        alert("아이디 또는 비밀번호가 잘못됐습니다.");
      });
  };

  const gotoJoin = () => {
    navigate("/join");
  };

  return (
    <L.LoginWrapper>
      <h2 onClick={() => navigate("/")}>경매마당</h2>

      <L.Loginsection>
        <label>아이디</label>
        <br />
        <input
          type="text"
          placeholder="abc@gmil.com"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <label>비밀번호</label>
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </L.Loginsection>

      <L.LoginBtn onClick={handleLogin}>로그인</L.LoginBtn>

      <L.GotoJoin>
        <ul>
          <li onClick={gotoJoin}>이메일 가입</li>
          <li>이메일 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
      </L.GotoJoin>

      <L.LoginMenu>
        <div className="naver">
          <img src="/images/naver.svg" alt="네이버" />
          <p>네이버 로그인</p>
        </div>
        <div className="apple">
          <img src="/images/apple.svg" alt="애플" />
          <p>애플 로그인</p>
        </div>
      </L.LoginMenu>
    </L.LoginWrapper>
  );
};

export default Login;
