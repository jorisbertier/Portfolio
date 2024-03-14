import '../../../src/App.css'
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
    </div>
  );
}

export default App;
