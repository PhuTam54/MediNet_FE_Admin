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
    username,
    email,
    password,
    gender,
    image,
    imageFile,
    address,
    phoneNumber,
    date_Of_Birth,
) => {
    try {
        const createData = {
            username,
            email,
            password,
            gender,
            image,
            imageFile,
            address,
            phoneNumber,
            date_Of_Birth,
        };
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
    address,
    phoneNumber,
    date_Of_Birth,
    id,
    username,
    email,
    password,
    gender,
    image,
    imageFile,
) => {
    try {
        const updatedData = {
            address,
            phoneNumber,
            date_Of_Birth,
            id,
            username,
            email,
            password,
            gender,
            image,
            imageFile,
        };
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
