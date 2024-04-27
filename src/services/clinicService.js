import { get, post, put, del } from '~/utils/httpRequest';

export const getClinics = async () => {
    try {
        const response = await get('/Clinics/');
        return response;
    } catch (error) {
        console.error('Error fetching Clinics data:', error);
        throw error;
    }
};

export const createClinics = async ( name, email, phone, address) => {
    try {
        const newData = {  name, email, phone, address };
        await post('/Clinics', newData);
    } catch (error) {
        console.error('Failed to create Clinics', error);
        throw error;
    }
};

export const editClinics = async (id) => {
    try {
        const response = await get(`/Clinics/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Clinics data:', error);
        throw error;
    }
};

export const updateClinics = async (id, name, email, phone, address) => {
    try {
        const updatedData = { id, name, email, phone, address };
        await put(`/Clinics/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Clinics', error);
        throw error;
    }
};

export const deleteClinics = async (id) => {
    try {
        await del(`/Clinics/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Clinics', error);
        throw error;
    }
};
