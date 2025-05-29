import { useState } from 'react'

function NavBar() {
  const [status, setStatus] = useState(true);

  return(
  <header className="bg-black text-white p-3 justify-content-between align-items-center">
    <h1 className="bg-dark border-bottom border-secondary">
      Assignment 1
    </h1>
    <button className="btn btn-light" onClick={() => setStatus(!status)}>
      {status ? "Login" : "Logout"}
    </button>
  </header>
  );
}

export default NavBar;