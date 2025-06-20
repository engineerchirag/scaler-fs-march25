import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import ProductList from './components/ProductList';
import Todo from './components/Todo';
import SignupForm from './components/SignUpForm';
import Cart from './components/Cart';

function App() {
  const [show, setVisibility]= useState(false);
  return (
    <>
      <h1>Apps</h1>
      <button onClick={() => setVisibility(!show)}>Toggle Visibility</button>
      {
        show && (
          <>
             {/* <Cart />
              <SignupForm />
              <Todo />
              <ProductList />
              <UserCard /> */}
              <Counter intialCount={1} />
          </>
        )
      }
     
    </>
  )
}

export default App
