import { get, post, put, del } from '~/utils/httpRequest';

export const getSeatReservations = async () => {
    try {
        const response = await get('/v1/SeatReservations/');
        return response;
    } catch (error) {
        console.error('Error fetching SeatReservations data:', error);
        throw error;
    }
};

export const createSeatReservations = async (reservation_Expires_At, seat_Id) => {
    try {
        const newData = { reservation_Expires_At, seat_Id };
        await post('/v1/SeatReservations', newData);
    } catch (error) {
        console.error('Failed to create SeatReservations', error);
        throw error;
    }
};

export const editSeatReservations = async (id) => {
    try {
        const response = await get(`/v1/SeatReservations/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching SeatReservations data:', error);
        throw error;
    }
};

export const updateSeatReservations = async (id, reservation_Expires_At, seat_Id) => {
    try {
        const updatedData = { id, reservation_Expires_At, seat_Id };
        await put(`/v1/SeatReservations/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update SeatReservations', error);
        throw error;
    }
};

export const deleteSeatReservations = async (id) => {
    try {
        await del(`/v1/SeatReservations/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete SeatReservations', error);
        throw error;
    }
};