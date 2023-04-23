let data;
listen('#sign-in-form', 'submit')
  .then((event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    data = Object.fromEntries(formData);
  })
  .then(() => ClientValidator.validateEmail(data.email))
  .then(() => ClientValidator.validateMin(data.password, 6))
  .then(() => data)
  .then(({ email, password }) => fetch('/api/v1/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }))
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      window.location.href = '/';
    } else {
      console.log(res.data);
      throw new Error(res.data.message);
    }
  })
  .catch((err) => {
    alert(err.message);
    window.location.href = '/html/signin.html';
  });
