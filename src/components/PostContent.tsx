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
    let contentText = text.replace(/\{\{link-[0-9]*\}\}/g, (match) => {
      const linkIndex = match.split(/-|\}\}/)[1]

      const link = links[Number(linkIndex)]

      let hyperlink = link

      if (!link.match('^https?://')) {
        hyperlink = 'http://' + hyperlink
      }

      return `<a href="${hyperlink}" target="_blank" rel="noreferrer">${link}</a>`
    })

    contentText = contentText.replace(/\{\{hashtag-[0-9]*\}\}/g, (match) => {
      const hashtagIndex = match.split(/-|\}\}/)[1]

      const hashtag = hashtags[Number(hashtagIndex)]

      return `<a key={h} className={styles.hashtag} target="_blank" rel="noreferrer" href="https://twitter.com/search?q=%23${hashtag}">#${hashtag}</a>`
    })

    contentElement = <p className={styles.content} dangerouslySetInnerHTML={{ __html: contentText }} />
  } else {
    contentElement = <p className={styles.content}>{content.text}</p>
  }

  return contentElement
}
