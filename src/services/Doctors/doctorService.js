import { get, post, put, del } from '~/utils/httpRequest';

export const getDoctors = async () => {
    try {
        const response = await get('/Doctors/');
        return response;
    } catch (error) {
        console.error('Error fetching Doctors data:', error);
        throw error;
    }
};

export const createDoctors = async (
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

        await post(`/Doctors`, formData);
    } catch (error) {
        console.error('Failed to create Doctors', error);
        throw error;
    }
};

export const editDoctors = async (id) => {
    try {
        const response = await get(`/Doctors/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Doctors data:', error);
        throw error;
    }
};

export const updateDoctors = async (
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

        await put(`/Doctors/id?id=${id}`, formData);
    } catch (error) {
        console.error('Failed to update Doctors', error);
        throw error;
    }
};

export const deleteDoctors = async (id) => {
    try {
        await del(`/Doctors/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Doctors', error);
        throw error;
    }
};
