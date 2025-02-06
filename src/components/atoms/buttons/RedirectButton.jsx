import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RedirectButton = ({ to, children, ...props }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <Button onClick={handleClick} {...props}>
            { children }
        </Button>
    );
};

export default RedirectButton;
