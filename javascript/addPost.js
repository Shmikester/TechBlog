async function addPostFormHandler(event)
{
    event.preventDefault();

    const postTitle = document.querySelector('#addPostTitle').value.trim();
    const postText = document.querySelector('#addPostText').value.trim();

    const addPostData = {
        title: postTitle,
        body: postText,
        date: Date.now()
    };

    const post = JSON.stringify(addPostData);

    if (postTitle && postText)
    {
        const response = await fetch('/api/posts/', {
            method: 'post',
            body: post,
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

document.querySelector('.addPostForm').addEventListener('submit', addPostFormHandler);