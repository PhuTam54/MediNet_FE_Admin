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
    imagesCourseFile,
) => {
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('duration', duration);
        formData.append('location', location);
        formData.append('topics', topics);
        formData.append('targetAudience', targetAudience);
        formData.append('skillCovered', skillCovered);
        formData.append('medicineSalesTraining', medicineSalesTraining);
        formData.append('medicalExaminationTraining', medicalExaminationTraining);
        formData.append('employeeId', employeeId);
        formData.append('imagesCourseFile', imagesCourseFile);

        await post('/Courses', formData);
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
    imagesCourseFile,
) => {
    try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('duration', duration);
        formData.append('location', location);
        formData.append('topics', topics);
        formData.append('targetAudience', targetAudience);
        formData.append('skillCovered', skillCovered);
        formData.append('medicineSalesTraining', medicineSalesTraining);
        formData.append('medicalExaminationTraining', medicalExaminationTraining);
        formData.append('employeeId', employeeId);
        formData.append('imagesCourseFile', imagesCourseFile);
        await put(`/Courses/id?id=${id}`, formData);
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
