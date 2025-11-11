import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {

  // 🧩 useState hooks for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🧠 Handle Login
  const handleLogin = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log('Attempting to log in with:');
    console.log('Email:', email);
    console.log('Password:', password);
    // You could later add an API call here to check credentials
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Login</h2>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <p className="mt-4 text-center">
              New here?{' '}
              <a href="/app/register" className="text-primary">
                Register Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
