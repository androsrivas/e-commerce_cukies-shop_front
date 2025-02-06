import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

const DeleteCategoryModal = ({ isOpen, onClose, categoryId, categoryName, deleteCategoryById }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        if (categoryId) {
            setIsLoading(true);
            try {
                await deleteCategoryById(categoryId);
                onClose();
            } catch (error) {
                console.error("Error deleting category: ", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleCancel = () => {
        onClose();
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Delete { categoryName }</AlertDialogTitle>
                <AlertDialogDescription>
                    Are you sure you want to delete { categoryName }?
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={handleDelete}
                    disabled={isLoading}
                >
                    Delete
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

};

export default DeleteCategoryModal;