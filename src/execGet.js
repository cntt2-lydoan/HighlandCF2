export const execGET = (url) => {
    return fetch(url, {
        mode: 'no-cors',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }

    });
};