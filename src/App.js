import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
