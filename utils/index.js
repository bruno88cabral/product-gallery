export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const monetary = value => `R$ ${String(value).replace('.', ',')}`;