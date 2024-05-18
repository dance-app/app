import { token } from '@states'

export const fetchApi = <T>(
  path: string,
  options?: {
    method?: 'POST' | 'GET'
    body?: Record<string, unknown>
  },
): Promise<T> =>
  fetch(`http://localhost:3333/${path}`, {
    method: options?.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      ...(token.get() ? { Authorization: `Bearer ${token.get()}` } : {}),
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
  }).then(r => r.json())
