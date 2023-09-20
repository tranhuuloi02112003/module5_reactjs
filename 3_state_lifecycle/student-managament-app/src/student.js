import {Component} from "react";

export class ComponentStudent extends Component {
    constructor() {
        super();
        this.state = {
            listStudent: [
                {name: 'Huu Loi', address: 'Quang Nam', age: 19},
                {name: 'Ha Nhi', address: 'Ha Noi', age: 19},
                {name: 'Doan An', address: 'HCM', age: 18}
            ],
            form: {name: "", address: "", age: ""},
            isValid: false,
            indexSelected: -1
        }
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return {form}
        }, () => this.checkInvalidForm())
    }
    checkInvalidForm = () => {
        const {name, address, age} = this.state.form
        const value = name && address && age
        this.setState({
            isValid: value
        })
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }
    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = this.state.listStudent
            if (this.state.indexSelected > -1) {
                newList.splice(this.state.indexSelected,1,this.state.form)
            } else {
                newList.push(this.state.form)
            }
            this.setState({
                    listStudent: newList,
                    form: {name: "", address: "", age: ""}
                }
            )
        }
    }
    handleDelete= (index)=>{
        let data=this.state.listStudent;
        data.splice(index,1);
        this.setState({
                listStudent: data
            }
        )
    }


    render() {
        return (
            <>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={this.state.form.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Address: </label>
                        <input  name="address" value={this.state.form.address} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Age: </label>
                        <input name="age" value={this.state.form.age} onChange={this.handleChange}/>
                    </div>
                    {/* eslint-disable-next-line no-undef */}
                    <button onClick={this.handleSubmit}>Submit</button>


                    <table className="table">
                        <thead>
                        <tr>
                            {/*<th scope="col">Id</th>*/}
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        {this.state.listStudent.map((value,index) => (
                            <tr>
                                {/*<th scope="row">{value.id}</th>*/}
                                <td>{value.name}</td>
                                <td>{value.address}</td>
                                <td>{value.age}</td>
                                <td><button onClick={()=>this.handleSelect(value,index)}>Update</button></td>
                                <td><button onClick={()=>this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        ))}
                    </table>
                </div>



            </>
        );
    }
}
