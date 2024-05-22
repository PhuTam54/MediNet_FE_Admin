import { post } from '~/utils/httpRequest';

export const postLogin = async (email, password) => {
    try {
        const newData = { email, password };
        const response = await post('/LoginRegister/Login', newData);
        return response.data;
    } catch (error) {
        console.error('Error fetching Login data:', error);
        throw new Error('Failed to login. Please check your credentials and try again.');
    }
};



export const postRegister = async (userName, email, password, confirmPassword) => {
    try {
        const newData = { userName, email, password, confirmPassword };
        await post('/LoginRegister/Register/', newData);
    } catch (error) {
        console.error('Failed to create Register', error);
        throw error;
    }
};

export const postForgotPwd = async (email) => {
    try {
        const response = await post(`LoginRegister/ForgotPwd?email=${email}`);
        return response;
    } catch (error) {
        console.error('Error fetching ForgotPwd data:', error);
        throw error;
    }
};

export const postResetPwd = async (userId, pwd, confirmpwd) => {
    try {
        const postData = { userId, pwd, confirmpwd };
        await post(
            `https://localhost:7121/api/v1/LoginRegister/ResetPwd?userId=${userId}&pwd=${pwd}&confirmpwd=${confirmpwd}`,
            postData,
        );
    } catch (error) {
        console.error('Failed to update ResetPwd', error);
        throw error;
    }
};
