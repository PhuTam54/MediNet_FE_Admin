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

export const createAdmins = async (username, email, password, imageFile) => {
    try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('imageFile', imageFile);

        await post(`/Admins`, formData);
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

export const updateAdmins = async (id, username, email, password, image, imageFile, imageSrc) => {
    try {
        const updatedData = { id, username, email, password, image, imageFile, imageSrc };
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
