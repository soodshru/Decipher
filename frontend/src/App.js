import './App.css';
import { Record } from './components/Record';
import LanguageSelect from './components/LanguageSelect';

function App() {
  return (
    <div className="App">
      <LanguageSelect/>
      <Record/>
    </div>
  );
}

export default App;
