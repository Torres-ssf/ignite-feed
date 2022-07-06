import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'

export interface IPostProps {
  id: string
  avatarSrc: string
  date: Date
  name: string
  role: string
  comments: {
    type: 'paragraph' | 'link' | 'hashtag' | 'blankline'
    content: string | string[]
    link?: string
  }[]
}

export function Post (props: IPostProps) {
  const {
    avatarSrc,
    comments,
    date,
    name,
    role,
  } = props

  const publishedDate = format(date, "LLLL d 'at' HH:mm'h'")
  const publishedDateToNow = formatDistanceToNow(date, {
    addSuffix: true,
  })

  let contentElement: JSX.Element[] = []

  contentElement = comments.map(comment => {
    switch (comment.type) {
      case 'paragraph':
        return <p>{comment.content}</p>

      case 'link':
        return (
          <a
            href={comment.link}
            target="_blank"
            rel="noreferrer"
          >
            {comment.content}
          </a>
        )

      case 'hashtag':
        return (
          <p>{(comment.content as string[]).map((h: string) => (
            <a
              key={h}
              className={styles.hashtag}
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/search?q=%23${h}`}
            >
              {`#${h} `}
            </a>
          ))}</p>
        )

      default:
        return <br />
    }
  })

  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar
            src={avatarSrc}
          />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time
          title={publishedDate}
          dateTime={date.toISOString()}
        >
          {publishedDateToNow}
        </time>
      </header>

      <div className={styles.content}>
        {contentElement}
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          placeholder="Leave a comment"
        />

        <button type="submit">Add comment</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>

  )
}
