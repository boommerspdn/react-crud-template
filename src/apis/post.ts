import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { Post } from "@/lib/types";

const baseURL = import.meta.env.VITE_API_URL;
const endPoint = "/posts";
const keys = "posts";

export const usePosts = () => {
  return useQuery<Post[]>({
    queryFn: () => axios.get(`${baseURL}${endPoint}`).then((res) => res.data),
    queryKey: keys,
  });
};

export const useGetPost = (id: string) => {
  return useQuery<Post>({
    queryFn: () =>
      axios.get(`${baseURL}${endPoint}/${id}`).then((res) => res.data),
    queryKey: [keys, id],
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Post) => axios.post(`${baseURL}${endPoint}`, data),
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};

export const useUpdatePost = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Post) => axios.put(`${baseURL}${endPoint}/${id}`, data),
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};

export const useDeletePost = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => axios.delete(`${baseURL}${endPoint}/${id}`),
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
