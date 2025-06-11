import { API } from './API'

export const getMenuById = async (id) => {
    if (!id) throw new Error('Page ID is required')

    try {
        const data = await API(`/menu-items/${id}`)
        return data
    } catch (error) { }
}
