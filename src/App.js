import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Layout from './components/layout/Layout';
import Board from './components/Board';
import CardSolitaire from './page/CardSolitaire';
import Card from './page/Card';
import Play from './page/Play';


function App() {
  return (
    <>
    <div className='App'>
        <Layout />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/board' element={<Board/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/play' element={<Play/>}/>
          <Route path='/cardsolitaire' element={<CardSolitaire/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
