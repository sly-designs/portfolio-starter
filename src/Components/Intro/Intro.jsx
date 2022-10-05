import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import w44 from '../../img/w44.png';
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am </span>
                <span>Faith Njeri</span>
                <span>I am a designer, a trainer 
                    and a business woman, dealing with 
                    the best <br /> Quality products
                    you can find.</span>

            </div>

            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href='#'>
                <img src={Github} alt="" />
                </a>
                <a href='#'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href='#'>
                <img src={Instagram} alt="" />
                </a>
            </div>

        </div>
        <div className="i-right">
            
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={w44} alt="" />
        </div>
    </div>
  )
}

export default Intro