export class BaseAPI {
  token = "";
  baseUrl = "http://localhost:8080";

  constructor(baseUrl?: string) {
    if (baseUrl) this.baseUrl = baseUrl;
  }

  async post(url: string, body: any) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    return await res.json();
  }

  async get(url: string) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      method: "GET",
    });

    return await res.json();
  }

  async put(url: string, body: any) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      method: "PUT",
      body: JSON.stringify(body),
    });

    return await res.json();
  }

  async patch(url: string, body: any) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      method: "PATCH",
      body: JSON.stringify(body),
    });

    return await res.json();
  }

  async delete(url: string) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      method: "DELETE",
    });

    return await res.json();
  }
}
