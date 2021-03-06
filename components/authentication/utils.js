import auth0 from 'auth0-js';
import Router from 'next/router';

export const authConfig = new auth0.WebAuth({
    clientID: `${process.env.clientID}`,
    domain: 'teamhelpme.auth0.com',
    redirectUri: 'https://helpmeapp-app.herokuapp.com/auth/signed-in',
    responseType: 'token id_token',
    scope: 'openid profile email',
});

export const setSession = authResult => {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
};

export const login = () => {
    authConfig.authorize();
};

export const logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
};

export const handleAuthentication = () => new Promise((resolve, reject) => {
    authConfig.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            setSession(authResult);
            Router.push('/timeline');
            return resolve();
        } if (err) {
            login();
            return reject();
        }
        return reject();
    });
});

export const isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
};
