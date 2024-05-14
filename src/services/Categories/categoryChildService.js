import { get, post, put, del } from '~/utils/httpRequest';

export const getCategoryChilds = async () => {
    try {
        const response = await get('/CategoryChilds/');
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const createCategoryChilds = async (name, categoryId) => {
    try {
        const newData = { name, categoryId };
        await post('/CategoryChilds', newData);
    } catch (error) {
        console.error('Failed to create category', error);
        throw error;
    }
};

export const editCategoryChilds = async (id) => {
    try {
        const response = await get(`/CategoryChilds/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const updateCategoryChilds = async (id, name, categoryId) => {
    try {
        const updatedData = { id, name, categoryId };
        await put(`/CategoryChilds/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update category', error);
        throw error;
    }
};

export const deleteCategoryChilds = async (id) => {
    try {
        await del(`/CategoryChilds/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete category', error);
        throw error;
    }
};
