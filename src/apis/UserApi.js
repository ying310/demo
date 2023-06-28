import { fetcher } from './apiSetup';

export const getUser = async (props) => {
    const { success, data, errors } = await fetcher('/Web/user', 'GET', props);
    
    return { success, data, errors };
}

