document.addEventListener('DOMContentLoaded', () =>
{
    const navbarFunctionality = Array.prototype.slice.call(document.querySelectorAll('.navbarFunctionality'), 0);

    if (navbarFunctionality.length > 0)
    {
        navbarFunctionality.forEach(element =>
        {
            element.addEventListener('click', () =>
            {
                const target = element.dataset.target;
                const focus = document.getElementById(target);

                element.classList.toggle('active');
                focus.classList.toggle('active');
            })
        })
    }
});