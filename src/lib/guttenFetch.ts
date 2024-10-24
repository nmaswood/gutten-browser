type FetchApiConfig = Omit<RequestInit, "body">;

type FetchApiResponse<T> = {
  status: number;
  data: T;
};

const BASE_URL = "https://gutendex.com/";

const fetchApi = {
  get<T>(
    url: string,
    config: FetchApiConfig = {}
  ): Promise<FetchApiResponse<T>> {
    return this.request<T>({ method: "GET", url, ...config });
  },

  async request<T>({
    url,
    method,
    headers = {},
    body,
    ...rest
  }: RequestInit & { url: string }): Promise<FetchApiResponse<T>> {
    const options: RequestInit = {
      method,
      headers: headers,
      body,
      ...rest,
    };
    const completeUrl = `${BASE_URL}${url}`;
    const response = await fetch(completeUrl, options);
    const data = await response.json();
    return { status: response.status, data };
  },
};

export default fetchApi;
