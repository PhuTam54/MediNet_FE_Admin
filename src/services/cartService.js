import { get, post, put, del } from '~/utils/httpRequest';

export const getCarts = async () => {
    try {
        const response = await get('/Carts/');
        return response;
    } catch (error) {
        console.error('Error fetching Carts data:', error);
        throw error;
    }
};

export const createCarts = async ( qtyCart, productID, userID) => {
    try {
        const newData = {  qtyCart, productID, userID };
        await post('/Carts', newData);
    } catch (error) {
        console.error('Failed to create Carts', error);
        throw error;
    }
};

export const editCarts = async (id) => {
    try {
        const response = await get(`/Carts/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Carts data:', error);
        throw error;
    }
};

export const updateCarts = async (id, qtyCart, productID, userID) => {
    try {
        const updatedData = { id, qtyCart, productID, userID };
        await put(`/Carts/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Carts', error);
        throw error;
    }
};

export const deleteCarts = async (id) => {
    try {
        await del(`/Carts/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Carts', error);
        throw error;
    }
};
