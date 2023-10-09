import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux'
//selectTodos là một hàm selector nhận vào toàn bộ state
// của Redux store và trả về phần state mà bạn quan tâm, ở đây là state.todos
const selectTodos = state => state.todos
export default function TodoList() {
    //useSelector là một hook cho phép bạn trích xuất dữ liệu từ Redux store state
    const todos = useSelector(selectTodos)
    return (
        <div>
            {todos.map(todo => {
                return (
                    <TodoListItem todo= { todo } key={ todo.id } />
                );
            })}
        </div>
    );
}
