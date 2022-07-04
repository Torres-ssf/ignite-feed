import {
  ThumbsUp,
  Trash,
} from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.comment}>
     <Avatar
      hasBorder={false}
      src="https://avatars.githubusercontent.com/Torres-ssf"
    />

     <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Sergio Torres</strong>
            <time title="May 11 at 08:34h" dateTime="2022-05-11 08:34:23">about one hour ago</time>
          </div>

          <button title="Delete comment">
            <Trash size={20} />
          </button>
        </header>

        <p>Muito bom Devon, parabéns!! 👏👏</p>
      </div>

      <footer>
        <button title="Like comment">
          <ThumbsUp size={20} />
          Like <span>20</span>
        </button>
      </footer>
     </div>

    </div>
  )
}
