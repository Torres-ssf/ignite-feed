import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { FormEvent, useState } from 'react'
import { ICommentProps } from './Comment'
import { PostContent } from './PostContent'

export interface IPostContent {
  text: string
  links: string[]
  hashtags: string[]
}

export interface IAuthor {
  name: string
  avatar: string
  role: string
}

export interface IPostProps {
  id: string
  author: IAuthor
  publishedAt: Date
  content: IPostContent
  comments: ICommentProps[]
}

export function Post (props: IPostProps) {
  const [commentText, setCommentText] = useState('')

  function handleCommentSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setCommentText('')
  }

  const {
    author,
    publishedAt: postedAt,
    content,
  } = props

  const postedDate = format(postedAt, "LLLL d 'at' HH:mm'h'")
  const postedDateToNow = formatDistanceToNow(postedAt, {
    addSuffix: true,
  })

  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={postedDate}
          dateTime={postedAt.toISOString()}
        >
          {postedDateToNow}
        </time>
      </header>

      <div className={styles.content}>
        <PostContent content={content} />
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          placeholder="Leave a comment"
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />

        <button type="submit">Add comment</button>
      </form>

      <div className={styles.commentList}>
        <p>comments</p>
      </div>
    </article>
  )
}
