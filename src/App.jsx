import './App.css'
import About from './components/about/about'
import Information from './components/information/information'
import Education from './components/education/education'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Certificaciones from './components/certificaciones/certificaciones'
import Footer from './components/footer/footer'
import TranslationButton from './components/translation/translation'
import Publications from './components/publications/publications'
function App() {
  

  return (
    <>
      <div className='aplicacion'>
        <div className='card'>
          <Information />
        </div>
        <div className='card'>
          <About/>
        </div>
        <div className='card'>
          <Education />
        </div>
        <div className='card'>
          <Certificaciones />
        </div>
        <div className='card'>
          <Publications />
        </div>
        <div className='card'>
          <Skills />
        </div>
        <div className='card'>
          <Projects />
        </div>
        <Footer />
      </div>
      <TranslationButton />
    </>
  )
}

export default App
