import { get, post, put, del } from '~/utils/httpRequest';

export const getServices = async () => {
    try {
        const response = await get('/Services/');
        return response;
    } catch (error) {
        console.error('Error fetching Services data:', error);
        throw error;
    }
};

export const createServices = async ( name, description, price, clinicId) => {
    try {
        const newData = {  name, description, price, clinicId };
        await post('/Services', newData);
    } catch (error) {
        console.error('Failed to create Services', error);
        throw error;
    }
};

export const editServices = async (id) => {
    try {
        const response = await get(`/Services/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Services data:', error);
        throw error;
    }
};

export const updateServices = async (id, name, description, price, clinicId) => {
    try {
        const updatedData = { id, name, description, price, clinicId };
        await put(`/Services/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Services', error);
        throw error;
    }
};

export const deleteServices = async (id) => {
    try {
        await del(`/Services/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Services', error);
        throw error;
    }
};
