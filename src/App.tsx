import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter.tsx';
import Button from './components/Button/Button.tsx';

function App() {
  return (
    <div className='container'>
      <Button label='Что сделать'></Button>
    </div>
  );
}

export default App;
