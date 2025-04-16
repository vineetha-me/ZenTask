
// Login.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // Simulated login
      setTimeout(() => setLoading(false), 1000);
    } catch {
      setError('Login failed.');
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="left-pane">
        <img src="/logo.svg" alt="Todoist Logo" className="logo" />
        <h2>Log in</h2>

        <button className="social-button"><img src="/google-icon.svg" alt="Google" style={{ height: '20px', width: 'auto' }} />Continue with Google</button>
        <button className="social-button"><FaFacebook style={{ color: '#3b5998' }} /> Continue with Facebook</button>
        <button className="social-button"><FaApple style={{ color: '#000000' }} /> Continue with Apple</button>

        <form onSubmit={handleLogin} className="form">
          {error && <div className="error">{error}</div>}

          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? < FaEye/> : <FaEyeSlash />}
            </span>
          </div>

          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        <Link to="#" className="forgot">Forgot your password?</Link>

        <p className="footer">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <div className="right-pane">
        <img src="/Add tasks-rafiki.svg" alt="Illustration" className='illustration' />
      </div>
    </div>
  );
};

export default Login;