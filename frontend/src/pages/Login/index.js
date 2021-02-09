import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
      <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </>
  );
}

export default Login;