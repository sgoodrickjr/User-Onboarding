import React, { useState } from 'react'
import * as Yup from "yup";

const formSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: Yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is Required")
    terms: Yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions")
});

const [errors, setError] = useState({
    email: "",
    password: "",
    terms: ""
});

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const inputChange = e => {
    e.persist();

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

//   function LoginForm() {
//     return (
//       <form>
//         <label htmlFor="email">
//         <input type="email" name="email" placeholder="Email" />
//         />
//               {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
//         <label htmlFor="password">
//         <input type="password" name="password" placeholder="Password" />
//         {errors.password.length > 6 ? (<p className="error">{errors.email}</p>) : null}
//          <label htmlFor="terms">
//           Do you agree to the terms and conditions?
//         <input type="checkbox">
//         <button>Submit!</button>
//         />
//       </form>
//     );
//   }

  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      // console.log(valid);
      setButtonDisabled(!valid);
    });
  }, [formState]);

const formSubmit = e => {
    e.preventDefault();
    console.log("submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data);
        console.log("success", res);
      })
      .catch(err => console.log(err.response));
  };

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
                id="usernameInput"
                type="text"
                name="username"
                value={user.username}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
            Password:
          <input
                id="passwordInput"
                type="text"
                name="password"
                value={user.password}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
           Do you agree to the terms and conditions?
            <input
                id="termsInput"
                name="terms"
                type="checkbox"
                checked={true}
                onChange={handleInputChange} />
        </label>
        <button>Submit!</button>
    </form>
);

export default Form