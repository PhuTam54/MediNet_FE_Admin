import { get, post, put, del } from '~/utils/httpRequest';

export const getCustomers = async () => {
    try {
        const response = await get('/Customers/');
        return response;
    } catch (error) {
        console.error('Error fetching Customers data:', error);
        throw error;
    }
};

export const createCustomers = async (
    fullName,
    username,
    email,
    birthDay,
    phone_Number,
    password,
    role,
    status,
    address,
) => {
    try {
        const createData = { fullName, username, email, birthDay, phone_Number, password, role, status, address };
        await post(`/Customers`, createData);
    } catch (error) {
        console.error('Failed to create Customers', error);
        throw error;
    }
};

export const editCustomers = async (id) => {
    try {
        const response = await get(`/Customers/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Customers data:', error);
        throw error;
    }
};

export const updateCustomers = async (
    id,
    fullName,
    username,
    email,
    birthDay,
    phone_Number,
    password,
    role,
    status,
    address,
) => {
    try {
        const updatedData = { id, fullName, username, email, birthDay, phone_Number, password, role, status, address };
        await put(`/Customers/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Customers', error);
        throw error;
    }
};

export const deleteCustomers = async (id) => {
    try {
        await del(`/Customers/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Customers', error);
        throw error;
    }
};
