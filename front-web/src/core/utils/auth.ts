import jwtDecode from 'jwt-decode'
export const CLIENT_ID = 'softperson';
export const CLIENT_SECRET = 'softperson123';


type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userEmail: string;
    userID: number
}

type Role = 'OPERATOR' | 'ADMIN';

type AcessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}

export const getAcesstokenDecoded = () => {
    const sessionData = getSessionData();

    const tokenDecoded = jwtDecode(sessionData.access_token);
     return tokenDecoded as AcessToken;
}

export const isTokenValid = () => {
    const { exp } = getAcesstokenDecoded();

    if (Date.now() <= exp * 1000) {
        return true
    }
    return false
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();

    return sessionData.access_token && isTokenValid();
}