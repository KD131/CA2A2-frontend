export default function makeOptions(method, addToken, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
        }
    }
    if (addToken) opts.headers["x-access-token"] = localStorage.getItem('jwtToken');;
    if (body) opts.body = JSON.stringify(body);

    return opts;
}
