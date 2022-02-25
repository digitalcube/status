import Container from './container'

export interface PostProps {
  title?: string
  content?: string
}

function Post({ title, content }: PostProps) {
  return (
    <article className="container mx-auto my-5">
      <h2 className="font-bold">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
    </article>
  )
}

export interface PostsProps {
  posts?: any
  title?: string
  per_page?: number
}

export default function Posts({ posts, title }: PostsProps) {
  return (
    <Container>
      <h1 className="mb-8 text-center text-3xl">{title}</h1>
      {posts.map((post: any, i: number) => {
        return (
          <Post
            key={i}
            title={post.title.rendered}
            content={post.content.rendered}
          />
        )
      })}
    </Container>
  )
}

Posts.defaultProps = {
  posts: [],
}
