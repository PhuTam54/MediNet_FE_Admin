import { get, post, put, del } from '~/utils/httpRequest';

export const getCategoryParents = async () => {
    try {
        const response = await get('/CategoryParents/');
        return response;
    } catch (error) {
        console.error('Error fetching CategoryParents data:', error);
        throw error;
    }
};

export const createCategoryParents = async (name) => {
    try {
        const newData = { name };
        await post('/CategoryParents', newData);
    } catch (error) {
        console.error('Failed to create CategoryParents', error);
        throw error;
    }
};

export const editCategoryParents = async (id) => {
    try {
        const response = await get(`/CategoryParents/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching CategoryParents data:', error);
        throw error;
    }
};

export const updateCategoryParents = async (id, name) => {
    try {
        const updatedData = { id, name };
        await put(`/CategoryParents/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update CategoryParents', error);
        throw error;
    }
};

export const deleteCategoryParents = async (id) => {
    try {
        await del(`/CategoryParents/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete CategoryParents', error);
        throw error;
    }
};
