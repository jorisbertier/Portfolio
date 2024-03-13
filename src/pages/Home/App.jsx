import '../../../src/App.css'
import Nav from '../../components/Nav.jsx';
import Presentation from '../../components/Presentation';
import { Projects } from '../../components/Projects.jsx';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Presentation></Presentation>
      <Projects/>
    </div>
  );
}

export default App;
