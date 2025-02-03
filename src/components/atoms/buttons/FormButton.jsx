import { Button } from "@/components/ui/button";

const FormButton = ({ text, isSubmitting }) => {
    return (
        <Button type="submit" disabled={ isSubmitting }>
            { isSubmitting ? "Creadon..." : text } 
        </Button>
    );
};

export default FormButton;