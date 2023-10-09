
import * as userService from "../services/userService";

export const getAllUser = () => async (dispatch) => {
    const res = await userService.getAllUser();
    dispatch({
        type: "get_all",
        payload: res
    })
}

/*Trong React, dispatch là một hàm được sử dụng để gửi (dispatch) các hành động đến store. Các hành động
này thường được định nghĩa trong các hàm action và chúng mô tả những thay đổi nào sẽ xảy ra trong store.
Khi một hành động được gửi đi, dispatch sẽ chuyển hành động đó đến reducer tương ứng. Reducer sau đó
sẽ xử lý hành động và trả về state mới.*/
export const deleteUser = (id) => async (dispatch) => {
    await userService.deleteUser(id);
    dispatch({
        type: "delete_user",
        payload: id
    })
}

