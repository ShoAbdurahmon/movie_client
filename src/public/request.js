async function request(path, method, body) {
    try {
        
        const headers = {}

        if (!(body instanceof FormData)) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        let response = await fetch(path, {
            method: method || 'GET',
            headers,
            body
        })

        return await response.json()

    } catch (error) {
        console.log(error)
    }
}
