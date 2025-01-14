import React from 'react';
import logo from './logo.svg';
import './App.css';

  {/* 
    작성자 : xxx
    작성일 : 2025.1.14
    내용 : 기능에 대한 내용
  */}

function App() {
  let name = "리액트";

  return (
    <div className='container'>
      <h1 className='test'>Hello,
        {
        name === '리액트' ? ( <h1>YES</h1>): null
        }!!</h1>
        {/* <P>반갑습니다.</P> */}
    </div>
  );
}

export default App;
