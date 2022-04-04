import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Blogs></Blogs>
      <Reviews></Reviews>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
