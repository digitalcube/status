import Head from 'next/head'
import Nav from '../components/nav'
import Posts from '../components/posts'
import Footer from '../components/footer'
import Container from '../components/container'

const siteID = process.env.NEXT_PUBLIC_HEADLESS_SITE_ID
const headlessURL = `hl-b.getshifter.co`
const baseURL = `https://${siteID}.${headlessURL}`
const restURL = `${baseURL}/wp-json/wp/v2`

export interface UpdatesProps {
  posts?: Record<string, unknown>
}

export default function Updates({ posts }: UpdatesProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Shifter Posts</title>
        <link rel="icon" href="/shifter.svg" />
        <meta property="og:title" content="Shifter Posts Updates" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/shifter.svg" />
        <meta
          property="og:url"
          content="https://dev-status-getshifter.netlify.app/updates/"
        />
      </Head>

      <Nav />

      <main>
        <Container>
          <Posts title="Changelog" posts={posts} />
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${restURL}/posts?category=4`)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
