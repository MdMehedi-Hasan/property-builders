import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Notfound from './Components/notFound/Notfound';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/reviews" element={<Reviews></Reviews>}></Route>
                <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="blogs" element={<Blogs></Blogs>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="*" element={<Notfound></Notfound>}></Route>
           </Routes>
    </div>
  );
}

export default App;
