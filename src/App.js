import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import NotFound from './pages/404';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:movieId' element={<Movie />} />
      <Route path='/search' element={<Search />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
