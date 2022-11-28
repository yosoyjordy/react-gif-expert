const API_KEY = '2A0CVEwlhE8V60n1QJTHOCKqk3n51YGV';
const LIMIT = 10;

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${LIMIT}`

    const resp = await fetch(url);
    const {
        data
    } = await resp.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
}