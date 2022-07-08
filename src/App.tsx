import './global.css'

import styles from './App.module.css'
import { Header } from './components/Header'
import { IPostProps, Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App () {
  const posts: IPostProps[] = [
    {
      id: '0',
      author: {
        avatar: 'https://avatars.githubusercontent.com/Torres-ssf',
        name: 'Torres-ssf',
        role: 'Software Engineer',
      },
      publishedAt: new Date(),
      content: {
        text: `Fala galeraa 👋
        
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          
          👉 {{link-0}}

          {{hashtag-0}} {{hashtag-1}} {{hashtag-2}}
        `,
        links: ['jane.design/doctorcare'],
        hashtags: ['newproject', 'nlw', 'rocketseat'],
      },
      comments: [
        {
          id: '0',
          author: {
            avatar: 'https://avatars.githubusercontent.com/Torres-ssf',
            name: 'Torres-ssf',
            role: 'Software Engineer',
          },
          likes: 10,
          publishedAt: new Date(),
          content: {
            text: `Fala galeraa 👋
            
              Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
              
              👉 {{link-0}}
    
              {{hashtag-0}} {{hashtag-1}} {{hashtag-2}}
            `,
            links: ['jane.design/doctorcare'],
            hashtags: ['newproject', 'nlw', 'rocketseat'],
          },
        },
      ],
    },
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return <Post
              key={post.id}
              {...post}
            />
          })}
        </main>
      </div>
    </>
  )
}
