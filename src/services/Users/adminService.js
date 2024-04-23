import { get, post, put, del } from '~/utils/httpRequest';

export const getAdmins = async () => {
    try {
        const response = await get('/Admins/');
        return response;
    } catch (error) {
        console.error('Error fetching Admins data:', error);
        throw error;
    }
};

export const createAdmins = async (username, email, password, role, status) => {
    try {
        const createData = { username, email, password, role, status };
        await post(`/Admins`, createData);
    } catch (error) {
        console.error('Failed to create Admins', error);
        throw error;
    }
};

export const editAdmins = async (id) => {
    try {
        const response = await get(`/Admins/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Admins data:', error);
        throw error;
    }
};

export const updateAdmins = async (id, username, email, password, role, status) => {
    try {
        const updatedData = { id, username, email, password, role, status };
        await put(`/Admins/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Admins', error);
        throw error;
    }
};

export const deleteAdmins = async (id) => {
    try {
        await del(`/Admins/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Admins', error);
        throw error;
    }
};
