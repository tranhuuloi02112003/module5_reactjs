import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import * as todoService from "../service/TodoService"

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetchAPI();
    },[]);
    const fetchAPI = async () => {
        const result = await todoService.findAll();
        setTodos(result);
    }
    return (
        <>
            <h1>Todo List</h1>
            <Formik
                initialValues={{
                    id:'',
                    name: ''
                }}
                onSubmit={(values) => {
                    const create = async () => {
                      await todoService.save(values)
                        fetchAPI();
                    }
                    create();
                    alert(values.name)
                }}>
                <Form>
                    <div>
                        <Field name='name' type="text"/>
                        <Field name='id' hidden />
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
            <ul>
                {todos.map((todo) => (
                    <li>{todo.name}</li>
                ))}
            </ul>
        </>
    )
}
