import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// export const getProductApi: any = async () => {
//   const { data, error, isPending } = useQuery({
//     queryKey: ["products"],
//     queryFn: () => {
//       axios.get("https://api.regalinheirs.com/api/v1/products");
//     },
//   });
//   return { data, error, isPending };
// };
export const getProductApi = () => {
  const { isPending, error, data }: any = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.regalinheirs.com/api/v1/products",
      );
      return response;
    },
  });
  return { isPending, error, data };
};
