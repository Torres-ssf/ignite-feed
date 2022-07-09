import { IPostContent } from '../../components/Post'
import {
  filterHashtagsRegex,
  filterHtmlRegex,
  filterLinksRegex,
  filterMultipleEmptyLines,
  trimRegex,
} from '../regex'

export function formatInputedComment (textToFormat: string): IPostContent {
  const links: string[] = []
  const hashtags: string[] = []

  let text = textToFormat.replace(filterHtmlRegex, '')

  text = text.replace(filterMultipleEmptyLines, '\n\n')

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

export function trimText (text: string): string {
  return text.replace(trimRegex, '')
}
