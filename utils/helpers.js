module.exports = {
    formatDate: date =>
    {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    formatUrl: url =>
    {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
    formatPlural: (word, amount) =>
    {
        if (amount !== 1)
        {
            return `${word}s`;
        }

        return word;
    }
};