import { get, post, put, del } from '~/utils/httpRequest';

export const getProductDetails = async (productId) => {
    try {
        const response = await get(`/ProductDetails/`);
        return response;
    } catch (error) {
        console.error('Error fetching ProductDetails data:', error);
        throw error;
    }
};

export const createProductDetails = async (
    ingredient,
    usage,
    usageInstructions,
    description,
    sideEffects,
    precautions,
    storage,
    productId,
    imagesProductDetailFile,
) => {
    try {
        const formData = new FormData();
        formData.append('ingredient', ingredient);
        formData.append('usage', usage);
        formData.append('usageInstructions', usageInstructions);
        formData.append('description', description);
        formData.append('sideEffects', sideEffects);
        formData.append('precautions', precautions);
        formData.append('storage', storage);
        formData.append('productId', productId);

        if (imagesProductDetailFile !== null) {
            for (let i = 0; i < imagesProductDetailFile.length; i++) {
                formData.append('imagesProductDetailFile', imagesProductDetailFile[i]);
            }
        }
        await post('/ProductDetails', formData);
    } catch (error) {
        console.error('Failed to create ProductDetails', error);
        throw error;
    }
};

export const editProductDetails = async (id) => {
    try {
        const response = await get(`/ProductDetails/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching ProductDetails data:', error);
        throw error;
    }
};

export const updateProductDetails = async (
    id,
    ingredient,
    usage,
    usageInstructions,
    description,
    sideEffects,
    precautions,
    storage,
    productId,
    imagesProductDetailFile,
) => {
    try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('ingredient', ingredient);
        formData.append('usage', usage);
        formData.append('usageInstructions', usageInstructions);
        formData.append('description', description);
        formData.append('sideEffects', sideEffects);
        formData.append('precautions', precautions);
        formData.append('storage', storage);
        formData.append('productId', productId);

        if (imagesProductDetailFile !== null) {
            for (let i = 0; i < imagesProductDetailFile.length; i++) {
                formData.append('imagesProductDetailFile', imagesProductDetailFile[i]);
            }
        }
        await put(`/ProductDetails/id?id=${id}`, formData);
    } catch (error) {
        console.error('Failed to update ProductDetails', error);
        throw error;
    }
};

export const deleteProductDetails = async (id) => {
    try {
        await del(`/ProductDetails/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete ProductDetails', error);
        throw error;
    }
};
