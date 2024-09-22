import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {

    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            toast.success("Your account is successfully updated");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { updateUser, isUpdating }
}

