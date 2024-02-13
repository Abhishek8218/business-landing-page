import About from "./About"
import CallToAction from "./CallToAction"
import CountDown from "./CountDown"
import Features from "./Features"
import Footer from "./Footer"
import Hero from "./Hero"
import SlideUpForm from "./SlideUpForm"



function App() {
 

  return (
    <div className=" flex-col items-center justify-center">
  
       <Hero/>
      <About/>
      <Features/>
      <CountDown/>
      <CallToAction/>
      <Footer/>
    <SlideUpForm/>
    </div>
  )
}

export default App
