import { get, post, put, del } from '~/utils/httpRequest';

export const getCourses = async () => {
    try {
        const response = await get('/Courses/');
        return response;
    } catch (error) {
        console.error('Error fetching Courses data:', error);
        throw error;
    }
};

export const createCourses = async (
    title,
    price,
    description,
    duration,
    location,
    topics,
    targetAudience,
    skillCovered,
    medicineSalesTraining,
    medicalExaminationTraining,
    employeeId,
) => {
    try {
        const newData = {
            title,
            price,
            description,
            duration,
            location,
            topics,
            targetAudience,
            skillCovered,
            medicineSalesTraining,
            medicalExaminationTraining,
            employeeId,
        };
        await post('/Courses', newData);
    } catch (error) {
        console.error('Failed to create Courses', error);
        throw error;
    }
};

export const editCourses = async (id) => {
    try {
        const response = await get(`/Courses/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Courses data:', error);
        throw error;
    }
};

export const updateCourses = async (
    id,
    title,
    price,
    description,
    duration,
    location,
    topics,
    targetAudience,
    skillCovered,
    medicineSalesTraining,
    medicalExaminationTraining,
    employeeId,
) => {
    try {
        const updatedData = {
            id,
            title,
            price,
            description,
            duration,
            location,
            topics,
            targetAudience,
            skillCovered,
            medicineSalesTraining,
            medicalExaminationTraining,
            employeeId,
        };
        await put(`/Courses/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Courses', error);
        throw error;
    }
};

export const deleteCourses = async (id) => {
    try {
        await del(`/Courses/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Courses', error);
        throw error;
    }
};
