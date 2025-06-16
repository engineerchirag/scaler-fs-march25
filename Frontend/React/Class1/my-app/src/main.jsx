import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Heading (props) {
  const { title } = props;
  console.log(props.title);
  // let name = "Chirag";
  return (
    // <h1>Hello World! {name}</h1>
    <h1>Hello World! {title}</h1>
  )
}
const ListContent1 = () => {
  return (
    <>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </>
  )
}

const ListContent2 = () => {
  return (
    <>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </>
  );
}

const List = () => {
  return (
    <ul>
        <ListContent1 />
        <ListContent2 />
    </ul>
  )
}

const MyApp = () => {
  return (
    <div>
      <Heading title="Chirag" />
      <Heading title="Nithish" />
      <Heading title="Nikhilesh" />
      <List />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <MyApp />
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
