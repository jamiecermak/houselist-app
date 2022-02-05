import { useQuery } from 'react-query'
import ApiClient from '../api/ApiClient'

const fetchLists = async () => {
    const { data } = await ApiClient.get('/lists')

    return data
}

const useLists = () => useQuery(['lists'], () => fetchLists())

export default useLists
