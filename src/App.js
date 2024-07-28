import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AboutCompany} from './components/pages/aboutCompany/aboutComapny';
import { Services } from './components/pages/services/services';
import { Footer } from './components/footer/footer';
import { PrivacyPolicy } from './components/pages/privacyPolicy/privacyPolicy';
import { HowOrder } from './components/pages/howOrder/howOrder';
import { Delivery } from './components/pages/delivery/delivery';


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<AboutCompany/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='how-order' element={<HowOrder/>}/>
        <Route path='delivery' element={<Delivery/>}/>

      </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
