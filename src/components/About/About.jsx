import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Praesentium debitis eius atque quas dolorum veritatis non fugiat 
            et molestias. Consectetur qui voluptate quaerat delectus. Blanditiis 
            laboriosam veniam exercitationem nostrum vitae! vitae! tempore voluptatum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum qui eum repellendus quibusdam cupiditate? Quisquam 
            sapiente doloribus magnam obcaecati ea fuga illum fugit! Saepe 
            tempore voluptatum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Praesentium debitis eius atque quas dolorum veritatis non fugiat 
            et molestias. Consectetur qui voluptate quaerat delectus. Blanditiis 
            laboriosam veniam exercitationem nostrum</p>
        </div>
      </div>
    </div>
  )
}

export default About
