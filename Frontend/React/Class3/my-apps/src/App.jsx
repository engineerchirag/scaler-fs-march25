import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import ProductList from './components/ProductList';
import Todo from './components/Todo';

function App() {
  

  return (
    <>
      <h1>Apps</h1>
      <Todo />
      <ProductList />
      <UserCard />
      <Counter intialCount={1} />
    </>
  )
}

export default App
