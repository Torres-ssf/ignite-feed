import { PencilLine } from 'phosphor-react'

import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://avatars.githubusercontent.com/Torres-ssf"
        />
        <strong>Sergio Torres</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>

    </aside>
  )
}
