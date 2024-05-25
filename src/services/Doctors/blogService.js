import { get, post, put, del } from '~/utils/httpRequest';

export const getBlogs = async () => {
    try {
        const response = await get('/Blogs/');
        return response;
    } catch (error) {
        console.error('Error fetching Blogs data:', error);
        throw error;
    }
};

export const createBlogs = async (title, content, status, employeeId, diseaseId, imageFile) => {
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('status', status);
        formData.append('employeeId', employeeId);
        formData.append('diseaseId', diseaseId);
        formData.append('imageFile', imageFile);

        await post('/Blogs', formData);
    } catch (error) {
        console.error('Failed to create Blogs', error);
        throw error;
    }
};

export const editBlogs = async (id) => {
    try {
        const response = await get(`/Blogs/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Blogs data:', error);
        throw error;
    }
};

export const updateBlogs = async (id, title, content, status, employeeId, diseaseId, imageFile) => {
    try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('status', status);
        formData.append('employeeId', employeeId);
        formData.append('diseaseId', diseaseId);
        formData.append('imageFile', imageFile);
        await put(`/Blogs/id?id=${id}`, formData);
    } catch (error) {
        console.error('Failed to update Blogs', error);
        throw error;
    }
};

export const deleteBlogs = async (id) => {
    try {
        await del(`/Blogs/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Blogs', error);
        throw error;
    }
};
