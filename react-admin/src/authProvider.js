import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://api.peugeot.vn/api/authenticate', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token, user }) => {
                if(token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    throw new Error('Username hoặc mật khẩu không đúng');
                }
                
            });
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const status = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/no-access' });
    }
    return Promise.reject('Unknown method');
};