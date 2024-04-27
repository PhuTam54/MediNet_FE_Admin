import { get, post, put, del } from '~/utils/httpRequest';

export const getCategory = async () => {
    try {
        const response = await get('/Categories/');
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const createCategory = async (name,) => {
    try {
        const newData = { name, };
        await post('/Categories', newData);
    } catch (error) {
        console.error('Failed to create category', error);
        throw error;
    }
};

export const editCategory = async (id) => {
    try {
        const response = await get(`/Categories/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const updateCategory = async (id, name,) => {
    try {
        const updatedData = { id, name, };
        await put(`/Categories/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update category', error);
        throw error;
    }
};

export const deleteCategory = async (id) => {
    try {
        await del(`/Categories/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete category', error);
        throw error;
    }
};
