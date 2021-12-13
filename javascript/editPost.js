async function editPostFormHandler(event)
{
    event.preventDefault();

    const postTitle = document.querySelector('#editPost-title').value.trim();
    const postText = document.querySelector('#editPost-text').value.trim();

    const editPostInfo = {
        title: postTitle,
        body: postText,
        date: Date.now()
    };

    const post = JSON.stringify(editPostInfo);

    if (postTitle && postText)
    {
        const response = await fetch('/api/posts/', {
            method: 'put',
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

document.querySelector('.editPostForm').addEventListener('submit', editPostFormHandler);