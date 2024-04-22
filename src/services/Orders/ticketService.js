import { get, post, put, del } from '~/utils/httpRequest';

export const getOrderTicket = async () => {
    try {
        const response = await get('/OrderTicket/');
        return response;
    } catch (error) {
        console.error('Error fetching OrderTicket data:', error);
        throw error;
    }
};

export const createOrderTicket = async (code, price, is_Used, order_Id, seat_Id) => {
    try {
        const newData = { code, price, is_Used, order_Id, seat_Id };
        await post(`/OrderTicket`, newData);
    } catch (error) {
        console.error('Failed to create OrderTicket', error);
        throw error;
    }
};

export const editOrderTicket = async (id) => {
    try {
        const response = await get(`/OrderTicket/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching OrderTicket data:', error);
        throw error;
    }
};

export const updateOrderTicket = async (id, code, price, is_Used, order_Id, seat_Id) => {
    try {
        const updatedData = { id, code, price, is_Used, order_Id, seat_Id };
        await put(`/OrderTicket/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update OrderTicket', error);
        throw error;
    }
};

export const deleteOrderTicket = async (id) => {
    try {
        await del(`/OrderTicket/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete OrderTicket', error);
        throw error;
    }
};
