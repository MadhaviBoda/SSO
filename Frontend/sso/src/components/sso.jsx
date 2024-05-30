import { usefetchwrapper } from "../api"

export const sso = () => {
    const fetchwrapper = usefetchwrapper();

    function login(name, password) {
        const url = `/login`;
        return fetchwrapper.post(url, {
            name: name,
            password: password,
        });
    }

    function resetPassword(username, newPassword) { // Changed to username
        const url = `/forget-password`;
        return fetchwrapper.post(url, {
            username: username, // Changed to username
            newPassword: newPassword,
        });
    }

    return { login, resetPassword };
}
