import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Menu from './pages/Menu';
import { history } from './utils/history';
import Change from './pages/Change';

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/change" element={<Change />} />
      </Routes>
    </Router>
  );
}

export default App;
