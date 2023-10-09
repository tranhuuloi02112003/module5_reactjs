import axios from "axios";

export const getAllUser = async () => {
    try {
        const result = await axios.get("http://localhost:8080/users");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};
export const deleteUser = async (id) => {
    try {
        const result = await axios.delete("http://localhost:8080/users/" + id);
        return result.data;
    } catch (e) {
        console.log(e)

    }
}
// export const addNewUser = async(value) => {
//     try {
//         const result = await axios.post("http://localhost:8080/users", value);
//         return result.data;
//     } catch (e) {
//         console.log(e)
//     }
// }
