import { get, post, put, del } from '~/utils/httpRequest';

export const getStockIns = async () => {
    try {
        const response = await get('/StockIns/');
        return response;
    } catch (error) {
        console.error('Error fetching StockIns data:', error);
        throw error;
    }
};

export const createStockIns = async (
    clinicId,
    productId,
    quantity,
    dateIn,
    supplier,
    manufacturerDate,
    expiryDate,
    // status,
) => {
    try {
        const newData = { clinicId, productId, quantity, dateIn, supplier, manufacturerDate, expiryDate,};
        await post('/StockIns', newData);
    } catch (error) {
        console.error('Failed to create StockIns', error);
        throw error;
    }
};

export const editStockIns = async (id) => {
    try {
        const response = await get(`/StockIns/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching StockIns data:', error);
        throw error;
    }
};

export const updateStockIns = async (
    id,
    clinicId,
    productId,
    quantity,
    dateIn,
    supplier,
    manufacturerDate,
    expiryDate,
    status,
) => {
    try {
        const updatedData = {
            id,
            clinicId,
            productId,
            quantity,
            dateIn,
            supplier,
            manufacturerDate,
            expiryDate,
            status,
        };
        await put(`/StockIns/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update StockIns', error);
        throw error;
    }
};

export const deleteStockIns = async (id) => {
    try {
        await del(`/StockIns/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete StockIns', error);
        throw error;
    }
};
