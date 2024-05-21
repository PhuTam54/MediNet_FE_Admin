import { get, post, put, del } from '~/utils/httpRequest';

export const getInStocks = async () => {
    try {
        const response = await get('/InStocks/');
        return response;
    } catch (error) {
        console.error('Error fetching InStocks data:', error);
        throw error;
    }
};

export const createInStocks = async (clinicId, productId, stockQuantity) => {
    try {
        const newData = { clinicId, productId, stockQuantity };
        await post('/InStocks', newData);
    } catch (error) {
        console.error('Failed to create InStocks', error);
        throw error;
    }
};

export const editInStocks = async (id) => {
    try {
        const response = await get(`/InStocks/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching InStocks data:', error);
        throw error;
    }
};

export const updateInStocks = async (id, clinicId, productId, stockQuantity) => {
    try {
        const updatedData = { id, clinicId, productId, stockQuantity };
        await put(`/InStocks/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update InStocks', error);
        throw error;
    }
};

export const deleteInStocks = async (id) => {
    try {
        await del(`/InStocks/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete InStocks', error);
        throw error;
    }
};
