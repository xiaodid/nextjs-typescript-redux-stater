import fetch from 'isomorphic-unfetch'

export type FetchFn<S = any, R = any> = (data?: S) => Promise<R>

export const fetchCreator = <S = any, R = any>(url: string) => {
  const fetchFunc: FetchFn<S, R> = (data?: S) => {
    return fetch(url, {
      method: 'Post',
      body: JSON.stringify(data),
    }).then(r => r.json()).catch(error => error)
  }

  return fetchFunc
}
