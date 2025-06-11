export const updateLocalStorage = (key, data) => {
    if (data && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0)) {
        localStorage.setItem(key, JSON.stringify(data))
    } else {
        localStorage.removeItem(key)
    }
}