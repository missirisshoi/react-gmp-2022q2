import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import './App.module.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/search" element={<Home />} />
      <Route path="/search/:params" element={<Home />} />
      <Route exact path="/" element={<Navigate to="/search" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
