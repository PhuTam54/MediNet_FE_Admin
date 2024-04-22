import { get, post, put, del } from '~/utils/httpRequest';

export const getRooms = async () => {
    try {
        const response = await get('/Rooms/');
        return response;
    } catch (error) {
        console.error('Error fetching Rooms data:', error);
        throw error;
    }
};

export const createRooms = async (name, slug, rows, columns) => {
    try {
        const newData = { name, slug, rows, columns };
        await post('/Rooms', newData);
    } catch (error) {
        console.error('Failed to create Rooms', error);
        throw error;
    }
};

export const editRooms = async (id) => {
    try {
        const response = await get(`/Rooms/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Rooms data:', error);
        throw error;
    }
};

export const updateRooms = async (id, name, slug, rows, columns) => {
    try {
        const updatedData = { id, name, slug, rows, columns };
        await put(`/Rooms/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Rooms', error);
        throw error;
    }
};

export const deleteRooms = async (id) => {
    try {
        await del(`/Rooms/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Rooms', error);
        throw error;
    }
};
