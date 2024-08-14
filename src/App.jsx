import Home from "./Components/home"
import NavBar from "./Components/NavBar"
import About from "./Components/About"
import SocialLinks from "./Components/SocialLinks"
import Portfolio from "./Components/Portfolio"
import Experience from "./Components/Experience"
import Contact from "./Components/Contact"
function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </>
  )
}

export default App
