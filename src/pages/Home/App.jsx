import '../../../src/App.css'
import Nav from '../../components/Nav.jsx';
import Presentation from '../../components/Presentation';
import { ProjectsSection } from '../../components/ProjectsSection.jsx';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Presentation></Presentation>
      <ProjectsSection/>
    </div>
  );
}

export default App;
