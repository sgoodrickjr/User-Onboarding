import React, { useState } from 'react'

let schema = yup.string();
await schema.isValid('hello world');

const [user, setUser] = useState({
    name = ""
    email = ""
    password = ""
})

const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

return (
    <form onSubmit={event => handleSubmit(event)}>
        <label>
            Username:
          <input
                type="text"
                name="username"
                value={user.username}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
            Password:
          <input
                type="text"
                name="password"
                value={user.password}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
            Terms of Service:
            <input
                name="TermsOfService"
                type="checkbox"
                checked={true}
                onChange={handleInputChange} />
        </label>
        <button>Submit!</button>
    </form>
);

export default Form