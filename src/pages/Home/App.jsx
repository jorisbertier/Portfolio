import '../../../src/App.css'
import { ContactForm } from '../../components/ContactForm.jsx';
import Nav from '../../components/Nav.jsx';
import Presentation from '../../components/Presentation';
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
    </div>
  );
}

export default App;
