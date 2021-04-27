import React, { useState } from 'react';

const SignIn = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const target = e.target;

    switch (target.name) {
      case 'email':
        return setFormValues({ email: target.value, password: formValues.password });
      case 'password':
        return setFormValues({ email: formValues.email, password: target.value });
      default:
        throw new Error();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={formValues.email}
            onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={formValues.password}
            onChange={(e) => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignIn;