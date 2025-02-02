import { Button } from "@/components/ui/button";

const FormButton = ({ children, ...props }) => {
    return (
        <Button type="submit" disabled={ props.disabled }>
            { props.loading ? "Enviando..." : children} 
        </Button>
    );
};

export default FormButton;