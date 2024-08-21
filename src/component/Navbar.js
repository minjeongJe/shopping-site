import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const menuList = ['여성','Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'sale', '지속가능성']
  return (
    <div className='top-navbar'>
      <div className='login-button'>
        <FontAwesomeIcon className="user-icon" icon={faUser} />
        <div className='login-text'>로그인</div>
      </div>
      <div className='Nav-section'>
      <img width={80} src={logo} alt="Logo" />
      </div>
      <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map(menu => <li>{menu}</li>)}
          </ul>
        <div className='search-area'>
          <FontAwesomeIcon className='search-icon' icon={faSearch}/>
          <input type='text'/> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
