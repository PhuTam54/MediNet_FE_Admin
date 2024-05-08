import { get, post, put, del } from '~/utils/httpRequest';

export const getSupplies = async () => {
    try {
        const response = await get('/Supplies/');
        return response;
    } catch (error) {
        console.error('Error fetching Supplies data:', error);
        throw error;
    }
};

export const createSupplies = async (clinicId, productId, stockQuantity) => {
    try {
        const newData = { clinicId, productId, stockQuantity };
        await post('/Supplies', newData);
    } catch (error) {
        console.error('Failed to create Supplies', error);
        throw error;
    }
};

export const editSupplies = async (id) => {
    try {
        const response = await get(`/Supplies/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Supplies data:', error);
        throw error;
    }
};

export const updateSupplies = async (id, clinicId, productId, stockQuantity) => {
    try {
        const updatedData = { id, clinicId, productId, stockQuantity };
        await put(`/Supplies/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Supplies', error);
        throw error;
    }
};

export const deleteSupplies = async (id) => {
    try {
        await del(`/Supplies/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Supplies', error);
        throw error;
    }
};
