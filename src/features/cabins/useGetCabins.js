import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useGetCabins() {

    const {
        data: cabinsData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
    });

    return { cabinsData, isLoading, error }
}

