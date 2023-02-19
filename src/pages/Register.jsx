import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };

    dispatch(register(user));

    setName('');
    setEmail('');
    setPassword('');
  };

  const inputNameChange = e => {
    setName(e.target.value);
  };

  const inputEmailChange = e => {
    setEmail(e.target.value);
  };

  const inputPasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Create account</h2>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Your name"
          onChange={inputNameChange}
        />
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
          Register
        </button>
      </form>
    </div>
  );
}