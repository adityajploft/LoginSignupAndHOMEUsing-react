import './App.css'
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import MoviesPage from './components/MoviePage';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moviesPage" element={<MoviesPage />} />
      
      </Routes>

    </>

  )
}

export default App;
