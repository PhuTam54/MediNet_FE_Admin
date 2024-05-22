import { get, post, put, del } from '~/utils/httpRequest';

export const getFavoriteProducts = async () => {
    try {
        const response = await get('/FavoriteProducts/');
        return response;
    } catch (error) {
        console.error('Error fetching FavoriteProducts data:', error);
        throw error;
    }
};

export const createFavoriteProducts = async (customerId, productId) => {
    try {
        const newData = { customerId, productId };
        await post('/FavoriteProducts', newData);
    } catch (error) {
        console.error('Failed to create FavoriteProducts', error);
        throw error;
    }
};

export const editFavoriteProducts = async (id) => {
    try {
        const response = await get(`/FavoriteProducts/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching FavoriteProducts data:', error);
        throw error;
    }
};

export const updateFavoriteProducts = async (id, customerId, productId) => {
    try {
        const updatedData = { id, customerId, productId };
        await put(`/FavoriteProducts/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update FavoriteProducts', error);
        throw error;
    }
};

export const deleteFavoriteProducts = async (id) => {
    try {
        await del(`/FavoriteProducts/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete FavoriteProducts', error);
        throw error;
    }
};
