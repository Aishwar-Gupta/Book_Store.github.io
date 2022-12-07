import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetail from './components/Book/BookDetail';

function App() {
  return (
    <div>
      <React.Fragment>
        <header>
          <Header></Header>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home></Home>} exact></Route>
            <Route path='/add-book' element={<AddBook></AddBook>} exact></Route>
            <Route path='/books' element={<Books></Books>} exact></Route>
            <Route path='/about-us' element={<About></About>} exact></Route>
            <Route path='/books/:id' element={<BookDetail></BookDetail>} exact></Route>
          </Routes>
        </main>
      </React.Fragment>
      
    </div>
  );
}

export default App;
