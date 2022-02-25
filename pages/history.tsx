import Head from 'next/head'
import Nav from '../components/nav'
import Updates from '../components/updates'
import Footer from '../components/footer'
import Container from '../components/container'

export default function History() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Status History</title>
        <link rel="icon" href="/shifter.svg" />
        <meta property="og:title" content="Shifter Status History" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/shifter.svg" />
        <meta
          property="og:url"
          content="https://dev-status-getshifter.netlify.app/history/"
        />
      </Head>

      <Nav />

      <main>
        <Container>
          <Updates />
        </Container>
      </main>

      <Footer />
    </div>
  )
}
