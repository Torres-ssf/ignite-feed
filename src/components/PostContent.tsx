import {
  matchLinkOrHashtagRegex,
  splitLinkOrHashtagRegex,
  testLinkProtocolRegex,
} from '../utils/regex'
import { IPostContent } from './Post'
import styles from './PostContent.module.css'

export interface IPostContentProps {
  content: IPostContent
}

export function PostContent (props: IPostContentProps) {
  const { content } = props

  const {
    text,
    links,
    hashtags,
  } = content

  let contentElement: JSX.Element

  if (links.length || hashtags.length) {
    const contentText = text.replace(matchLinkOrHashtagRegex, (match) => {
      const [, type, itemIndex] = match.split(splitLinkOrHashtagRegex)

      if (type === 'link' && links[Number(itemIndex)]) {
        const link = links[Number(itemIndex)]

        let hyperlink = link

        if (!testLinkProtocolRegex.test(link)) {
          hyperlink = 'http://' + hyperlink
        }

        return `<a href="${hyperlink}" target="_blank" rel="noreferrer">${link}</a>`
      }

      if (type === 'hashtag' && hashtags[Number(itemIndex)]) {
        const hashtag = hashtags[Number(itemIndex)]

        return `<a key={h} className={styles.hashtag} target="_blank" rel="noreferrer" href="https://twitter.com/search?q=%23${hashtag}">#${hashtag}</a>`
      }

      return match
    })

    contentElement = <p className={styles.content} dangerouslySetInnerHTML={{ __html: contentText }} />
  } else {
    contentElement = <p className={styles.content}>{content.text}</p>
  }

  return contentElement
}
