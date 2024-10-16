import { serialize } from 'cookie';
// import { cookies } from 'next/headers'
export const setCookie = (name: string, value: string, options = {}) => {
    console.log('>>>is cookies');
    return serialize(name, String(value), {
        path: '/',
        httpOnly: true,
        ...options,
    });
};
// export const getCookie = (name: string) => {
//     const value = cookies().get(name);
//     // return value? JSON.parse(value) : null;
//     return value
// }