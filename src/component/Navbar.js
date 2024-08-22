import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar= () => {
  const menuList = ['여성','Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'sale', '지속가능성']
  const [isInputVisible, setIsInputVisible] = useState(false);
  const toggleInputVisibility = () => {
    setIsInputVisible(prevState => !prevState);
  };

  // 로그인페이지로 가는 함수
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div className='top-navbar'>
      <div className='search-login-area'>
        <FontAwesomeIcon className='search-icon' icon={faSearch} onClick={toggleInputVisibility}/>
        {isInputVisible && <input type='text' placeholder='Search...' />} 
        <FontAwesomeIcon className="user-icon" icon={faUser} onClick={goToLogin}/>
        <div className='login-text' onClick={goToLogin}>로그인</div>
      </div>
      <div className='Nav-section'>
      <img width={80} src={logo} alt="Logo"/>
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
