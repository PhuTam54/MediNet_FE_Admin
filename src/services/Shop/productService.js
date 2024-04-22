import { get, post, put, del } from '~/utils/httpRequest';

export const getProductData = async () => {
    try {
        const response = await get('/Products/');
        return response;
    } catch (error) {
        console.error('Error fetching Product data:', error);
        throw error;
    }
};

export const createProduct = async (shop_Id, name, image, price, description) => {
    try {
        const createData = { shop_Id, name, image, price, description };
        await post(`/Products?shopId=${shop_Id}`, createData);
    } catch (error) {
        console.error('Failed to create Product', error);
        throw error;
    }
};

export const editProductData = async (id) => {
    try {
        const response = await get(`/Products/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Product data:', error);
        throw error;
    }
};

export const updateProduct = async (id, shop_Id, name, image, price, description) => {
    try {
        const updatedData = { id, shop_Id, name, image, price, description };
        await put(`/Products/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Product', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        await del(`/Products/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Product', error);
        throw error;
    }
};
