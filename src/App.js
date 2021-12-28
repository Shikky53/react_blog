import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Author from "./pages/Author";
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Article from './components/Article';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/auteur" exact element={<Author/>}/>
      <Route path='/blog' exact element={<Blog/>}/>
      <Route path='/articles' exact element={<Article/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
