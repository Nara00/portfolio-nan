import CustomNavbar from './CustomNavbar';
import Header from './Header';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import Testc from './test';
import React, { useState, useEffect } from 'react'



function App() {

  const [count, setCount] = useState(0)

  const height = window.innerHeight



  useEffect(() => {
    const listenScrollEvent = (event) => {
      if (window.scrollY < height-height/3) {
        return setCount(0)
      } else if (window.scrollY < (height * 2)-height/3) {
        return setCount(1)
      } else if (window.scrollY < (height * 3)-height/3) {
        return setCount(2)
      } else if (window.scrollY < (height * 4)-height/1.1) {
        return setCount(3)
      } else{
        return setCount(4)
      }
    }

    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, [count]);


  return (
    <div>
      <CustomNavbar section={count}/>
      <div>
        <div class="row" style={{ margin: " 0", background: " var(--background)" }} >
          <div class="col-auto side-column" style={{ padding: " 0" }} >
            <p></p>
          </div>
          <div class="col-auto m-auto col-auto" style={{ background: " var(--background)", padding: " 0" }} >
            <Header />
            {/* <Testc /> */}
            <Skills />
            <AboutMe />
            <Projects />
          </div>
          <div class="col-auto side-column" style={{ padding: " 0" }} >
            <p></p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" style={{ background: " var(--background2)" }} >
          <div class="col fixed-bottom" style={{ background: " var(--background2)", height: " 1vw" }} >
            <p></p>
          </div>
        </div>
      </div>
      <Footer />

    </div >
  );
}

export default App;
