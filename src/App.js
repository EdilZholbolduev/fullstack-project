import React from 'react';

import './App.css';
import img from './pictures/logo.jpg';
import '../src/style/header.css';
import "./style/main.css"

import TabsSlider from './components/TabSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='container'>
      <div className='container__inner'>
        <header className='header'>
          <div className='header__inner'>
            <a className='header__logo'>
              <img className='header__logo-img logo' src={img}/>
            </a>
            <div className='header__list'>
              <div className='header__listOne list-items'>
                <li className='header__inner-items home'>
                  Home
                </li>
                <li className='header__inner-items menu'>
                  Menu
                </li>
                <li className='header__inner-items blog'>
                  Blog
                </li>
              </div>
              <div className='header__listTwo list-items'>
                <li className='header__inner-items search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/>
                </li>
                <li className='header__inner-items shop'>
                <FontAwesomeIcon icon={faCartShopping} size="xl"/>
                </li>
                <button className='header__button button'>
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <hr class="hr-text" data-content="Бишкек"/>
        </header>
        <div className='main'>
          <div className='main__inner'>
            <button className='main__button prev-button'>&lt;</button>
            <TabsSlider/>
            <button className='main__button next-button'>&gt;</button>
          </div>
        </div>
        <hr class="hr-text" data-content="H1TEA"/>
      </div>
    </div>   
  )
}

export default App;
