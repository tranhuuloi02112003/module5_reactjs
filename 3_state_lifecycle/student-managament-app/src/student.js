import {Component} from "react";

export class ComponentStudent extends Component {
    constructor() {
        super();
        this.state = {
            listStudent: [
                {id: 1, name: 'Huu Loi', address: 'Quang Nam', age: 19},
                {id: 2, name: 'Ha Nhi', address: 'Ha Noi', age: 19},
                {id: 3, name: 'Doan An', address: 'HCM', age: 18}
            ]
        }

    }

    render() {
        return (
            <>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Age</th>
                    </tr>
                    </thead>
                    {this.state.listStudent.map(value => (
                        <tr>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                            <td>{value.age}</td>
                        </tr>
                    ))}
                </table>
            </>
        );
    }
}
