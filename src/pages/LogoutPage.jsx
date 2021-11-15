import { useEffect } from "react";
export default function Logout({ setToken }) {
    useEffect(() => { setToken(); }, []);
    return null;
}