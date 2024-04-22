import { get, post, put, del } from '~/utils/httpRequest';

export const getOrderFood = async () => {
    try {
        const response = await get('/OrderFood/');
        return response;
    } catch (error) {
        console.error('Error fetching OrderFood data:', error);
        throw error;
    }
};

export const createOrderFood = async (qty, price, food_Id) => {
    try {
        const newData = { qty, price, food_Id };
        await post(`/OrderFood`, newData);
    } catch (error) {
        console.error('Failed to create OrderFood', error);
        throw error;
    }
};

export const editOrderFood = async (id) => {
    try {
        const response = await get(`/OrderFood/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching OrderFood data:', error);
        throw error;
    }
};

export const updateOrderFood = async (id, qty, price, food_Id) => {
    try {
        const updatedData = { id, qty, price, food_Id };
        await put(`/OrderFood/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update OrderFood', error);
        throw error;
    }
};

export const deleteOrderFood = async (id) => {
    try {
        await del(`/OrderFood/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete OrderFood', error);
        throw error;
    }
};
