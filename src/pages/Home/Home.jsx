import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>The Protector is a 2005 Thai martial arts film starring Tony Jaa, directed by Prachya Pinkaew. Known as Tom-Yum-Goong in Thailand, the film follows Kham, a skilled Muay Thai fighter, who embarks on a dangerous journey to Australia to rescue his stolen elephants, which are sacred to his family. Along the way, he battles ruthless criminals, corrupt officials, and deadly fighters using his powerful "elephant bone-breaking" martial arts style.</p>
         <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>

         </div>
         <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />

      </div>
      <Footer/>
    </div>
  )
}

export default Home
