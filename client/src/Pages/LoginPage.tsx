import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Login Info:', { email, password });

    // Clear the form
    setEmail('');
    setPassword('');
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button
          onClick={() => navigate('/signup')}>
          Don't have an account? Sign Up
        </button>
    </div>
  );
};

export default LoginPage;
