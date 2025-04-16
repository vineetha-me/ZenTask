import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !passwordConfirm) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      // Simulated signup
      setTimeout(() => setLoading(false), 1000);
    } catch {
      setError('Signup failed.');
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="left-pane">
        <h2>Sign up</h2>

        <form onSubmit={handleSignup} className="form">
          {error && <div className="error">{error}</div>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>

        <p className="footer">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>

      <div className="right-pane">
        <img src="/Add tasks-rafikil.svg" alt="Illustration" className='illustration'/>
      </div>
    </div>
  );
};

export default Signup;
