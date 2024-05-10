import { get, post, put, del } from '~/utils/httpRequest';
import { ToastContainer, toast } from 'react-toastify';

export const getOrders = async () => {
    try {
        const response = await get('/Orders/');
        return response;
    } catch (error) {
        console.error('Error fetching Orders data:', error);
        throw error;
    }
};

export const createOrders = async (
    name,
    email,
    tel,
    address,
    shipping_method,
    payment_method,
    is_paid,
    orderDate,
    status,
    userId,
    cartIds,
) => {
    try {
        const newData = {
            name,
            email,
            tel,
            address,
            shipping_method,
            payment_method,
            is_paid,
            orderDate,
            status,
            userId,
            cartIds,
        };
        await post(`/Orders`, newData);
    } catch (error) {
        console.error('Failed to create Orders', error);
        throw error;
    }
};

export const editOrders = async (id) => {
    try {
        const response = await get(`/Orders/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Orders data:', error);
        throw error;
    }
};

export const updateOrders = async (id, status) => {
    try {
        const updatedData = { id, status };
        const response = await put(`/Orders/id?id=${id}&status=${status}`, updatedData);
        console.log(response);
    } catch (error) {
        console.error('Failed to update Orders', error);
        throw error;
    }
};

export const deleteOrders = async (id) => {
    try {
        await del(`/Orders/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Orders', error);
        throw error;
    }
};
