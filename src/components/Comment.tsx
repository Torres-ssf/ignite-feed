import {
  format,
  formatDistanceToNow,
} from 'date-fns'
import {
  ThumbsUp,
  Trash,
} from 'phosphor-react'
import { useState } from 'react'

import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { IComment } from './Post'
import { PostContent } from './PostContent'

export interface ICommentProps extends IComment {
  onCommentDelete: (commentId: string) => void
}

export function Comment (props: ICommentProps) {
  const [likes, setLikes] = useState(props.likes)

  const {
    id,
    author,
    content,
    publishedAt,
    onCommentDelete,
  } = props

  function handleLikeComment () {
    setLikes((currentState) => currentState + 1)
  }

  function handleCommentDelete () {
    onCommentDelete(id)
  }

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

          <button type="button" title="Delete comment" onClick={handleCommentDelete}>
            <Trash size={20} />
          </button>
        </header>

        <PostContent content={content} />
      </div>

      <footer>
        <button
          type="button"
          className={`${styles.likeButton} ${likes > 0 ? styles.likeButtonPressed : ''}`}
          title="Like comment"
          onClick={handleLikeComment}
        >
          <ThumbsUp size={20} />
          Like <span>{likes}</span>
        </button>
      </footer>
     </div>

    </div>
  )
}
