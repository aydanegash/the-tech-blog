const loginHandler = async function(event) {
  event.preventDefault();

  const userEmail = document.querySelector('#user-email').value;
  const userPassword = document.querySelector('#user-password').value;

 

  await fetch(`/api/post/login`, {
    method: 'POST',
    body: JSON.stringify({
      userEmail,
      userPassword,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Could not login');
    }
  };

document
  .querySelector('#login')
  .addEventListener('login-btn', loginHandler);
