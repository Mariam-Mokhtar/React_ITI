import { Component } from "react";
import Form from "../form/form";
import Users from "../users/users"
class Home extends Component{
    constructor(){
        super();
        this.state = {
            AllStudents : []
        }
    }
    addNewUser = (user)=>{
        console.log(user);
        this.setState((prevState) => ({
            AllStudents: [
                ...prevState.AllStudents,
                user
            ]
        }));
        console.log(this.state.AllStudents);
    }
    render(){
        return(
            <div>
                <Form onKeyChange={this.addNewUser}/> 
                <Users list={this.state.AllStudents}/> 
            </div>
        )
    }
}
export default Home;