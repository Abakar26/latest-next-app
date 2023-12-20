type Props = {
  promise: Promise<Post[]>
}

export default async function UserPost({ promise }: Props) {
  const posts = await promise
  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2 className="font-extrabold">{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    )
  })
  return content
}
