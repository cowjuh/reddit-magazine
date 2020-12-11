export function fetchContent (subreddit) {
    const endpoint = window.encodeURI(`https://api.reddit.com/r/${subreddit}/.json?limit=100`)
    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if(!data.data) {
                return null
            }
            return data.data.children
        })
}

export function subredditExists(subreddit) {
    const endpoint = window.encodeURI(`https://api.reddit.com/r/${subreddit}/.json?limit=100`)
    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if(!data.data || data.data.dist === 0) {
                return null
            }
            return data.data.children
        })
}

export function get_url_extension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}