import { useState } from "react"
import About from "./About"
import CallToAction from "./CallToAction"
import CountDown from "./CountDown"
import Features from "./Features"
import Footer from "./Footer"
import Hero from "./Hero"
import SlideUpForm from "./SlideUpForm"



function App() {

  
 const [showForm, setShowForm] = useState(false);

 const RegisterClick = () => {
  setShowForm(!showForm);
 }

  return (
    <>
    <div className="flex-col items-center justify-center">
      <Hero />
      <About />
      <Features />
      <CountDown RegisterClick={RegisterClick} />
      <CallToAction />
      <Footer />
    </div>
    <SlideUpForm setShowForm={setShowForm} showForm={showForm} />
  </>
  )
}

export default App
