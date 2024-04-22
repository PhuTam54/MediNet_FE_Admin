import { get, post, put, del } from '~/utils/httpRequest';

export const getMoviesData = async () => {
    try {
        const response = await get('/Movies/');
        return response;
    } catch (error) {
        console.error('Error fetching Movies data:', error);
        throw error;
    }
};

export const createMovies = async (
    title,
    actor,
    movie_Image,
    cover_Image,
    description,
    duration,
    director,
    favorite_Count,
    trailer,
    // genreIds,
    // languageIds,
) => {
    try {
        const createData = {
            title,
            actor,
            movie_Image,
            cover_Image,
            description,
            duration,
            director,
            favorite_Count,
            trailer,
            // genreIds,
            // languageIds,
        };
        await post(`v1/Movies`, createData);
    } catch (error) {
        console.error('Failed to create Movies', error);
        throw error;
    }
};

export const editMovies = async (id) => {
    try {
        const response = await get(`/Movies/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Movies data:', error);
        throw error;
    }
};

export const updateMovies = async (
    id,
    title,
    actor,
    movie_Image,
    cover_Image,
    description,
    duration,
    director,
    favorite_Count,
    trailer,
    // genreIds,
    // languageIds,
) => {
    try {
        const updatedData = {
            id,
            title,
            actor,
            movie_Image,
            cover_Image,
            description,
            duration,
            director,
            favorite_Count,
            trailer,
            // genreIds,
            // languageIds,
        };
        await put(`/Movies/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Movies', error);
        throw error;
    }
};

export const deleteMovies = async (id) => {
    try {
        await del(`/Movies/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Movies', error);
        throw error;
    }
};
