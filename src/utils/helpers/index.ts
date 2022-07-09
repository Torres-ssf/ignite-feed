import {
  filterHashtagsRegex,
  filterHtmlRegex,
  filterLinksRegex,
  filterMultipleEmptyLines,
  trimRegex,
} from '../regex'

export function formatTextContent (textToFormat: string) {
  const links: string[] = []
  const hashtags: string[] = []

  let text = textToFormat.replace(filterHtmlRegex, '') // remove HTML tags

  text = text.replace(filterMultipleEmptyLines, '\n\n')

  text = text.replace(trimRegex, '')

  let linksCount = 0
  let hashtagsCount = 0

  text = text.replace(filterLinksRegex, (match) => {
    links.push(match)

    return `{{link-${linksCount++}}}`
  })

  text = text.replace(filterHashtagsRegex, (match) => {
    hashtags.push(match.split(/#/)[1])

    return `{{hashtag-${hashtagsCount++}}}`
  })

  return {
    text,
    links,
    hashtags,
  }
}
