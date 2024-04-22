import { get, post, put, del } from '~/utils/httpRequest';

export const getShops = async () => {
    try {
        const response = await get('/Shops/');
        return response;
    } catch (error) {
        console.error('Error fetching Shops data:', error);
        throw error;
    }
};

export const createShops = async (category_Id, floor_Id, name, image, address, phone_Number, description) => {
    try {
        const createData = { category_Id, floor_Id, name, image, address, phone_Number, description };
        await post(`v1/Shops?categoryId=${category_Id}&floorId=${floor_Id}`, createData);
    } catch (error) {
        console.error('Failed to create Shops', error);
        throw error;
    }
};

export const editShops = async (id) => {
    try {
        const response = await get(`/Shops/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Shops data:', error);
        throw error;
    }
};

export const updateShops = async (id, floor_Id, category_Id, name, image, address, phone_Number, description) => {
    try {
        const updatedData = { id, floor_Id, category_Id, name, image, address, phone_Number, description };
        await put(`/Shops/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Shops', error);
        throw error;
    }
};

export const deleteShops = async (id) => {
    try {
        await del(`/Shops/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Shops', error);
        throw error;
    }
};
