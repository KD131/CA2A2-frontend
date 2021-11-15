import { SERVER_URL } from "../settings";
import handleHttpErrors from "../utils/handleHttpErrors";
import makeOptions from "../utils/makeOptions";
import useToken from "./useToken";

export default function useLogin() {
    const URL = `${SERVER_URL}/api/login`
    const { setToken } = useToken();

    function login(user, pass) {
        const options = makeOptions("POST", false, { username: user, password: pass });
        return fetch(URL, options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token);
            }).catch(err => {
                console.log(err);
            });
    }

    function logout() {
        setToken(null);
    }

    return [login, logout]
}
