import LoginForm from "../components/LoginForm";

export default function LoginPage({setToken}) {
    return (
        <>
            <h2 align="center">Sign in</h2>
            <LoginForm setToken={setToken} />
        </>
    );
}