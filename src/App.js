import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";



export default function App() {
  return (
    <Routes>
      <Route path='/' element= { <Home />} />
      <Route path='/movie/:movieId' element= { <Movie />}/>
    </Routes>
  )
}