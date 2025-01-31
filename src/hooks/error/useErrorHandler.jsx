import { useState } from "react";

const useErrorHandler = () => {
    const [errors, setErrors] = useState([]);
    const [statusCode, setStatusCode] = useState(null);

    const handleError = (error) => {
        if (error.response) {
            const { data, status } = error.response;
            const messages = Array.isArray(data?.messages) ? data.messages : [data?.message || "An unknown error occurred."];

            setErrors(messages);
            setStatusCode(status);
        } else if (error.request) {
            setErrors(["Network error: could not reach the server."]);
            setStatusCode(500);
        } else {
            setErrors([error.message || "Unexpected error occurred."]);
            setStatusCode(500);
        }
    };

    const addError = (message, status = null) => {
        setErrors(prevErrors => [...prevErrors, message]);
        if (status) setStatusCode(status);
    };
    

    const clearErrors = () => {
        setErrors([]);
        setStatusCode(null);
    }

    return {  
        errors,
        latestError: errors.length > 0 ? errors[errors.length - 1] : null,
        statusCode,
        handleError,
        addError,
        clearErrors
    };
};

export default useErrorHandler;