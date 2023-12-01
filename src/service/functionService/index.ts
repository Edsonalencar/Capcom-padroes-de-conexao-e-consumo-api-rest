import { BaseAPI } from "../BaseAPI";
const api = new BaseAPI();

export const create = async (data: any) => {
  const res = await api.post(`/posts/`, data);
  return res;
};

export const get = async (id: number) => {
  const res = await api.get(`/posts/${id}`);
  return res;
};

export const update = async (id: number, data: any) => {
  const res = await api.put(`/posts/${id}`, data);
  return res;
};

export const remove = async (id: number) => {
  const res = await api.delete(`/posts/${id}`);
  return res;
};
