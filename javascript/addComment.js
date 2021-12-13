async function addCommentFormHandler(event)
{
    event.preventDefault();

    const commentText = document.querySelector('#addCommentTitle').value.trim();
    const postID = document.querySelector('#addPostId').value.trim();

    const addCommentData = {
        title: postTitle,
        body: postText,
        postID: postID
    };

    const comment = JSON.stringify(addCommentData);

    if (commentText && postID)
    {
        const response = await fetch('/api/comments/', {
            method: 'post',
            body: comment,
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

document.querySelector('.addCommentForm').addEventListener('submit', addCommentFormHandler);