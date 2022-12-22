
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pajes/home/Home';
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
      <Routes>
       
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<h1>Movie detail paje</h1>}></Route>
        <Route path='movie/:type' element={<h1>Movie list paje</h1>}></Route>
        <Route path='/*' element={<h1>Error paje</h1>}> </Route>

        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
