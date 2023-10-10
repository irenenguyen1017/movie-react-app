import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";



export default function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/movie/:movieId' element={<Movie />}/>
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}