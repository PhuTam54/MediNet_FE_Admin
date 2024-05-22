import { get, post, put, del } from '~/utils/httpRequest';

export const getProduct = async () => {
    try {
        const response = await get('/Products/');
        return response;
    } catch (error) {
        console.error('Error fetching Product data:', error);
        throw error;
    }
};

export const getProductDetails = async (id) => {
    try {
        const response = await get(`/Products/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Product data:', error);
        throw error;
    }
};

export const createProduct = async (
    categoryChildId,
    name,
    description,
    price,
    manufacturer,
    manufacturerDate,
    expiryDate,
    imageFile,
) => {
    try {
        const formData = new FormData();
        formData.append('categoryChildId', categoryChildId);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('manufacturer', manufacturer);
        formData.append('manufacturerDate', manufacturerDate);
        formData.append('expiryDate', expiryDate);
        formData.append('imageFile', imageFile);

        await post('/Products', formData);
    } catch (error) {
        console.error('Failed to create Product', error);
        throw error;
    }
};

export const editProduct = async (id) => {
    try {
        const response = await get(`/Products/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Product data:', error);
        throw error;
    }
};

export const updateProduct = async (
    id,
    categoryChildId,
    name,
    description,
    price,
    manufacturer,
    manufacturerDate,
    expiryDate,
    imageFile,
) => {
    try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('categoryChildId', categoryChildId);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('manufacturer', manufacturer);
        formData.append('manufacturerDate', manufacturerDate);
        formData.append('expiryDate', expiryDate);
        formData.append('imageFile', imageFile);

        await put(`/Products/id?id=${id}`, formData);
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
