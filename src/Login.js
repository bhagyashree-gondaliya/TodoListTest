
import './App.css';
import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import history from './history';
import { Link } from "react-router-dom";

function Login() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");


    const SubmitClicked = (e) => {
        e.preventDefault()

        if (userName && passWord !== "") {
            var data = {}
            data.username = userName
            data.passWord = passWord
            localStorage.setItem("LoginData", JSON.stringify(data));
            history.push('/todo');
            // window.location.reload(false)

        } else {
            alert("username or pass should not empty")
        }
    }
    const EmailChanged = (e) => {
        var email = e.target.value
        setUserName(email);
    }
    const PassChanged = (e) => {
        var pass = e.target.value
        setPassword(pass);
    }

    return (
        <Form onSubmit={SubmitClicked}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={EmailChanged} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={PassChanged} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            <Link to="/register">Register</Link>

        </Form>
    );
}

export default Login;
