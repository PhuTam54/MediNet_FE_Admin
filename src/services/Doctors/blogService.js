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

export const createBlogs = async (title, content, employeeId, diseaseId) => {
    try {
        const newData = { title, content, employeeId, diseaseId };
        await post('/Blogs', newData);
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

export const updateBlogs = async (id, title, content, employeeId, diseaseId) => {
    try {
        const updatedData = { id, title, content, employeeId, diseaseId };
        await put(`/Blogs/id?id=${id}`, updatedData);
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
