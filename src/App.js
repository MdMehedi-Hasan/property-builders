import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Notfound from './Components/notFound/Notfound';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import { useEffect, useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("comments.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
                <Route path="/" element={<Home comments={comments}></Home>}></Route>
                <Route path="/reviews" element={<Reviews comments={comments}></Reviews>}></Route>
                <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="blogs" element={<Blogs></Blogs>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="*" element={<Notfound></Notfound>}></Route>
           </Routes>
    </div>
  );
}

export default App;
