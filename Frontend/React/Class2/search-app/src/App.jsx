
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const HiringStatus = () => {
  return (
    "✅"
  )
}

const NonHiringStatus = () => {
  return (
    "❌"
  )
}

const SearchedItems = () => {
  const list = [
    { name: 'Microsoft', isHiring: true},
    { name: 'Apple', isHiring: false}, 
    { name: 'Google', isHiring: true},
    { name: 'Meta', isHiring: true},
    { name: 'Amazon', isHiring: false},
    { name: 'Flipkart', isHiring: true},
    { name: 'Uber', isHiring: false},
    { name: 'Razorpay', isHiring: true},
  ];

  const announce = (msg) => {
     window.alert(msg);
  }
  return (
    <ul>
      {
        list.map(item => {
          return (
            item.isHiring ? (
            <li onClick={() => announce(item.name)}>
              {item.isHiring ? <HiringStatus /> : <NonHiringStatus />} 
              {item.name}
            </li>
          ) : '');
        })
      }
    </ul>
  )
}

const AddNewCompany = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <input placeholder='Enter company name...' onChange={handleChange}/> // in React
    // <input placeholder='Enter company name...' onchange="handleChange()"/> // in JS
  )
}

function App() {
  return (
    <>
      <AddNewCompany/>
      <SearchedItems />
    </>
  )
}

export default App
