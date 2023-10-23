import axios from "axios";

const URL_API = " http://localhost:8080/categories";

export const findAllCategory = async () => {
    try {
        const result = await axios.get(URL_API);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const findByIdCategory = async (id) => {
    try {
        const result = await axios.get(URL_API + "/" + id)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}


