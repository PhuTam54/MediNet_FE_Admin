import { get, post, put, del } from '~/utils/httpRequest';

export const getCategoryData = async () => {
    try {
        const response = await get('/Categories/');
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const createCategory = async (name, slug) => {
    try {
        const newData = { name, slug };
        await post('/Categories', newData);
    } catch (error) {
        console.error('Failed to create category', error);
        throw error;
    }
};

export const editCategoryData = async (id) => {
    try {
        const response = await get(`/Categories/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const updateCategory = async (id, name, slug) => {
    try {
        const updatedData = { id, name, slug };
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
