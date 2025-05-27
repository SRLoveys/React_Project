import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NavBar() {
  const [status, setStatus] = useState(true);

  return(
  <header>
    <h1>
      Assignment 1
    </h1>
    <button onClick={() => setStatus(!status)}>
      {status ? "Logout" : "Login"}
    </button>
  </header>
  );
}

function Movie (props) {
  return (
    props.name, props.year, props.rating
  )
}

function MovieList () {

}

function App() {

  return <>
  <NavBar />
  <Movie />
  </>

}

export default App
