import './App.css';

import {NewTodo} from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
    return (
        <>
            <div style={{marginTop: 40}}>
                <h1>Todo list</h1>
                <div>
                    <NewTodo/>
                </div>
                <div>
                    <TodoList/>
                </div>
            </div>
        </>
    );
}

export default App;
