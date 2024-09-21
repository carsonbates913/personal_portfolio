import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const [stars1, setStars1] = useState(null);

  useEffect(()=>{
    const newStars = Array.from({length: 100}, (v, i)=>{
      const size = Math.ceil((Math.random() * 2) + 1);
      let rect;
      if(section1.current){
        console.log('section1 check');
        rect = section1.current.getBoundingClientRect();
      }
      return <div key={i} className={`star-size-${size}`} style={{position: 'absolute', top: `${Math.random() * rect.height}px`, left: `${Math.random() * rect.width}px`}}></div>
    });

    setStars1(newStars);
  }, [])

  return (
    <>
    <div className='background-overlay'>
      <div className='star-section' ref={section1}>
        {stars1}
      </div>
      <div className='star-section' ref={section2}></div>
      <div className='star-section' ref={section3}></div>
    </div>
    <header>
      <div className='header-logo'>CDB</div>
      <nav>
        <div className='nav-item'>
          <p>Projects</p>
        </div>
        <div className='nav-item'>
          <p>Animatations</p>
        </div>
        <div className='nav-item'>
          <p>Atlanta</p>
        </div>
      </nav>
    </header>
    <section className='section-intro'>
      <h1>Hello, I'm Carson</h1>
      <div className='profile-container'>
      <img className='profile-picture' src='../public/Personal_Website_Photo.JPG'></img>
      </div>
      <h3>I am a web developer</h3>
      <div className='contacts-container'>
        <button className='contact-button'>
          <i className="fa-brands fa-linkedin-in brand-logo"></i>
        </button>
        <button className='contact-button'>
        <i className="fa-brands fa-github brand-logo"></i>
        </button>
        <button className='contact-button'>
        <i className="fa-brands fa-instagram brand-logo pink"></i>
        </button>
      </div>
    </section>
    </>
  )
}

export default App
