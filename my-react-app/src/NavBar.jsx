import { useState } from 'react'

function NavBar() {
  const [status, setStatus] = useState(true);

  return(
  <header>
    <h1>
      Assignment 1
    </h1>
    <button onClick={() => setStatus(!status)}>
      {status ? "Login" : "Logout"}
    </button>
  </header>
  );
}

export default NavBar;