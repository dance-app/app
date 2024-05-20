import { token } from '@states'

export const fetchApi = <T>(
  path: string,
  options?: {
    method?: 'POST' | 'GET'
    body?: Record<string, unknown>,
    queryParams?: Record<string, string>
  },
): Promise<T> =>
  fetch(`http://localhost:3333/${path}${getQueryParams(options?.queryParams)}`, {
    method: options?.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      ...(token.get() ? { Authorization: `Bearer ${token.get()}` } : {}),
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
  }).then(r => r.json())


function getQueryParams(queryParams?: Record<string, string>) {
  if (!queryParams) return '';

  const queryString = new URLSearchParams(queryParams).toString();
  
  return queryString ? `?${queryString}` : '';
}
