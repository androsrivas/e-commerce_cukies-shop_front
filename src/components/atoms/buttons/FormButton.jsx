import { Button } from "@/components/ui/button";

const FormButton = ({ submit, text }) => {
    return (
        <Button type={ submit }>
            { text } 
        </Button>
    );
};

export default FormButton;