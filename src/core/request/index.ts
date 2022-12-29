type FetchOptions = RequestInit & { params?: FetchParams };
type FetchParams = Record<string, string>;
type FetchOptionsWithoutMethod = Omit<FetchOptions, 'method'>;
type FetchGetOptions = Omit<FetchOptionsWithoutMethod, 'body'>;

const httpRequest = {
  async request(url = '', options: FetchOptions = {}) {
    try {
      const params = new URLSearchParams(options.params || {});

      const uri = new URL(url);

      for (const [key, value] of params.entries()) {
        uri.searchParams.set(key, value);
      }

      const response = await fetch(uri, options);

      return await response.json();
    } catch (error: unknown) {
      throw new FetchError((error as { message: ErrorString })?.message);
    }
  },

  async get<T extends unknown>(url = '', options: FetchGetOptions = {}): Promise<T> {
    return await this.request(url, options);
  },

  async post(url = '', options: FetchOptionsWithoutMethod = {}) {
    return await this.request(url, {
      method: 'POST',
      ...options,
    });
  },

  async put(url = '', options: FetchOptionsWithoutMethod = {}) {
    return await this.request(url, {
      method: 'PUT',
      ...options,
    });
  },

  async delete(url = '', options: FetchGetOptions = {}) {
    return await this.request(url, {
      method: 'DELETE',
      ...options,
    });
  },
};

class FetchError extends Error {
  name = 'FetchError';
}

window.addEventListener('unhandledrejection', event => {
  if (event.reason instanceof FetchError) {
    console.error('Network error has occurred.');
  }
});

export default httpRequest;
