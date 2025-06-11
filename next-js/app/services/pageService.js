import { API } from './API'

export const getAllPages = async () => {
    try {
        const data = await API('/pages')
        return data
    } catch (error) {
        console.error('Error fetching all pages:', error)
        throw error
    }
}

export const getPageById = async (id) => {
    if (!id) throw new Error('Page ID is required')

    try {
        const data = await API(`/pages/${id}`)
        return data
    } catch (error) { }
}
