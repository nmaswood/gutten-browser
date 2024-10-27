type ApiProvider = "gutendex" | "gutenberg" | "llm";

type FetchApiConfig = Omit<RequestInit, "body"> & {
  provider: ApiProvider;
};

type FetchApiResponse<T> = {
  status: number;
  data: T;
};

const GUTTENDEX_BASE_URL = "https://gutendex.com/";

const GUTTENBERG_BASE_URL = "https://www.gutenberg.org/";

const LLM_BASE_URL = "";

const getProviderBaseUrl = (provider: ApiProvider) => {
  switch (provider) {
    case "gutendex":
      return GUTTENDEX_BASE_URL;
    case "gutenberg":
      return GUTTENBERG_BASE_URL;
    case "llm":
      return LLM_BASE_URL;
  }
};

const fetchApi = {
  get<T>(
    url: string,
    config: FetchApiConfig = {
      provider: "gutendex",
    }
  ): Promise<FetchApiResponse<T>> {
    return this.request<T>({ method: "GET", url, ...config });
  },

  post<T>(
    url: string,
    data: RequestInit["body"],
    config: FetchApiConfig = {
      provider: "gutendex",
    }
  ): Promise<FetchApiResponse<T>> {
    return this.request<T>({
      method: "POST",
      url,
      body: data,
      ...config,
    });
  },

  async request<T>({
    url,
    method,
    headers = {},
    body,
    provider,
    ...rest
  }: RequestInit & { url: string; provider: ApiProvider }): Promise<
    FetchApiResponse<T>
  > {
    const options: RequestInit = {
      method,
      headers: headers,
      body,
      ...rest,
    };

    const providerBaseUrl = getProviderBaseUrl(provider);
    const completeUrl = `${providerBaseUrl}${url}`;
    const response = await fetch(completeUrl, options);

    const contentType = response.headers.get("content-type");
    const isJsonResponse =
      contentType && contentType.includes("application/json");

    const data = isJsonResponse
      ? await response.json()
      : ((await response.text()) as unknown as T);

    return { status: response.status, data };
  },
};

export default fetchApi;
