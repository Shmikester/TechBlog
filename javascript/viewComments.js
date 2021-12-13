async function buttonViewComment(id)
{
    if (id)
    {
        const response = await fetch(`/post/${id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok)
        {
            document.location.replace(`/post/${id}`);
        } else
        {
            console.log(response.statusText);
        }
    }
};