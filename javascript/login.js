async function loginFormHandler(event)
{
    event.preventDefault();

    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();

    const loginData = { email: email, password: password };

    const loginData = JSON.stringify(loginData);

    if (email && password)
    {
        const response = await fetch('/api/user/login/', {
            method: 'post',
            body: loginData,
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok)
        {
            document.location.replace('/dashboard/');
        } else
        {
            console.log(response.statusText);
        }
    }
};

document.querySelector('.loginForm').addEventListener('submit', loginFormHandler);