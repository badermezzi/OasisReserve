import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeletBooking() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["bookings"],
            }),
                toast.success("Booking successfully deleted");
        },
        onError: (error) => toast.error(error.message),
    });

    return { isDeleting, deleteBooking }
}


