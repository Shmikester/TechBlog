async function signupFormHandler(event)
{
    event.preventDefault();
    
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = "Account already exists";

    const username = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    const signupInfo = { username: username, email: email, password: password };

    const infoData = JSON.stringify(signupInfo);

    if (username && email && password)
    {
        const response = await fetch('/api/user/signup', {
            method: 'post',
            body: infoData,
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok)
        {
            document.location.replace('/dashboard/');
        } else
        {
            const formSelect = document.getElementsByClassName('signupForm');
            formSelect.innerHTML = "Account already exists";
        }
    }
};

document.querySelector('.signupForm').addEventListener('submit', signupFormHandler);