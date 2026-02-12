import Profile from './components/Home/Profile';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="portfolio-content">
        <section id="Home">
          <Profile />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
