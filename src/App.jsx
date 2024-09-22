import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StarSection from './components/StarSection.jsx'
import {DASHBOARD_DESCRIPTION, LIBRARY_DESCRIPTION, RECIPE_DESCRIPTION, RESTAURANT_DESCRIPTION, TTT_DESCRIPTION, TODO_DESCRIPTION} from './data/ProjectInfo.jsx'
import Project from './components/Project.jsx'
import './App.css'

function App(){

  const projectSection = useRef(null);
  const animationSection = useRef(null);
  const atlantaSection = useRef(null);


  return (
    <>
    <div className='background-overlay'>
      <StarSection lower={2} upper={3} numberStars={150}></StarSection>
      <StarSection lower={2} upper={2} numberStars={75}></StarSection>
      <StarSection lower={1} upper={2} numberStars={50}></StarSection>
      <img ref={atlantaSection} src='./public/AtlantaCityScape.png' className='city-image'></img>
    </div>
    <header>
      <div className='header-logo'>CDB</div>
      <nav>
        <div className='nav-item' onClick={()=>{projectSection.current.scrollIntoView({ behavior: 'smooth' })}}>
          <p>Projects</p>
        </div>
        <div className='nav-item' onClick={()=>{animationSection.current.scrollIntoView({ behavior: 'smooth' })}}>
          <p>Animatations</p>
        </div>
        <div className='nav-item' onClick={()=>{atlantaSection.current.scrollIntoView({ behavior: 'smooth' })}}>
          <p>Atlanta</p>
        </div>
      </nav>
    </header>
    <section className='section-intro'>
      <h1>Hello, I'm Carson</h1>
      <div className='profile-container'>
      <img className='profile-picture' src='/Personal_Website_Photo.JPG'></img>
      </div>
      <h3>I am a web developer</h3>
      <div className='contacts-container'>
        <a href="https://www.linkedin.com/in/carson-bates-b176442a2/" target="_blank" rel="noopener noreferrer">
          <button className='contact-button'>
            <i className="fa-brands fa-linkedin-in brand-logo"></i>
          </button>
        </a>
        <a href="https://github.com/carsonbates913" target="_blank" rel="noopener noreferrer">
          <button className='contact-button'>
            <i className="fa-brands fa-github brand-logo"></i>
          </button>
        </a>
        <a href="https://www.instagram.com/carsonbat06/" target="_blank" rel="noopener noreferrer">
          <button className='contact-button'>
            <i className="fa-brands fa-instagram brand-logo pink"></i>
          </button>
        </a>
      </div>
    </section>
    <section className='section-projects' ref={projectSection}>
      <h2>Here are some of my projects</h2>
      <Project projectTitle='To-Do List App' projectDescription={TODO_DESCRIPTION} projectImage='todolistapp.png' githubLink={'https://github.com/carsonbates913/todo_list'}/>

      <Project projectTitle='Italian Recipe App' projectDescription={RECIPE_DESCRIPTION} projectImage='Recipe_App.png' isReverse={true} githubLink={'https://github.com/carsonbates913/ItalianRecipes'}/>

      <Project projectTitle='Digital Library App' projectDescription={LIBRARY_DESCRIPTION} projectImage='Library_App.png' githubLink={'https://github.com/carsonbates913/library_page'}/>

      <Project projectTitle='Personal Restaurant Page' projectDescription={RESTAURANT_DESCRIPTION} projectImage='Restaurant_App.png' isReverse={true} githubLink={'https://github.com/carsonbates913/restaurant_page'}/>

      <Project projectTitle='Tic Tac Toe App' projectDescription={TTT_DESCRIPTION} projectImage='Tic_Tac_Toe_App.png' githubLink={'https://github.com/carsonbates913/tic_tac_toe'}/>

      <Project projectTitle='Dashboard Page' projectDescription={DASHBOARD_DESCRIPTION} projectImage='Dashboard_App.png' isReverse={true} githubLink={'https://github.com/carsonbates913/dashboard_model'}/>
    </section>
    <section className='section-animations' ref={animationSection}>
      <h2>Here are some animations that I am proud of</h2>
      <div className='animations-container'>
          <video className='video'controls width="600">
            <source src="../public/Carson_FinalAnimation_Compressed.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          <video className='video'controls width="600">
            <source src="../public/RemyMovie.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
      </div>
    </section>
    </>
  )
}

export default App
