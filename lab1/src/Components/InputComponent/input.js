
import { Component } from "react";
import './input.css'; 
class InputClass extends Component {
    
    getData = (e) => {
        this.setState({ name: e.target.value })
    }
    resetData= (e)=>{
        this.setState({ name: "" })
    }
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }
    render() {
        return (
            <div className="container text-center py-3 px-5 rounded mt-4 w-50">
                <h5 className="mb-3">first-component</h5>
                <input type="text" name="name" placeholder="Name" value={this.state.name} autocomplete="off" onChange={this.getData}/>
                <button className="button" onClick={this.resetData}>Reset</button>
                <p className="mt-3 output">Output: {this.state.name}</p>
            </div>
        )
    }
}

export default InputClass;
