import React, { useState } from "react";


function Rap() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = ()=>{
    setIsLoggedIn(true);
  }
  return (
    <div>
      {isLoggedIn? (
        <p>This is true welcome to the website</p>
      ):(
        <button onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}

export default Rap;
