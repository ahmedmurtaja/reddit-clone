/* eslint-disable no-undef */
let data;
listen('#signup-form', 'submit')
  .then((event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    data = Object.fromEntries(formData);
  })
  .then(() => ClientValidator.validateString(data.username))
  .then(() => ClientValidator.validateEmail(data.email))
  .then(() => ClientValidator.validateMin(data.password, 6))
  .then(() => data)
  .then(({ username, email, password }) => fetch('/api/v1/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  }))
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      window.location.href = '/';
    } else {
      throw new Error(res.data.message);
    }
  })
  .catch((err) => {
    alert(err.message);
    window.location.href = '/html/Signup.html';
  });
