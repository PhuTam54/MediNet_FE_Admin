import { get, post, put, del } from '~/utils/httpRequest';

export const getGenres = async () => {
    try {
        const response = await get('/Genres/');
        return response;
    } catch (error) {
        console.error('Error fetching Genres data:', error);
        throw error;
    }
};

export const createGenres = async (name, slug) => {
    try {
        const newData = { name, slug };
        await post('/Genres', newData);
    } catch (error) {
        console.error('Failed to create Genres', error);
        throw error;
    }
};

export const editGenres = async (id) => {
    try {
        const response = await get(`/Genres/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Genres data:', error);
        throw error;
    }
};

export const updateGenres = async (id, name, slug) => {
    try {
        const updatedData = { id, name, slug };
        await put(`/Genres/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Genres', error);
        throw error;
    }
};

export const deleteGenres = async (id) => {
    try {
        await del(`/Genres/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Genres', error);
        throw error;
    }
};
