import CustomNavbar from './CustomNavbar';
import Header from './Header';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div>
      <CustomNavbar />
      <div>
        <div class="row" style={{ margin: " 0", background: " var(--background)" }} >
          <div class="col-auto side-column" style={{ padding: " 0" }} >
            <p></p>
          </div>
          <div class="col-auto m-auto col-auto" style={{ background: " var(--background)", padding: " 0" }} >
            <Header />
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
