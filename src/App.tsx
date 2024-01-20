import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* More routes here */}
      </Routes>
    </Router>
  );
}

export default App;
