import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <div className="hero-text-box animate__animated animate__lightSpeedInLeft">
          <h1> Create your own pizza <br />Hello super delicious pizza.</h1>
          <Link to="/choose-your-pizza-size" className="btn btn-full">I'm hungry</Link>
          <Link to="/choose-your-pizza-size" className="btn btn-ghost">Show me more</Link>
        </div>
      </header>
    </>
  );
}

export default App;