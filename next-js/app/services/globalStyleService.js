import { API } from './API'

export const getGlobalStyles = async () => {
    try {
        const data = await API('/global-styles')
        return data
    } catch (error) { }
}
