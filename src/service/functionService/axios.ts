import { axiosAPI } from "../AxiosCoreAPI";

export const create = async (data: any) => {
  const res = await axiosAPI.post(`/posts/`, data);
  return res;
};

export const get = async (id: number) => {
  const res = await axiosAPI.get(`/posts/${id}`);
  return res;
};

export const update = async (id: number, data: any) => {
  const res = await axiosAPI.put(`/posts/${id}`, data);
  return res;
};

export const remove = async (id: number) => {
  const res = await axiosAPI.delete(`/posts/${id}`);
  return res;
};
