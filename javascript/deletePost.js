async function buttonDelete(id)
{
    if (id)
    {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'delete',
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