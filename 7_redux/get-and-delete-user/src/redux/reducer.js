import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
/*
Hàm combineReducers chuyển đổi một đối tượng có các giá trị là các hàm reducing khác nhau
thành một hàm reducing duy nhất mà bạn có thể truyền vào createStore. Reducer kết quả gọi
tất cả reducer con và thu thập kết quả của chúng vào một đối tượng state duy nhất
*/
export const rootReducer = combineReducers({
    users: usersReducer,
    // username: LoginReducer,
})
