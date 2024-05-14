import { get, post, put, del } from '~/utils/httpRequest';

export const getSpecialists = async () => {
    try {
        const response = await get('/Specialists/');
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const createSpecialists = async (name, description) => {
    try {
        const newData = { name, description };
        await post('/Specialists', newData);
    } catch (error) {
        console.error('Failed to create category', error);
        throw error;
    }
};

export const editSpecialists = async (id) => {
    try {
        const response = await get(`/Specialists/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const updateSpecialists = async (id, name, description) => {
    try {
        const updatedData = { id, name, description };
        await put(`/Specialists/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update category', error);
        throw error;
    }
};

export const deleteSpecialists = async (id) => {
    try {
        await del(`/Specialists/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete category', error);
        throw error;
    }
};
