import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email format');
    } else if (password.length < 8) {
      setError('Password should be at least 8 characters');
    } else {
      setError('');
      alert('Login successful!');
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white flex-wrap">
      <div
        className="w-full lg:w-1/2 p-12 flex items-center justify-center bg-gradient-to-r from-red-600 to-pink-600"
      >
        <div className="text-6xl font-bold">
          <span className="text-black">HIEU</span>
          <br />
          <span className="text-white">DAO NGOC</span>
        </div>
      </div>

      {/* Right Half - Login Form */}
      <div className="w-full lg:w-1/2 p-12 bg-gray-900">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-6">Log In</h2>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-3 rounded focus:outline-none focus:ring focus:border-blue-500"
          >
            Sign In
          </button>
          <p className="mt-4 text-center text-gray-400 text-sm">
            Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
