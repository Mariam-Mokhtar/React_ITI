import { Component } from "react";
import "./form.css"

class Form extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "",
                email: ""
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Input values:', this.state.user);
        this.props.onKeyChange(this.state.user)
        this.setState(() => ({
            user: {
                name: "",
                email: ""
            }
        }));
    };

    render() {
        return (
            <section className="section_form border-1 shadow-lg rounded-3 mx-auto py-3 text-center mt-4">
                <form id="consultation-form" className="feed-form  mx-auto" action="#" onSubmit={this.handleSubmit}>
                    <input required="" name="name" placeholder="Name" value={this.state.user.name} type="text" autoComplete="off" onChange={this.handleInputChange} />
                    <input name="email" required="" placeholder="E-mail" value={this.state.user.email} type="email" autoComplete="off" onChange={this.handleInputChange} />
                    <div className="text-center">
                        <button className="button_submit mx-auto" type="submit">Register</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Form;
