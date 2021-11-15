
import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { SERVER_URL } from "../settings";
import makeOptions from "../utils/makeOptions";
import handleHttpErrors from "../utils/handleHttpErrors";
export default function LoginForm({ setToken }) {
    console.log(setToken);
    const URL = `${SERVER_URL}/api/login`;
    const [usernameValue, setUsernameValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    
    function submitLogin(event) {
        event.preventDefault();
        setIsLoggingIn(true);
        const options = makeOptions("POST", false, { username: usernameValue, password: passwordValue });
        fetch(URL, options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token);
                console.log("Token set: ", res.token);
            }).catch(err => {
                console.log(err);
            });
    }

    return <Form className="loginForm mt-3 m-auto" onSubmit={submitLogin}>
        <FormControl
            onChange={e => setUsernameValue(e.target.value)}
            className="mb-3"
            type="text"
            placeholder="username"
            id="username" />

        <FormControl
            onChange={e => setPasswordValue(e.target.value)}
            className="mb-3"
            type="password"
            placeholder="password"
            id="password" />

        <Button className="d-block mx-auto" type="submit" size="lg" disabled={!usernameValue || !passwordValue || isLoggingIn}>{isLoggingIn ? 'Signing in...' : 'Sign in'}</Button>
    </Form>
}