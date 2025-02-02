import { useState, useCallback } from "react";
import useErrorHandler from "../error/useErrorHandler";

export function useApiCall() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { errors, statusCode, handleError, clearErrors } = useErrorHandler();

    const fetchData = useCallback(async (apiFunction, ...args) => {
        setLoading(true);
        clearErrors();

        try {
            const result = await apiFunction(...args);
            setData(result);
        } catch (e) {
            handleError(e);
        } finally {
            setLoading(false);
        }
    }, [clearErrors, handleError]);

    return { data, loading, errors, statusCode, fetchData, clearErrors };
};

export default useApiCall;

