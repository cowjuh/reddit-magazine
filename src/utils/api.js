export function fetchTopPhotos () {
    const endpoint = window.encodeURI(`https://api.reddit.com/r/analog/.json?limit=40`)

    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if(!data.data) {
                throw new Error(data.message)
            }
            // console.log(data.data.children)
            return data.data.children
        })
}

export function fetchTopPoems () {
    const endpoint = window.encodeURI(`https://api.reddit.com/r/OCPoetry/.json?limit=100`)
    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if(!data.data) {
                throw new Error(data.message)
            }
            console.log(data.data.children)
            return data.data.children
        })
}

export function get_url_extension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}