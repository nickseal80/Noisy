import { useGetUserDataQuery } from "../store/auth/authApi";

export const useAuth = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        // redirect to login page
    }

    const { isLoading, isSuccess, isError, data } = useGetUserDataQuery(accessToken);

    return { isLoading, isSuccess, isError, data };
}
