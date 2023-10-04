import './App.css'
import Header from './components/Header'
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Main from './components/Main';

function App() {
  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About/>} />
          </Routes>
         
      </Router>
    </>
  )
}

export default App;
