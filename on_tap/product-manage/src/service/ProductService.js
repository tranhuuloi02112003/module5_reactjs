import axios from "axios";

const URL_API = " http://localhost:8080/products";

export const findAllProduct = async () => {
    try {
        const result = await axios.get(URL_API);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const saveProduct = async (item) => {
    try {
        const result = await axios.post(URL_API, item);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const findByIdProduct = async (id) => {
    try {
        const result = await axios.get(URL_API + "/" + id)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const updateProduct = async (id, item) => {
    try {
        const result = await axios.put(URL_API + "/" + id, item)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export const deleteProduct = async (id) => {
    try {
        const result = await axios.delete(URL_API + "/" + id)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const search = (products, s) => {
    return products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) || item.quantity.includes(s));
}

