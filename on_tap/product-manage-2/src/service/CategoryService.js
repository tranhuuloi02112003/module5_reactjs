import axios from "axios";

const URL_API = " http://localhost:8080/categories";

export const findAll = async () => {
    try {
        const result = await axios.get(URL_API);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(URL_API + "/" + id)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const findByName = async (name) => {
    try {
        const result = await axios.get(URL_API + "?name=" + name)
        console.log(result)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}



