import { get, post, put, del } from '~/utils/httpRequest';

export const getDiseases = async () => {
    try {
        const response = await get('/Diseases/');
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const createDiseases = async (name, description) => {
    try {
        const newData = { name, description };
        await post('/Diseases', newData);
    } catch (error) {
        console.error('Failed to create category', error);
        throw error;
    }
};

export const editDiseases = async (id) => {
    try {
        const response = await get(`/Diseases/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const updateDiseases = async (id, name, description) => {
    try {
        const updatedData = { id, name, description };
        await put(`/Diseases/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update category', error);
        throw error;
    }
};

export const deleteDiseases = async (id) => {
    try {
        await del(`/Diseases/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete category', error);
        throw error;
    }
};
