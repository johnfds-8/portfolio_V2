

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import NavMenu from './components/navigation/NavMenu'
import Project from './components/ProjectPage/Project'
import  { Toaster } from "react-hot-toast";
function App() {
  

  return (
    <div className='App'>
      <NavMenu />
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Toaster/>
    </div>
  )
}

export default App
