import axios from "axios";

export const findAllBook = async () => {
    try {
        const result = await axios.get("http://localhost:8080/books");
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const saveBook = async (book) => {
  try {
      const result = await axios.post('http://localhost:8080/books', book);
      return result.data;
  }catch (e) {
      console.log(e)
  }
}
export const findByIdBook = async (id) => {
  try {
      const result = await axios.get('http://localhost:8080/books/', id);
      return result.data;
  }catch (e) {
      console.log(e)
  }
}

