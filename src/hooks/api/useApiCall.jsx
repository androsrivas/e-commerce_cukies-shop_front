import { useState, useCallback } from "react";
import useErrorHandler from "../error/useErrorHandler";

export function useApiCall() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { errors, statusCode, handleError, clearError } = useErrorHandler();

    const fetchData = useCallback(async (apiFunction, ...args) => {
        setLoading(true);
        clearError();

        try {
            const result = await apiFunction(...args);
            setData(result);
        } catch (e) {
            handleError(e);
        } finally {
            setLoading(false);
        }
    }, [clearError, handleError]);

    return { data, loading, errors, statusCode, fetchData };
};

export default useApiCall;

