import { get, post, put, del } from '~/utils/httpRequest';

export const getFeedbacks = async () => {
    try {
        const response = await get('/Feedbacks/');
        return response;
    } catch (error) {
        console.error('Error fetching Feedbacks data:', error);
        throw error;
    }
};

export const createFeedbacks = async (vote, imagesFeedback, imagesSrc, address) => {
    try {
        const newData = {
            vote,
            imagesFeedback,
            imagesSrc,
            address,
        };
        await post(`/Feedbacks`, newData);
    } catch (error) {
        console.error('Failed to create Feedbacks', error);
        throw error;
    }
};

export const editFeedbacks = async (id) => {
    try {
        const response = await get(`/Feedbacks/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Feedbacks data:', error);
        throw error;
    }
};

export const updateFeedbacks = async (id, vote, imagesFeedback, imagesSrc) => {
    try {
        const updatedData = { id, vote, imagesFeedback, imagesSrc };
        const response = await put(`/Feedbacks/id?id=${id}`, updatedData);
        console.log(response);
    } catch (error) {
        console.error('Failed to update Feedbacks', error);
        throw error;
    }
};

export const deleteFeedbacks = async (id) => {
    try {
        await del(`/Feedbacks/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Feedbacks', error);
        throw error;
    }
};
