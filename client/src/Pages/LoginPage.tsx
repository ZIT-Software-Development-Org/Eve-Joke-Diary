import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // Initialize navigation

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            id="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <button onClick={() => navigate('/signup')}>
        Don't have an account? Sign Up
      </button>
    </div>
  );
}

export default LoginPage;
