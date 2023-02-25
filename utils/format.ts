export const markdownLayoutFilter = (key: string, text: string) =>
  text.split(`${key}(`)[1] ? text.split(`${key}(`)[1].split(')')[0] : ''

export const getMarkdownThumbnail = (text: string) => {
  return text.split('/images/')[1]?.split(')')[0]
}

export const getMarkdownContent = (text: string) =>
  text.split('---').slice(2).join()
