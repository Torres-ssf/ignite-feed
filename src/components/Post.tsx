import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post () {
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/Torres-ssf"
          />
          <div className={styles.authorInfo}>
            <strong>Jane Cooper</strong>
            <span>Dev Front-end</span>
          </div>
        </div>

        <time title="May 11 at 08:34h" dateTime="2022-05-11 08:34:23">Published one hour ago</time>
      </header>

      <div className={styles.content}>

        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">👉 &nbsp; jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>&nbsp;
          <a href="#">#nlw</a>&nbsp;
          <a href="#">#rocketseat</a>&nbsp;
        </p>
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
