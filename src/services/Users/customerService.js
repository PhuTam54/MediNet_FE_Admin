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

export const createCustomers = async (username, email, date_Of_Birth, phoneNumber, password, imageFile, address) => {
    try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('date_Of_Birth', date_Of_Birth);
        formData.append('phoneNumber', phoneNumber);
        formData.append('password', password);
        formData.append('imageFile', imageFile);
        formData.append('address', address);

        await post(`/Customers`, formData);
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
    username,
    email,
    date_Of_Birth,
    phoneNumber,
    password,
    imageFile,
    address,
) => {
    try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('date_Of_Birth', date_Of_Birth);
        formData.append('phoneNumber', phoneNumber);
        formData.append('password', password);
        formData.append('imageFile', imageFile);
        formData.append('address', address);

        await put(`/Customers/id?id=${id}`, formData);
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
