import { get, post, put, del } from '~/utils/httpRequest';

export const getEnrollments = async () => {
    try {
        const response = await get('/Enrollments/');
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const createEnrollments = async (courseId, employeeId) => {
    try {
        const newData = { courseId, employeeId };
        await post('/Enrollments', newData);
    } catch (error) {
        console.error('Failed to create category', error);
        throw error;
    }
};

export const editEnrollments = async (id) => {
    try {
        const response = await get(`/Enrollments/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export const updateEnrollments = async (id, courseId, employeeId) => {
    try {
        const updatedData = { id, courseId, employeeId };
        await put(`/Enrollments/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update category', error);
        throw error;
    }
};

export const deleteEnrollments = async (id) => {
    try {
        await del(`/Enrollments/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete category', error);
        throw error;
    }
};
