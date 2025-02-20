import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer';
import Home from './pages/home'
import Predictor from './pages/predictor';
import Contact from './pages/contact';
import About from './pages/about';
import Weather from './components/weather';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Predictor' element={<Predictor/>}/>
            <Route path='/Weather' element={<Weather/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
        
     
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
