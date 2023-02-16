import axios from 'axios'
const API_URL = process.env.API_URL;

export const getPageData = async (route) => {
	return await axios.get(`${API_URL}/${route}`)

}