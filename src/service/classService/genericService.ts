import { BaseAPI } from "../BaseAPI";
const api = new BaseAPI();

export class GenericService {
  url = "";

  constructor(url: string) {
    this.url = url;
  }

  create = async (data: any) => {
    const res = await api.post(`${this.url}`, data);
    return res;
  };

  get = async (query?: string) => {
    const res = await api.get(`${this.url}${query}`);
    return res;
  };

  update = async (id: number, data: any) => {
    const res = await api.put(`${this.url}${id}`, data);
    return res;
  };

  remove = async (id: number) => {
    const res = await api.delete(`${this.url}${id}`);
    return res;
  };
}
