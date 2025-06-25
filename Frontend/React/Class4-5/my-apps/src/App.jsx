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
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <h1>Apps</h1>,
//     },
//     {
//       path: "/cart",
//       element: <Cart />,
//     },
//     {
//       path: "/sign-up",
//       element: <SignupForm />,
//     },
//     {
//       path: "/todo",
//       element: <Todo />,
//     },
//     {
//       path: "/product-list",
//       element: <ProductList />,
//     },
//     {
//       path: "/user-card",
//       element: <UserCard />,
//     },
//     {
//       path: "/counter",
//       element: <Counter intialCount={1} />,
//     },
//   ]);

//   return (
//       <RouterProvider router={router} />
//   )
// }

// export default App


function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<h1>Apps</h1>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/product-list" element={ <ProductList />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="*" element={<h1>404 Not Found!</h1>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App



