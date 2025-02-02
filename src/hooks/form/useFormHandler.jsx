import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const useFormHandler = (schema, defaultValues, onSubmit) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        reset,
    };
}

export default useFormHandler