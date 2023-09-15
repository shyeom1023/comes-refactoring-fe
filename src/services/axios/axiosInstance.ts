import axios from 'axios';
import {useSetRecoilState} from "recoil";
import {isAuthenticatedState, userState} from "../../recoil/userAtoms";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json', // Set the default content type
        // Add other common headers here if needed
    },
    withCredentials: true,
});

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log("axios error", error)

        if (error.response.status === 401) {
            const setAuthUser = useSetRecoilState(userState);
            const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

            // Clear authentication state and user data
            setAuthUser(null)
            setIsAuthenticated(false)

            // Handle token expiration or refresh failure
            // ...
        }
        return Promise.reject(error);
    }
);

export default instance;