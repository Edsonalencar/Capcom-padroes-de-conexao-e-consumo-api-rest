import { BaseAPI } from "../BaseAPI";
const api = new BaseAPI();

export class PostService {
  static create = async (data: any) => {
    const res = await api.post("/posts/", data);
    return res;
  };

  static get = async (query?: string) => {
    const res = await api.get(`/posts/${query}`);
    return res;
  };

  static update = async (id: number, data: any) => {
    const res = await api.put(`/posts/${id}`, data);
    return res;
  };

  static remove = async (id: number) => {
    const res = await api.delete(`/posts/${id}`);
    return res;
  };
}
