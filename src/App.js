import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter/>
      </Router>
      
    </div>
  );
}

export default App;
