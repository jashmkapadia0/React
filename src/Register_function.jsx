import React from "react";
function Register_function() {
    const [state, setState] = React.useState({
        Name: "",
        Email: "",
        Mobile: "",
        Semester: "Select",
        Gender: "",
        Message: "",
        Password: "",
        ConfirmPassword: ""
    });
    const [errmsg, setErrmsg] = React.useState({});

    const doValidation = () => {
        let errors = {};
        let isvalid = true;
        if (state.Name === "") {
            isvalid = false;
            errors["Name"] = "Please enter your name";
        }
        if (state.Email === "") {
            isvalid = false;
            errors["Email"] = "Please enter your email";
        }
        if (state.Mobile.length !== 10) {
            isvalid = false;
            errors["Mobile"] = "Please enter mobile number of 10 digits";
        }
        if (state.Semester === "Select") {
            isvalid = false;
            errors["Semester"] = "Please select your semester";
        }
        if (state.Gender === "undefined") {
            isvalid = false;
            errors["Gender"] = "Please select your gender";
        }
        if (state.Message === "") {
            isvalid = false;
            errors["Message"] = "Please enter your message";
        }
        if (state.Password === "") {
            isvalid = false;
            errors["Password"] = "Please enter your password";
        }
        if (state.ConfirmPassword === "") {
            isvalid = false;
            errors["ConfirmPassword"] = "Please confirm your password";
        }
        if (state.Password !== state.ConfirmPassword) {
            isvalid = false;
            errors["PasswordMismatch"] = "Passwords do not match";
        }
        setErrmsg(errors);
        return isvalid;
    }
    return (
        <>
            <h1>Register Page</h1>
            <p>Welcome to the registration page. Please fill out the form below to create a new account.</p>
            Name: <input type="text" placeholder="Enter Name" onChange={(e) => setState({ ...state, Name: e.target.value })} /> <br />
            {errmsg.Name && <span style={{ color: "red" }}>{errmsg.Name}</span>} <br />
            Email: <input type="email" placeholder="Enter Email" onChange={(e) => setState({ ...state, Email: e.target.value })} /> <br />
            {errmsg.Email && <span style={{ color: "red" }}>{errmsg.Email}</span>} <br />
            Mobile: <input type="number" placeholder="Enter Mobile Number" onChange={(e) => setState({ ...state, Mobile: e.target.value })} /> <br />
            {errmsg.Mobile && <span style={{ color: "red" }}>{errmsg.Mobile}</span>} <br />
            Semester: <select onChange={(e) => setState({ ...state, Semester: e.target.value })}>
                <option value="Select">Select</option>
                <option value="1st">1</option>
                <option value="2nd">2</option>
                <option value="3rd">3</option>
                <option value="4th">4</option>
            </select> <br />
            {errmsg.Semester && <span style={{ color: "red" }}>{errmsg.Semester}</span>} <br /> 
            Gender: <input type="radio" name = "txt1" value="Male" onChange={(e) => setState({ ...state, Gender: e.target.value })} />Male 
                    <input type="radio" name="txt1" value="Female" onChange={(e) => setState({ ...state, Gender: e.target.value })} />Female <br />
            {errmsg.Gender && <span style={{ color: "red" }}>{errmsg.Gender}</span>} <br />
            Message: <textarea placeholder="Enter your message" onChange={(e) => setState({ ...state, Message: e.target.value })}></textarea> <br />
            {errmsg.Message && <span style={{ color: "red" }}>{errmsg.Message}</span>} <br />
            Password: <input type="password" placeholder="Enter Password" onChange={(e) => setState({ ...state, Password: e.target.value })} /> <br />
            {errmsg.Password && <span style={{ color: "red" }}>{errmsg.Password}</span>} <br />
            Confirm Password: <input type="password" placeholder="Confirm Password" onChange={(e) => setState({ ...state, ConfirmPassword: e.target.value })} /> <br />
            {errmsg.ConfirmPassword && <span style={{ color: "red" }}>{errmsg.ConfirmPassword}</span>} <br />
            {errmsg.PasswordMismatch && <span style={{ color: "red" }}>{errmsg.PasswordMismatch}</span>} <br />
            <button onClick={() => {
                if (doValidation()) {
                    alert("Registration successful!");
                }
            }}>Register</button>
        </>
    );
}
export default Register_function; 