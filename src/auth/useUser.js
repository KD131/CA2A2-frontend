import { useState, useEffect } from 'react';

export default function useUser() {
    const [user, setUser] = useState();
    const [token, setTokenState] = useState(() => {
        return localStorage.getItem('jwtToken'); // default value
    });

    const [payload, setPayload] = useState(() => {
        return token ? getPayloadFromToken(token) : null;
    });

    function setToken(token) {
        if (!token) localStorage.removeItem("jwtToken");
        else localStorage.setItem('jwtToken', token);
        setPayload(getPayloadFromToken(token));
        setTokenState(token);
        console.log("SET TOKEN");
    }

    function getPayloadFromToken(token) {
        if (!token) return null;
        const encodedPayload = token.split('.')[1];
        return JSON.parse(Buffer.from(encodedPayload, 'base64'));
    }

    useEffect(() => {
        if (!token) return;
        const { exp } = payload;
        const expiresIn = (exp * 1000) - Date.now();
        setTimeout(() => {
            setPayload(null);
            setToken(null);
            console.log("EXP TIMER EXPIRED");
        }, expiresIn);
    }, [token]);


    useEffect(() => {
        if (!payload) return;
        const { username, roles } = payload;
        const rolesArray = roles.split(",");
        setUser({ username: username, roles: rolesArray });
        console.log("USER SET");
    }, [payload]);

    return [user, token, setToken];
}