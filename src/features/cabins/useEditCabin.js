import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {

    const queryClient = useQueryClient();

    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ cabinToEdit, id }) => createEditCabin(cabinToEdit, id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
            toast.success("Cabin successfully edited");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { editCabin, isEditing }
}

