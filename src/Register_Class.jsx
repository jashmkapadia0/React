import React from 'react';
import './style.css';
class Register_Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errmsg: {}};
    }
    doValidation() {
        var errors = {};
        var isvalid = true;
        if (this.state.Name === undefined || this.state.Name === "") {
            isvalid = false;
            errors["Name"] = "Please enter your name";
        }
        if (this.state.Email === undefined || this.state.Email === "") {
            isvalid = false;
            errors["Email"] = "Please enter your email";
        }
        if (this.state.Mobile.length !=10) {
            isvalid = false;
            errors["Mobile"] = "Please enter mobile number of 10 digits";
        }
        if (this.state.Semester === undefined || this.state.Semester === "Select") {
            isvalid = false;
            errors["Semester"] = "Please select your semester";
        }
        if(this.state.Gender === undefined) {
            isvalid = false;
            errors["Gender"] = "Please select your Gender";
        }
        if (this.state.Message === undefined || this.state.Message === "") {
            isvalid = false;
            errors["Message"] = "Please enter your message";
        }
        if (this.state.Password === undefined || this.state.Password === "") {
            isvalid = false;
            errors["Password"] = "Please enter your password";
        }
        if (this.state.ConfirmPassword === undefined || this.state.ConfirmPassword === "") {
            isvalid = false;
            errors["ConfirmPassword"] = "Please confirm your password";
        }
        if (this.state.Password !== this.state.ConfirmPassword) {
            isvalid = false;
            errors["PasswordMismatch"] = "Passwords do not match";
        }
        this.setState({ errmsg: errors });
        return isvalid;
    }
    render() {
        return (
            <>
            <h1>Register Page</h1>
            <p>Welcome to the registration page. Please fill out the form below to create a new account.</p>
            Name: <input type="text" placeholder="Enter Name" onChange={(e)=>this.setState({Name: e.target.value})}/> <br />
            {this.state.errmsg.Name && <span style={{color: "red"}}>{this.state.errmsg.Name}</span>} <br />
            Email: <input type="email" placeholder="Enter Email" onChange={(e)=>this.setState({Email: e.target.value})}/> <br />
            {this.state.errmsg.Email && <span style={{color: "red"}}>{this.state.errmsg.Email}</span>} <br />
            Mobile: <input type="number" placeholder="Enter Mobile Number" onChange={(e)=>this.setState({Mobile: e.target.value})} /> <br />
            {this.state.errmsg.Mobile && <span style={{color: "red"}}>{this.state.errmsg.Mobile}</span>} <br />
            Semester: <select id="dropdown" value={this.state.Semester} onChange={(e)=>this.setState({Semester: e.target.value})}> <br />
                <option value="Select">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br /> 
            {this.state.errmsg.Semester && <span style={{color: "red"}}>{this.state.errmsg.Semester}</span>} <br />
            Gender: <input type="radio" name = "txt1" onChange={(e)=>this.setState({Gender: e.target.value})} />male
                    <input type="radio" name = "txt1" onChange={(e)=>this.setState({Gender: e.target.value})} />female <br />
            {this.state.errmsg.Gender && <span style={{color: "red"}}>{this.state.errmsg.Gender}</span>} <br />
            Message: <textarea placeholder="Enter Message" onChange={(e)=>this.setState({Message: e.target.value})}></textarea> <br />
            {this.state.errmsg.Message && <span style={{color: "red"}}>{this.state.errmsg.Message}</span>} <br />
            Password: <input type="password" placeholder="Enter Password" onChange={(e)=>this.setState({Password: e.target.value})} /> <br />
            {this.state.errmsg.Password && <span style={{color: "red"}}>{this.state.errmsg.Password}</span>} <br />
            Confirm Password: <input type="password" placeholder="Confirm Password" onChange={(e)=>this.setState({ConfirmPassword: e.target.value})} /> <br />
            {this.state.errmsg.ConfirmPassword && <span style={{color: "red"}}>{this.state.errmsg.ConfirmPassword}</span>} <br />
            {this.state.errmsg.PasswordMismatch && <span style={{color: "red"}}>{this.state.errmsg.PasswordMismatch}</span>} <br />
            <button onClick={() => {
                if (this.doValidation()) {
                    alert("Registration Successful");
                }
            }}>Register</button>
            </>
        )
  }
}

export default Register_Class;
