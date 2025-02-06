import { Button } from "@/components/ui/button";
import { RiDeleteBin2Line } from "react-icons/ri";

const DeleteButton = ({ onClick }) => {
    return (
        <Button className="rounded-full" onClick={ onClick }>
            <RiDeleteBin2Line />
        </Button>
    )
};

export default DeleteButton;