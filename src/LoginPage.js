import React, { useState } from 'react';

const LoginPage = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === 'user' && password === 'senha') {
      props.onLogin();
    } else {
      alert('Nome de usuário ou senha incorretos. Digite user e senha respectivamente.');
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User:</label>
        <input type="text" id="user" name="user" value={user} onChange={(e) => setUser(e.target.value)} />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
