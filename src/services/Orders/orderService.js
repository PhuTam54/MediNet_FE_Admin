import { get, post, put, del } from '~/utils/httpRequest';

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
    order_Code,
    total,
    discount_Amount,
    discount_Code,
    final_Total,
    status,
    payment_Method,
    is_Paid,
    qR_Code,
    user_Id,
    show_Id,
    orderFoods,
    tickets,
) => {
    try {
        const newData = {
            order_Code,
            total,
            discount_Amount,
            discount_Code,
            final_Total,
            status,
            payment_Method,
            is_Paid,
            qR_Code,
            user_Id,
            show_Id,
            orderFoods,
            tickets,
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

export const updateOrders = async (
    id,
    order_Code,
    total,
    discount_Amount,
    discount_Code,
    final_Total,
    status,
    payment_Method,
    is_Paid,
    qR_Code,
    user_Id,
    show_Id,
    orderFoods,
    tickets,
) => {
    try {
        const updatedData = {
            id,
            order_Code,
            total,
            discount_Amount,
            discount_Code,
            final_Total,
            status,
            payment_Method,
            is_Paid,
            qR_Code,
            user_Id,
            show_Id,
            orderFoods,
            tickets,
        };
        await put(`/Orders/id?id=${id}`, updatedData);
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
