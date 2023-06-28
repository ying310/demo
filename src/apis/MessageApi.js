import { fetcher } from './apiSetup';

export const getMessage = async (props) => {
    const { success, data, errors } = await fetcher('/Web/message', 'GET', props);

    return { success, data, errors };
}

export const insertMessage = async (props) => {
    const { success, data, errors } = await fetcher('/Web/message', 'POST', props);
    
    return { success, data, errors };
}

