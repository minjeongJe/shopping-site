import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {

  //로그인 후 메인페이지로 이동 
  const Navigate = useNavigate()
  
  const loginUser = (event) => {
    // 자동 새로고침 방지
    event.preventDefault();
    console.log("log");
    setAuthenticate(true); // 로그인 완료
    Navigate("/");
  };

  return (
    <div className='login-container'>
          <h2>로그인</h2>
          <form className="login-form" onSubmit={(event) =>loginUser(event)}>
            <label>
              이메일 <span className="required">*</span>
              <input type="email" placeholder="Email" required />
            </label>
            <label>
              비밀번호 <span className="required">*</span>
              <input type="password" placeholder="Password" required />
            </label>
            <div className="login-options">
              <label>
                <input type="checkbox" />
                <p>로그인 상태 유지</p>
              </label>
            </div>
            <button type="submit" className="login-submit-button">
              로그인
            </button>
            <button className="signUp-button">회원 가입하기</button>
          </form>
    </div>
  )
}

export default Login
