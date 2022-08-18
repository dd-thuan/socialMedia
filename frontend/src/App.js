import './App.css';
// import Profile from './components/profile/Profile';
import Auth from './pages/auth/Auth';
import Home from './pages/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: "0" }}></div>
      <div className="blur" style={{ top: '36%', left: "-8rem" }}></div>
      
      <Routes>
        {/* <Route path='/'
          element={user
            ? <Navigate to="home" />
            : <Navigate to="auth" />}
        />

        <Route path='/home'
          element={user
            ? <Home />
            : <Navigate to="/auth" />
          }
        />
        <Route path='/auth'
          element={user
            ? <Navigate to="../home" />
            : <Auth />}
        /> */}
        

        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
    
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      
        
      </Routes>
    </div >
  );
}

export default App;

// heroku git:remote -a ddt-socialmedia