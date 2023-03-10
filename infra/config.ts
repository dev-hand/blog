export const PREFIX =
  process.env.NODE_ENV === 'production'
    ? 'https://devshon.github.io/blog'
    : 'http://localhost:3000'

export const IS_DEV = process.env.NODE_ENV === 'development'

export const SHOW_AUDIO_KEY = 'SHOW_AUDIO'
