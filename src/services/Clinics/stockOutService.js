import { get, post, put, del } from '~/utils/httpRequest';

export const getStockOuts = async () => {
    try {
        const response = await get('/StockOuts/');
        return response;
    } catch (error) {
        console.error('Error fetching StockOuts data:', error);
        throw error;
    }
};

export const createStockOuts = async (clinicId, productId, quantity, dateOut, reason) => {
    try {
        const newData = { clinicId, productId, quantity, dateOut, reason };
        await post('/StockOuts', newData);
    } catch (error) {
        console.error('Failed to create StockOuts', error);
        throw error;
    }
};

export const editStockOuts = async (id) => {
    try {
        const response = await get(`/StockOuts/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching StockOuts data:', error);
        throw error;
    }
};

export const updateStockOuts = async (id, clinicId, productId, quantity, dateOut, reason) => {
    try {
        const updatedData = { id, clinicId, productId, quantity, dateOut, reason };
        await put(`/StockOuts/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update StockOuts', error);
        throw error;
    }
};

export const deleteStockOuts = async (id) => {
    try {
        await del(`/StockOuts/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete StockOuts', error);
        throw error;
    }
};
