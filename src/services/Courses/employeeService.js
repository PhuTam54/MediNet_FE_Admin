import { get, post, put, del } from '~/utils/httpRequest';

export const getEmployees = async () => {
    try {
        const response = await get('/Employees/');
        return response;
    } catch (error) {
        console.error('Error fetching Employees data:', error);
        throw error;
    }
};

export const createEmployees = async (
    full_Name,
    address,
    date_Of_Birth,
    phoneNumber,
    specialistId,
    username,
    email,
    password,
    clinicId,
    imageFile,
) => {
    try {
        const formData = new FormData();
        formData.append('full_Name', full_Name);
        formData.append('address', address);
        formData.append('date_Of_Birth', date_Of_Birth);
        formData.append('phoneNumber', phoneNumber);
        formData.append('specialistId', specialistId);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('clinicId', clinicId);
        formData.append('imageFile', imageFile);

        await post(`/Employees`, formData);
    } catch (error) {
        console.error('Failed to create Employees', error);
        throw error;
    }
};

export const editEmployees = async (id) => {
    try {
        const response = await get(`/Employees/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Employees data:', error);
        throw error;
    }
};

export const updateEmployees = async (
    id,
    full_Name,
    address,
    date_Of_Birth,
    phoneNumber,
    specialistId,
    username,
    email,
    password,
    clinicId,
    imageFile,
) => {
    try {
        const formData = new FormData();
        formData.append('full_Name', full_Name);
        formData.append('address', address);
        formData.append('date_Of_Birth', date_Of_Birth);
        formData.append('phoneNumber', phoneNumber);
        formData.append('specialistId', specialistId);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('clinicId', clinicId);
        formData.append('imageFile', imageFile);

        await put(`/Employees/id?id=${id}`, formData);
    } catch (error) {
        console.error('Failed to update Employees', error);
        throw error;
    }
};

export const deleteEmployees = async (id) => {
    try {
        await del(`/Employees/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Employees', error);
        throw error;
    }
};
