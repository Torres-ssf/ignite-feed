import { format, formatDistanceToNow } from 'date-fns'
import {
  ThumbsUp,
  Trash,
} from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'
import { IAuthor, IPostContent } from './Post'
import { PostContent } from './PostContent'

export interface ICommentProps {
  id: string
  content: IPostContent
  likes: number
  author: IAuthor
  publishedAt: Date
}

export function Comment (props: ICommentProps) {
  const {
    author,
    likes,
    content,
    publishedAt,
  } = props

  const commentDate = format(publishedAt, "LLLL d 'at' HH:mm'h'")
  const commentDateToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src={author.avatar}
      />

     <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>{author.name}</strong>
            <time
              title={commentDate}
              dateTime={publishedAt.toISOString()}
            >
              {commentDateToNow}
            </time>
          </div>

          <button title="Delete comment">
            <Trash size={20} />
          </button>
        </header>

        <PostContent content={content} />
      </div>

      <footer>
        <button title="Like comment">
          <ThumbsUp size={20} />
          Like <span>{likes}</span>
        </button>
      </footer>
     </div>

    </div>
  )
}
