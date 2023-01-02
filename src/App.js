
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pajes/home/Home';
import MovieList from './components/movieList/movieList';
import TopRated from './components/topRated/topRated';
import UpComing from './components/upComing/upComing';
import Movie from './pajes/movieDetail/movie';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          {/* <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<h1>Movie detail paje</h1>}></Route>
          <Route path='movie/:type' element={<MovieList />}></Route>
          <Route path='movie/popular' element={<MovieList />}></Route>
          <Route path='movie/top_rated' element={<h1>Movie top_rated paje</h1>}></Route>
          <Route path='movie/upcoming' element={<h1>Movie upcoming paje</h1>}></Route>
          <Route path='/*' element={<h1>Error paje</h1>}> </Route> */}

          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movie/:type" element={<h1>Salam</h1>}></Route>
          <Route path='movie/popular' element={<MovieList />}></Route>
          <Route path='movie/top_rated' element={<TopRated />}></Route>
          <Route path='movie/upcoming' element={<UpComing/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
