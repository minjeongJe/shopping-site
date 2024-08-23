import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성',
    'Divided', 
    '남성', 
    '신생아/유아', 
    '아동', 
    'H&M Home', 
    'sale', 
    '지속가능성'
  ];

  const [isInputVisible, setIsInputVisible] = useState(false);
  const toggleInputVisibility = () => {
    setIsInputVisible(prevState => !prevState);
  };

  const navigate = useNavigate();

  let [width, setWidth] = useState(0);

  // 로그인페이지로 이동 또는 로그아웃 처리
  const goToLogin = () => {
    if (!authenticate) {
      navigate("/login"); // 로그인 페이지로 이동
    } else {
      setAuthenticate(false);  // 로그아웃 처리
      navigate("/");           // 로그아웃 후 메인페이지로 리디렉션 
    }
  };

  //로고 클릭시 메인페이지 이동
  const goToMainPage = () => {
    navigate('/');
  };

  // 검색 처리
  const search = (event) => {
    // console.log("key down");
    if(event.key === "Enter"){

      //입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      console.log("k",keyword);

      //url을 바꿔준다. 
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className='top-navbar'>
      <div className="side-menu" style={{ width: width }}>
        <FontAwesomeIcon className="exit-btn" icon={faX} onClick={() => setWidth(0)} />
        <div className="side-menu-list">
            {menuList.map((menu, index) => (
                <li key={index}>{menu}</li>
            ))}
        </div>
      </div> 
      <div className='header-area'>
        <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(200)} />
        </div>
        <div className='search-login-area'>
          <FontAwesomeIcon className='search-icon' icon={faSearch} onClick={toggleInputVisibility}/>
          {isInputVisible && <input type='text' placeholder='Search...' onKeyDown={(event)=>search(event)} />} 
          <div>
            <FontAwesomeIcon className="user-icon" icon={faUser} onClick={goToLogin}/>
            <div className='login-text' onClick={goToLogin}>
               { authenticate ? "로그아웃" : "로그인" }
            </div>
          </div>
        </div>
      </div>
      <div className='Nav-section'>
        <img width={80} src={logo} alt="Logo" onClick={goToMainPage}/>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map(menu => <li>{menu}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
