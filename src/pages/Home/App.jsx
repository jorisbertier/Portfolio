import '../../../src/App.css'
import { About } from '../../components/About.jsx';
import { ContactForm } from '../../components/ContactForm.jsx';
import Nav from '../../components/Nav.jsx';
import Presentation from '../../components/Presentation.jsx';
import { ProjectsSection } from '../../components/ProjectsSection.jsx';
import { SkillsSection } from '../../components/SkillsSection.jsx';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Presentation></Presentation>
      <ProjectsSection/>
      <SkillsSection />
      <ContactForm />
      <About />
    </div>
  );
}

export default App;
