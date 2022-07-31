import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext'
import User from './Components/User/User';
//import ProtectedRoute from './Components/Helper/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <UserStorage>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route path="conta/*" element={<User />} />
     </Routes>
     <Footer />
     </UserStorage>
    </div>
    </BrowserRouter>
  );
}

export default App;
