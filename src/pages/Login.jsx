import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(logIn(user));

    setEmail('');
    setPassword('');
  };

  const inputEmailChange = e => {
    setEmail(e.target.value);
  };

  const inputPasswordChange = e => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handlerSubmit}>
        <input
          type="mail"
          name="email"
          value={email}
          placeholder="Your email"
          onChange={inputEmailChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          onChange={inputPasswordChange}
        />
        <button type="submit" className="button">
          Log In
        </button>
      </form>
    </div>
  );
}