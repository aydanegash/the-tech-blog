const signupHandler = async function(event) {
    event.preventDefault();
  
    const userName = document.querySelector('#user-name').value;
    const userEmail = document.querySelector('#user-email').value;
    const userPassword = document.querySelector('#user-password').value;
  
    await fetch(`/api/user`, {
      method: 'POST',
      body: JSON.stringify({
        userName,
        userEmail,
        userPassword,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up');
      }
    };
  
  document
    .querySelector('#sign-up')
    .addEventListener('signup-btn', signupHandler);
  