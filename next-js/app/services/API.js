const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/wp-json/wpp-generator/v1`

const prepareHeaders = () => {
    const headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')

    return headers
}

export const API = async (endpoint, options = {}) => {
    const headers = prepareHeaders()

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: options.method || 'GET',
            headers,
            credentials: 'same-origin',
            body: options.body ? JSON.stringify(options.body) : undefined,
        })

        if (!response.ok) {
            return false
        }

        return await response.json()
    } catch (error) {
        console.error('API Request Failed:', error)
        throw error
    }
}