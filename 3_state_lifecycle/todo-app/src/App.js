import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        }
    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
    }
    handleAddItem = () => {
        if (this.state.item !== '') {
            this.setState({
                    list: [this.state.item, ...this.state.list]
                }
            )
        }
    }
    // listItems = this.state.list.map((item) => <li>{item}</li>);
    // eslint-disable-next-line react/require-render-return
    render() {
        return (
            <>
                <div>
                    <h1>Todo List</h1>
                    <input type="text"
                           onChange={event => this.handleChange(event)}
                    />
                    <button onClick={this.handleAddItem}>Add</button>
                </div>

                <ul>
                    {this.state.list.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>

            </>


        )
    }


}

export default App;
