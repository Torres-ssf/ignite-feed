import styles from './Avatar.module.css'

interface IAvatarProps {
  hasBorder?: boolean
  src: string
}

export function Avatar (props: IAvatarProps) {
  const {
    src,
    hasBorder = true,
  } = props

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
