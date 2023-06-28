import axios from 'axios';

export const apiUrl = 'http://demoapi-pc.com/';

export const fetcher = async (url, method, data = {}) => {
    try {
        const result = await axios({
            method,
            url: `${apiUrl}${url}`,
            data
        });
        return {
            ...result?.data
        };
    } catch(err) {
        return {success: false, data: "", errors: "api_error"};
        // throw new Error(err?.response?.data?.message);
    }
}