export const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://devshon.github.io/blog'
    : 'http://localhost:3000'

export const isDev = process.env.NODE_ENV === 'development'
