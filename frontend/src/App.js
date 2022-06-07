import './App.css';
import Profile from './components/profile/Profile';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="blur" style={{ top: '-18%', right: "0" }}></div>
        <div className="blur" style={{ top: '36%', left: "-8rem" }}></div>
        <Home />
      </div>
      {/* <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/auth' component={Auth} />

      </Routes> */}
    </Router>
  );
}

export default App;

// heroku git:remote -a ddt-socialmedia