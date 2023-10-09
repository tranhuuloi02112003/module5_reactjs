//selectUser là một hàm selector nhận vào toàn bộ state
// của Redux store và trả về phần state mà bạn quan tâm, ở đây là state.todos
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteUser, getAllUser} from "../redux/actions";
const selectUser = state => state.users
export default function UserList() {
    //useSelector là một hook cho phép bạn trích xuất dữ liệu từ Redux store state
    const users = useSelector(selectUser)
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    useEffect(() => {
        if (click){
            dispatch(getAllUser())
        }
    })
    const remove = async (id) =>{
        dispatch(deleteUser(id))
    }
    const handleGetAll = () => {
        console.log(click)
        setClick(!click)
    }
    return click? (
        <>
            <h1>User List</h1>
            <button onClick={handleGetAll}>Get Users</button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            {/*// onClick={() => handleDeleteUser(user.id)*/}
                            <button  onClick={() => remove(user.id)} >Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    ):<>
        <h1>User List</h1>
        <button onClick={handleGetAll}>Get Users</button>
    </>
}
