import React,{useEffect, useState, useRef} from 'react';
import logo from './logo.svg';
import { Parallax, Background } from 'react-parallax';
import './App.css';
import Navbar from './components/Navbar/index'
import MainSection from './components/MainSection/index'
import AboutMe from './components/AboutMe/index'
import Projects from './components/Projects/index'
import Technologies from './components/Technologies/index'
import ContactMe from './components/ContactMe/index'
import Footer from './components/Footer/index'
var color= "#f59042"
function App() {
  const [active, setActive]=useState('')
  
  useEffect(()=>{
   /* let elem = document.querySelector('#home');
    let rect = elem.getBoundingClientRect();
    */
   setActive('home')
  },[])
  const prevScrollY = useRef(0);
  const [scrollposition, setScrollPosition] = useState(0)
  const [goingUp, setGoingUp] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp])
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }


    prevScrollY.current = currentScrollY;
    //console.log(goingUp, currentScrollY);
    setScrollPosition(prevScrollY.current)
  };
  return (
    <div className="App">

      <Navbar color = {color} active={active} scrollposition = {scrollposition}/>
      <MainSection color = {color} scrollposition = {scrollposition} setActive={(act)=>{ setActive(act)}}/>
      {/*<Parallax
            blur={10}
            bgImage={'https://images5.alphacoders.com/326/326023.jpg'}
            bgImageAlt="the cat"
            strength={200}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '200px' }} />
        </Parallax>
      */}
      {/* <AboutMe color = {color} scrollposition = {scrollposition} setActive={(act)=>{ setActive(act)}}/> */}
      <Technologies color = {color} scrollposition = {scrollposition} setActive={(act)=>{ setActive(act)}}/>
      
      <Projects color = {color}  scrollposition = {scrollposition} setActive={(act)=>{ setActive(act)}}/>
      <ContactMe color = {color}  scrollposition = {scrollposition}  setActive={(act)=>{ setActive(act)}}/>
      <Footer color = {color} />
      
    </div>
  );
}

export default App;


/*
const [pageUp, setPageUp] = useState(false)
const lastScroll = useRef(0)

const checkScrollTop = () => {
  const currentScroll = window.pageYOffset
  setPageUp(lastScroll.current > currentScroll)
  lastScroll.current = currentScroll
}

// lodash throttle function
const throttledFunc = throttle(checkScrollTop, 400, { leading: true })

useEffect(() => {
  window.addEventListener("scroll", throttledFunc, false)
  return () => {
    window.removeEventListener("scroll", throttledFunc)
  }
}, [])
*/
