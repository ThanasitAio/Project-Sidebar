import './App.css';
import SideBar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';

function App() {
  return (
    <div>
    <SideBar/>
    
    <Routes>
        <Route path="/overview" element={<Overview/>} />   
    </Routes>

    </div>
    
  );
}

export default App;
