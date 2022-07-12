import {
  format,
  formatDistanceToNow,
} from 'date-fns'
import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  formatInputedComment,
  trimText,
} from '../utils/helpers'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
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

export interface IComment {
  id: string
  content: IPostContent
  likes: number
  author: IAuthor
  publishedAt: Date
}

export interface IPostProps {
  id: string
  author: IAuthor
  publishedAt: Date
  content: IPostContent
  comments: IComment[]
}

export function Post (props: IPostProps) {
  const [comments, setComments] = useState(props.comments)
  const [commentText, setCommentText] = useState('')

  function handleCommentSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const content = formatInputedComment(trimText(commentText))

    const comment: IComment = {
      id: uuidv4(),
      author,
      content,
      likes: 0,
      publishedAt: new Date(),
    }

    setComments([...comments, comment])

    setCommentText('')
  }

  function handleCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(event.target.value)
  }

  function handleCommentDelete (commentId: string) {
    setComments(currentState => currentState.filter(comment => comment.id !== commentId))
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

  const isCommentEmpty = trimText(commentText).length === 0

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
          onChange={handleCommentChange}
          required
        />
        <button type="submit" disabled={isCommentEmpty}>Add comment</button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            {...comment}
            key={comment.id}
            onCommentDelete={handleCommentDelete}
          />
        ))}
      </div>
    </article>
  )
}
